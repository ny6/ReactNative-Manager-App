import { combineReducers } from 'redux';
import AlertReducer from './AlertReducer';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  alert: AlertReducer,
  auth: AuthReducer,
  employee: EmployeeReducer,
});
