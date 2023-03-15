import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { courseRegistered } from "../../redux/actions";
import "./registerCourse.css"
import ViewCourses from './../ViewCourses/index';
import { studentAdded } from './../../redux/actions/index';

const RegisterCourse = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  const onClickHandler = () => {
    if (course !== "default" && course !== null && course !== undefined) {
      dispatch(courseRegistered(course));
      dispatch(studentAdded(course,user));
    }
    setCourse(null);
  };

  return (
    <div className="registerCourseMain">
      <h1 className="registerCourseHeading">Add new Course</h1>
      <div className="registerCourseData">
        <ViewCourses />
        <select onChange={onChangeHandler}>
          <option value="default">default</option>
          {Object.keys(courseState).map((key) => {
            if (courseState[key].length === 0) {
              return <option value={key}>{key}</option>;
            } else {
              let temp = null;
              temp = courseState[key].find((item) => item.Name === user.name);
              if (temp === undefined || temp === null) {
                return <option value={key}>{key}</option>;
              } else {
                return null;
              }
            }
          })}
        </select>
        <button onClick={onClickHandler} className="registerButton">Register</button>
      </div>
    </div>
  );
};

export default RegisterCourse;
