import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PersonalDataRegister from '../Pages/PersonalDataRegister';
import AddressRegister from '../Pages/AddressRegister';
import PasswordRegister from '../Pages/PasswordRegister';

const Routes = () => (
  <Switch>
    <Route path="/register" exact component={PersonalDataRegister} />
    <Route path="/register/addressRegister" component={AddressRegister} />
    <Route path="/register/passwordRegister" component={PasswordRegister} />
  </Switch>
);

export default Routes;
