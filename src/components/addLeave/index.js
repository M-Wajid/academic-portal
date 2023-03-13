import "./addLeave.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const AddLeave = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");

  return (
    <div className="addLeaveMain">
      <h1 className="addLeaveHeading">Leave</h1>
      <div className="addLeaveData">
        <select onChange={(event) => setCourse(event.target.value)}>
          <option value="default">default</option>
          {Object.keys(courseState).map((key) =>
            courseState[key].map(
              (item) =>
                item.Name === user.name && <option value={key}>{key}</option>
            )
          )}
        </select>
        {course !== "default" &&
          (Object.keys(leaveState).includes(course) ? (
            <table border="1" width="50%">
              {Object.keys(leaveState).map(
                (key) =>
                  key === course &&
                  leaveState[key].map(
                    (item) =>
                      item.StudentName === user.name &&
                      Object.keys(item).map((el) => (
                        <tr>
                          <th>{el}</th>
                          <td>{item[el]}</td>
                        </tr>
                      ))
                  )
              )}
            </table>
          ) : (
            <button>ADD</button>
          ))}
      </div>
    </div>
  );
};

export default AddLeave;
