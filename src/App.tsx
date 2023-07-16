import './App.css';
import { Provider as ReduxProvider } from "react-redux";
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import PageLayout from './pages/layouts/PageLayout';
import AppRoutes from './routes/AppRoutes';

const App = (props: any) => {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <PageLayout >
            <AppRoutes />
          </PageLayout>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;
