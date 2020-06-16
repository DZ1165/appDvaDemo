import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage.jsx';
import Products from './routes/Products';
import TableList from './routes/TableList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/table" exact component={TableList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
