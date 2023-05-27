import './App.css';
import ProjectRoutes from './routes/AuthRoutes';
import { Provider as ReduxProvider } from "react-redux";
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import PageLayout from './pages/layout/PageLayout';
import AuthPages from './auth/authPage';

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
        <ReduxProvider store={store}>
          <BrowserRouter>
            <PageLayout>
              <AuthPages />
            </PageLayout>
          </BrowserRouter>
        </ReduxProvider>
    </>
  );
}

export default App;
