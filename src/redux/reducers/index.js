import { combineReducers } from "redux";
import userReducer from './userReducer';
import attendanceReducer from './attendanceReducer';
import marksReducer from './marksReducer';
import courseReducer from './courseReducer';
import leaveReducer from './leaveReducer';
import bookExamReducer from './bookExamReducer';

const rootReducer = combineReducers({
  userReducer,
  attendanceReducer,
  marksReducer,
  courseReducer,
  leaveReducer,
  bookExamReducer
});

export default rootReducer;