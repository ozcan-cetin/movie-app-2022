import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './router/AppRouter';
import AuthContextProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
        <ToastContainer />
      <AppRouter/>
        </AuthContextProvider>
    </div>
  );
}

export default App;
