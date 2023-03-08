import { combineReducers } from "redux";
import userReducer from './userReducer';
import attendanceReducer from './attendanceReducer';
import marksReducer from './marksReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  userReducer,
  attendanceReducer,
  marksReducer,
  courseReducer
});

export default rootReducer;