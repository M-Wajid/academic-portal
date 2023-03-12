import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { courseAdded } from './../../redux/actions/index';
import "./addCourse.css";

const AddCourse = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const [course, setCourse] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value)
  }


  return (
    <div className='addCourseMain'>
      <h1 className='addCourseHeading'>Add Course</h1>
      <div className='addCourseData'>
        <table border="1" width="50%">
          <tbody>
            <tr>
              <th>Courses</th>
            </tr>
            {Object.keys(courseState).map((key) => <tr><td>{key}</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className='addCourseData'>
        <input type='text' placeholder='Course Name' onChange={onChangeHandler}/>
        <button className='addCourseButton' onClick={() => dispatch(courseAdded(course))}>Add</button>
      </div>
    </div>
  )
}

export default AddCourse