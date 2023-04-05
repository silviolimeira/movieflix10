import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/custom.scss';
import './App.css';

import Routes from 'Routes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
      <ToastContainer className="toast-container" toastStyle={{ backgroundColor: "#FFC700" }} />
    </AuthContext.Provider>
  );
}

export default App;
