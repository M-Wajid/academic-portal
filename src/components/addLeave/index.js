import "../../styles/style.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ShowAllLeaves from "./showAllLeaves";
import ShowCourseLeaves from "./showCourseLeaves";
import AddNewLeave from "./addNewLeave";

const AddLeave = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");


  return (
    <div className="Main">
      <h1 className="Heading">Leave</h1>
      <div className="Data3">
        <select onChange={(event) => setCourse(event.target.value)}>
          <option value="default">Please select a Course</option>
          {Object.keys(courseState).map((key) =>
            courseState[key].map(
              (item) =>
                item.Name === user.name && <option value={key}>{key}</option>
            )
          )}
        </select>
        {course === "default" ? <ShowAllLeaves /> : <ShowCourseLeaves course={course}/>}
        <AddNewLeave/>
      </div>
    </div>
  );
};

export default AddLeave;
