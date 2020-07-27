import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ListTasks from '../Pages/ListTasks';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

const Routes = () => {
  const userSession = useSelector(state => state.session);

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />

      <Route
        path="/tasks"
        render={() => {
          return userSession.token ? <ListTasks /> : <Redirect to="/" />;
        }}
      />
    </Switch>
  );
};

export default Routes;
