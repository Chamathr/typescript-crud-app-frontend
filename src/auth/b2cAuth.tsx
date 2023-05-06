import React from "react";
import * as msal from "msal";

const state: any = {
  stopLoopingRedirect: false,
  config: {
    scopes: [],
    cacheLocation: null,
  },
  launchApp: null,
  accessToken: null,
  msalObj: null,
};

const LOCAL_STORAGE = "localStorage";
const AUTHORIZATION_KEY = "Authorization";
const AUTH_USER_ID = "AuthUserId";

const isIE = function isIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ") > -1;
  const msie11 = ua.indexOf("Trident/") > -1;
  return msie || msie11;
};

const B2C_SCOPES = {
  API_ACCESS: {
    scopes: ["openid"],
  },
};

const msalAppConfig: any = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_B2C_CLIENT_ID,
    authority: process.env.REACT_APP_AZURE_B2C_AUTHORITY,
    redirectUri: process.env.REACT_APP_AZURE_B2C_REDIRECT_URI,
    validateAuthority: false,
    postLogoutRedirectUri: process.env.REACT_APP_AZURE_B2C_POST_LOGOUT_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: isIE(),
  },
};

const acquireToken: any = (successCallback: any) => {
  const account = msalApp.getAccount();

  if (!account) {
    msalApp.loginRedirect(B2C_SCOPES.API_ACCESS);
  } else {
    msalApp.acquireTokenSilent(B2C_SCOPES.API_ACCESS).then(
      (result: any) => {
        if (msalAppConfig.cache.cacheLocation === LOCAL_STORAGE) {
          window.localStorage.setItem(AUTHORIZATION_KEY, "Bearer " + result);
        } else {
          window.sessionStorage.setItem(AUTHORIZATION_KEY, result.idToken.rawIdToken);
          window.sessionStorage.setItem(AUTH_USER_ID, result.uniqueId);
        }

        state.accessToken = result.idToken.rawIdToken;
        if (state.launchApp) {
          state.launchApp();
        }
        if (successCallback) {
          successCallback();
        }
      },
      (error: any) => {
        if (error) {
          msalApp.acquireTokenRedirect(B2C_SCOPES.API_ACCESS);
        }
      }
    );
  }
}

let msalApp: msal.UserAgentApplication;

const authentication = {
  initialize: () => {
    msalApp = new msal.UserAgentApplication(msalAppConfig);
  },
  run: (launchApp: any) => {
    state.launchApp = launchApp;
    msalApp.handleRedirectCallback((error: any) => {
      if (error) {
        const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token.";
        console.log(errorMessage);
      }
    });
    acquireToken();
  },
  required: (WrappedComponent: any, renderLoading: any) => {
    return class extends React.Component {
      constructor(props: any) {
        super(props);
        this.state = {
          signedIn: false,
          error: null,
        };
      }

      render() {
        if (state.signedIn) {
          return <WrappedComponent {...this.props} />;
        }
        return typeof renderLoading === "function" ? renderLoading() : null;
      }
    };
  },

  signOut: function signOut() {
    return msalApp.logout();
  },
  getAccessToken: function getAccessToken() {
    return state.accessToken;
  },
};

export default authentication;