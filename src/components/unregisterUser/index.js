import React, { useState } from 'react';
import "../../styles/style.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { attendanceDeletedSingle, courseMarksDeleted, userUnassigned } from './../../redux/actions/index';

const UnregisterUser = () => {
  const [course, setCourse] = useState("default");
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const courseState = useSelector(state => state.courseReducer);

  const onChangeHandler = (event) => {
    setCourse(event.target.value)
  }

  const onChangeHandler2 = (event) => {
    setUser(event.target.value)
  }

  const onClickHandler = (event) => {
    if(course !=="default"){
    dispatch(userUnassigned(course,user));
    dispatch(attendanceDeletedSingle(course,user));
    dispatch(courseMarksDeleted(course,user));
  }
    
  }

  return (
    <div className="Main">
      <h1 className="Heading">Unregister User from Course</h1>
      <div className="Data2">

        <select onChange={onChangeHandler}>
          <option value="default">Please Select a Course</option>
          {Object.keys(courseState).map(item => <option value={item}>{item}</option>)}
        </select>

        {course !== "default" && 
        <select onChange={onChangeHandler2}>
          <option value="default">Please Select a User</option>
          {courseState[course].map(item => <option value={item.Name}>{item.Name}</option>)}
        </select>}
        
        <button onClick={onClickHandler} className="Button">Unregister</button>
      </div>
    </div>
  )
}

export default UnregisterUser;


