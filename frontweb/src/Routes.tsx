import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
