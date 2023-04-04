import { useSelector } from "react-redux";
import { useState } from "react";
import "../../styles/style.css";
import ViewAllMarks from "./viewAllMarks";
import ViewCourseMarks from "./viewCourseMarks";

const ViewMarks = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const [course, setCourse] = useState("Show All");

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className="Main">
      <h1 className="Heading">Marks</h1>
      <div className="Data3">
        <div className="Data">
          <select class="form-control" value={course} name="course" onChange={onChangeHandler}>
            <option value="Show All">Please select a course</option>
            {Object.keys(courseState).map((key) =>
              courseState[key].map(
                (item) =>
                  item.Name === user.name && <option value={key}>{key}</option>
              )
            )}
          </select>
          <button className="Button" onClick={() => setCourse("Show All")}>
            Clear
          </button>
        </div>
        <br></br>
        {course === "Show All" ? (
          <ViewAllMarks />
        ) : (
          <ViewCourseMarks course={course} />
        )}
      </div>
    </div>
  );
};

export default ViewMarks;
