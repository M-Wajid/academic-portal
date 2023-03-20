import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { courseAdded } from './../../redux/actions/index';
import "../../styles/style.css";

const AddCourse = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const [course, setCourse] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value)
  }
  
  return (
    <div className='Main'>
      <h1 className='Heading'>Add Course</h1>
      <div className='Data'>
        <table border="1" width="50%">
          <tbody>
            <tr>
              <th>Courses</th>
            </tr>
            {Object.keys(courseState).map((key) => <tr><td>{key}</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className='Data'>
        <input type='text' placeholder='Course Name' onChange={onChangeHandler}/>
        <button className='Button' onClick={() => dispatch(courseAdded(course))}>Add</button>
      </div>
    </div>
  )
}

export default AddCourse