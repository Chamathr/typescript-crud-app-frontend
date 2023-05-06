import './App.css';
import ProjectRoutes from './routes/Routes';
import { Provider as ReduxProvider } from "react-redux";
import { store } from './redux/store';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { EventType } from '@azure/msal-browser';
import { useEffect } from 'react';
import { b2cPolicies } from './auth/auth';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { compareIssuingPolicy } from './utils/claimUtils';
import { PageLayout } from './components/Layout/PageLayout';

const Pages = () => {
  /**
   * useMsal is hook that returns the PublicClientApplication instance,
   * an array of all accounts currently signed in and an inProgress value
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { instance } = useMsal();
  useEffect(() => {
    const callbackId = instance.addEventCallback((event: any) => {
      if (
        (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
        event.payload.account
      ) {
        /**
         * For the purpose of setting an active account for UI update, we want to consider only the auth
         * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy
         * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
         * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
         */
        if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
          // retrieve the account from initial sing-in to the app
          const originalSignInAccount = instance
            .getAllAccounts()
            .find(
              (account: any) =>
                account.idTokenClaims.oid === event.payload.idTokenClaims.oid &&
                account.idTokenClaims.sub === event.payload.idTokenClaims.sub &&
                account.idTokenClaims['tfp'] === b2cPolicies.names.signUpSignIn
            );

          let signUpSignInFlowRequest = {
            authority: b2cPolicies.authorities.signUpSignIn.authority,
            account: originalSignInAccount,
          };

          // silently login again with the signUpSignIn policy
          instance.ssoSilent(signUpSignInFlowRequest);
        }

        /**
         * Below we are checking if the user is returning from the reset password flow.
         * If so, we will ask the user to reauthenticate with their new password.
         * If you do not want this behavior and prefer your users to stay signed in instead,
         * you can replace the code below with the same pattern used for handling the return from
         * profile edit flow
         */
        if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.forgotPassword) {
          let signUpSignInFlowRequest: any = {
            authority: b2cPolicies.authorities.signUpSignIn.authority,
          };
          instance.loginRedirect(signUpSignInFlowRequest);
        }
      }

      if (event.eventType === EventType.LOGIN_FAILURE) {
        // Check for forgot password error
        // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
        if (event.error && event.error.errorMessage.includes('AADB2C90118')) {
          const resetPasswordRequest = {
            authority: b2cPolicies.authorities.forgotPassword.authority,
            scopes: [],
          };
          instance.loginRedirect(resetPasswordRequest);
        }
      }
    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
    // eslint-disable-next-line
  }, [instance]);

  return (
    <ProjectRoutes />
  );
};

/**
* msal-react is built on the React context API and all parts of your app that require authentication must be
* wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
* then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
* PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
* https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
*/

const App = (props: any) => {
  return (
    <>
      <MsalProvider instance={props.instance}>
        <ReduxProvider store={store}>
          <PageLayout>
            <Pages />
          </PageLayout>
        </ReduxProvider>
      </MsalProvider>
    </>
  );
}

export default App;
