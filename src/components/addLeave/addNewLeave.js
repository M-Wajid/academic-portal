import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { leaveAdded } from "../../redux/actions/index";

const AddNewLeave = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");
  const [newLeave, setNewLeave] = useState({});
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  const onChangeHandler = (event) => {
    setNewLeave({
      ...newLeave,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    dispatch(leaveAdded(newLeave, course, courseState[course]));
    setNewLeave({});
    setFlag(false);
  };

  return flag ? (
    <>
      <Table bordered hover>
        <thead>
          <th>Course</th>
          <th>Leave From</th>
          <th>Leave To</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <select
                required="required"
                onChange={(event) => setCourse(event.target.value)}
              >
                <option value="default">Please select a Course</option>
                {Object.keys(courseState).map((key) =>
                  courseState[key].map(
                    (item) =>
                      item.Name === user.name &&
                      !!courseState[key].find(
                        (item) => item.role === "teacher"
                      ) && <option value={key}>{key}</option>
                  )
                )}
              </select>
            </td>
            <td>
              <input
                name="LeaveFrom"
                required="required"
                type="date"
                placeholder="mm-dd-yyyy"
                onChange={onChangeHandler}
              />
            </td>
            <td>
              <input
                name="LeaveTo"
                required="required"
                type="date"
                placeholder="mm-dd-yyyy"
                onChange={onChangeHandler}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <button onClick={onClickHandler} className="Button">
        Save
      </button>
    </>
  ) : (
    <button className="Button" onClick={() => setFlag(true)}>
      Add New Leave
    </button>
  );
};

export default AddNewLeave;
