import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import scheduleReducer from './scheduleReducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  schedule: scheduleReducer,
});
