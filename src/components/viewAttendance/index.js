import { useSelector } from "react-redux";
import { useState } from "react";
import "../../styles/style.css";
import ViewAllAttendance from "./viewAllAttendance";
import ViewCourseAttendance from "./viewCourseAttendance";

const ViewAttendence = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("Show All");

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className="Main">
      <h1 className="Heading">Attendance</h1>
      <div className="Data3">
        <select name="course" onChange={onChangeHandler}>
          <option value="Show All">Please select a course</option>
          {Object.keys(courseState).map((key) =>
            courseState[key].map(
              (item) =>
                item.Name === user.name && <option value={key}>{key}</option>
            )
          )}
        </select>
        <br></br>
        <br></br>
        {course === "Show All" ? (
          <ViewAllAttendance />
        ) : (
          <ViewCourseAttendance course={course} />
        )}
      </div>
    </div>
  );
};

export default ViewAttendence;
