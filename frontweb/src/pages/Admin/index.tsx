import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';
import Banner from './Banner';
import './styles.css';

const Auth = () => {
  return (
    <>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <div className="auth-form-container-banner">
              <Banner />
            </div>
            <div className="auth-form-container-login">
              <Login />
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Auth;
