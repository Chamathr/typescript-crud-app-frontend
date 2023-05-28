import './App.css';
import ProjectRoutes from './routes/AuthRoutes';
import { Provider as ReduxProvider } from "react-redux";
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import PageLayout from './pages/layout/PageLayout';

const App = (props: any) => {
  return (
    <>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <PageLayout>
            </PageLayout>
          </BrowserRouter>
        </ReduxProvider>
    </>
  );
}

export default App;
