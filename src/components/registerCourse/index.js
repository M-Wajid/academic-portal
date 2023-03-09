import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { courseRegistered } from '../../redux/actions';

const RegisterCourse = () => {
  const courseState = useSelector((state) => state.courseReducer );
  const [course, setCourse] = useState();
  const dispatch = useDispatch();
  
  const onChangeHandler = (event) => {
    setCourse(event.target.value)
  }

  const onClickHandler = () => {
    if(course !== "default" && course !== null && course !== undefined ){
      dispatch(courseRegistered(course));
    }
    setCourse(null);
  } 

  return (
    <div>
      <select onChange={onChangeHandler}>
        <option value="default">default</option>
        {Object.keys(courseState).map((key)=> (courseState[key].length === 0) ? <option value={key}>{key}</option> : console.log(courseState[key]))}
      </select>
      <button onClick={onClickHandler}>Register</button>

    </div>
  )
}

export default RegisterCourse