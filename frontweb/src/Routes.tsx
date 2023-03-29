import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import history from 'util/history';
import Navbar from 'components/Navbar';
import Auth from 'pages/Admin';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/admin/auth" exact />
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
