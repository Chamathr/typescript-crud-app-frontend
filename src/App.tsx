import './App.css';
import ProjectRoutes from './routes/Routes';
import { Provider as ReduxProvider } from "react-redux";
import { store } from './redux/store';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <ProjectRoutes />
      </ReduxProvider>
    </>
  );
}

export default App;
