import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ListTasks from '../Pages/ListTasks';
import Register from '../Pages/Register/PersonalData';
import RegisterAddress from '../Pages/Register/Address';
import RegisterPassword from '../Pages/Register/Password';
import Login from '../Pages/Login';

const Routes = () => {
  const userSession = useSelector(state => state.session);

  return (
    <Switch>
      <Route path="/" exact component={Register} />
      <Route path="/registerAddress" component={RegisterAddress} />
      <Route path="/registerPassword" component={RegisterPassword} />

      <Route path="/login" component={Login} />

      <Route
        path="/tasks"
        render={() => {
          return userSession.id ? <ListTasks /> : <Redirect to="/login" />;
        }}
      />
    </Switch>
  );
};

export default Routes;
