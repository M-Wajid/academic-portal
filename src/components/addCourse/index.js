import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { courseAdded } from './../../redux/actions/index';
import "../../styles/style.css";
import Table from 'react-bootstrap/Table';

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
      <div className='Data3'>
        <div className='Data'>
          <input type='text' placeholder='Course Name' onChange={onChangeHandler} />
          <button className='Button' onClick={() => dispatch(courseAdded(course))}>Add</button>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Courses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(courseState).map((key) =>
              <tr>
                <td>{key}</td>
                <td>
                  <button className='Button'>Edit</button>
                  <button className='Button'>Unactive</button>
                </td>
              </tr>
              )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default AddCourse