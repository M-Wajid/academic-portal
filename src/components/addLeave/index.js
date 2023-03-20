import "../../styles/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { leaveAdded, leaveDeleted, leaveEdited } from "../../redux/actions";

const AddLeave = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");
  const [newLeave, setNewLeave] = useState({});
  const [editLeave, setEditLeave] = useState({});
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setNewLeave({
      ...newLeave,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    dispatch(leaveAdded(newLeave, course, courseState[course]));
    setNewLeave({});
  };

  const onChangeHandler2 = (event) => {
    setEditLeave({
      ...editLeave,
      [event.target.name]: event.target.value
    });
  }

  const Save = (course, id) => {
    setFlag(false)
    dispatch(leaveEdited(course, id, editLeave));
  };

  const edit = (LeaveFrom, LeaveTo) => {
    setFlag(true);
    setEditLeave({"LeaveFrom": LeaveFrom, "LeaveTo": LeaveTo})
  }

  return (
    <div className="Main">
      <h1 className="Heading">Leave</h1>
      <div className="Data3">
        <select onChange={(event) => setCourse(event.target.value)}>
          <option value="default">default</option>
          {Object.keys(courseState).map((key) =>
            courseState[key].map(
              (item) =>
                item.Name === user.name && <option value={key}>{key}</option>
            )
          )}
        </select>
        {course !== "default" && Object.keys(leaveState).includes(course) && (
          <>
            {Object.keys(leaveState).map(
              (key) =>
                key === course &&
                leaveState[key].map(
                  (item) =>
                    item.StudentName === user.name && (
                      <>
                        <table border="1" width="50%">
                          {Object.keys(item).map(
                            (el) =>
                              el !== "id" && (
                                <tr>
                                  <th>{el}</th>
                                  <td>{item[el]}</td>
                                </tr>
                              )
                          )}
                          <button
                            className="Button"
                            onClick={() => edit(item.LeaveFrom,item.LeaveTo)}
                          >
                            Edit
                          </button>
                          <button
                            className="Button"
                            onClick={() =>
                              dispatch(leaveDeleted(course, item.id))
                            }
                          >
                            Delete
                          </button>
                          {flag && <>
                            <input name="LeaveFrom" type="text" placeholder={item.LeaveFrom} onChange={onChangeHandler2}/>
                            <input name="LeaveTo" type="text" placeholder={item.LeaveTo} onChange={onChangeHandler2}/>
                            <button className="Button" onClick={() => Save(course, item.id)}>Save</button>
                          </> }
                        </table>
                        <br></br>
                        <br></br>
                        <br></br>
                      </>
                    )
                )
            )}
            <br></br>
            <br></br>
            <br></br>
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
            <button onClick={onClickHandler} className="Button">
              Add
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddLeave;
