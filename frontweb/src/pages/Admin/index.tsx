import { Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-form-container">
      <Switch>
        <Route path="/admin/auth/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
