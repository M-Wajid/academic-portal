import { combineReducers } from "redux";
import teacherReducer from './teacherReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
  teacherReducer,
  studentReducer
});

export default rootReducer;