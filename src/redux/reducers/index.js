import { combineReducers } from "redux";
import userReducer from './userReducer';
import attendanceReducer from './attendanceReducer';
import marksReducer from './marksReducer';

const rootReducer = combineReducers({
  userReducer,
  attendanceReducer,
  marksReducer
});

export default rootReducer;