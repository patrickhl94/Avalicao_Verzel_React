import { combineReducers } from 'redux';

import userRegister from './userRegister/reducer';
import session from './session/reducer';
import listTask from './listTask/reducer';

export default combineReducers({
  userRegister,
  session,
  listTask,
});
