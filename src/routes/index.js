import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import ListTasks from '../Pages/ListTasks';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tasks" component={ListTasks} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
