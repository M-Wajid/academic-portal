import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { courseRegistered } from "../../redux/actions";
import { studentAdded } from './../../redux/actions/index';
import ViewCourses from './viewCourses';

const RegisterCourse = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("Show All");
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  const onClickHandler = () => {
    if (course !== "Show All") {
      dispatch(courseRegistered(course));
      dispatch(studentAdded(course,user));
    }
    else {
      alert("Please select a course before registration")
    }
  };

  return (
    <div className="Main">
      <h1 className="Heading">Add new Course</h1>
      <div className="Data3">
        <div className="Data">
         <select class="form-control" onChange={onChangeHandler}>
          <option value="Show All">Please select a course</option>
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
        <button onClick={onClickHandler} className="Button">Register</button> 
        </div>    
        <ViewCourses/>  
      </div>
    </div>
  );
};

export default RegisterCourse;
