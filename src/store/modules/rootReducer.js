import { combineReducers } from 'redux';

import userRegister from './userRegister/reducer';
import session from './session/reducer';
import listTask from './listTask/reducer';
import users from './users/reducer';

export default combineReducers({
  userRegister,
  users,
  session,
  listTask,
});
