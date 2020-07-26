import { combineReducers } from 'redux';

import userRegister from './userRegister/reducer';
import session from './session/reducer';

export default combineReducers({
  userRegister,
  session,
});
