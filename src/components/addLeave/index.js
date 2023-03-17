import "./addLeave.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { leaveAdded } from "../../redux/actions";

const AddLeave = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");
  const [newLeave, setNewLeave] = useState({});
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setNewLeave({
      ...newLeave,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    dispatch(leaveAdded(newLeave, course, courseState[course]));
  };

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
            <>
              <h1>Add Leave</h1>
              <table border="1" width="50%">
                <tbody>
                  <tr>
                    <th>Course</th>
                    <td>{course}</td>
                  </tr>
                  <tr>
                    <th>Student Name</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th>Teacher Name</th>
                    {courseState[course].map(
                      (el) => el.role === "teacher" && <td>{el.Name}</td>
                    )}
                  </tr>
                  <tr>
                    <th>Leave From</th>
                    <td>
                      <input
                        name="LeaveFrom"
                        type="text"
                        placeholder="dd-mm-yyyy"
                        onChange={onChangeHandler}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Leave To</th>
                    <td>
                      <input
                        name="LeaveTo"
                        type="text"
                        placeholder="dd-mm-yyyy"
                        onChange={onChangeHandler}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={onClickHandler}
                type="submit"
                className="addLeaveButton"
              >
                Add
              </button>
            </>
          ))}
      </div>
    </div>
  );
};

export default AddLeave;
