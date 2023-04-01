import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import history from 'util/history';
import Navbar from 'components/Navbar';
import Auth from 'pages/Admin';
import PrivateRoute from 'components/PrivateRoute';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/home" exact />
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <PrivateRoute path="/home" roles={['ROLE_VISITOR', 'ROLE_MEMBER']}>
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
