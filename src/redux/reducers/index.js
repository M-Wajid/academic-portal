import { combineReducers } from "redux";
import userReducer from './userReducer';
import attendanceReducer from './attendanceReducer';
import marksReducer from './marksReducer';
import courseReducer from './courseReducer';
import leaveReducer from './leaveReducer';

const rootReducer = combineReducers({
  userReducer,
  attendanceReducer,
  marksReducer,
  courseReducer,
  leaveReducer
});

export default rootReducer;