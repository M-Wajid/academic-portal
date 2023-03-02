import { combineReducers } from "redux";
import userReducer from './userReducer';
import attendanceReducer from './attendanceReducer';

const rootReducer = combineReducers({
  userReducer,
  attendanceReducer
});

export default rootReducer;