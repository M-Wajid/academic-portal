import { useSelector, useDispatch } from "react-redux";
import "../../styles/style.css";
import { useState } from "react";
import { attendanceAdded, attendanceEdited } from "./../../redux/actions/index";
import Table from 'react-bootstrap/Table';

const Attendance = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const [course, setCourse] = useState("default");
  const [keyValue, setKeyValue] = useState();
  const [status, setStatus] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [data, setData] = useState();
  const [i, setI] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  const addKeyValue = (event) => {
    setKeyValue(event.target.value);
  };

  const addStatus = (index, event) => {
    let arr = [...status];
    arr[index] = event.target.value;
    setStatus(arr);
  };

  const onClickHandler = () => {
    setFlag(false);
    dispatch(attendanceAdded(course, keyValue, status));
    setStatus([]);
  };

  const edit = (item, index) => {
    setFlag2(true);
    setData(item);
    setI(index);
  };

  const EditData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler2 = () => {
    setFlag2(false);
    dispatch(attendanceEdited(course, i, data));
  };

  return (
    <div className="Main">
      <h1 className="Heading">Attendance</h1>
      <div className="Data3">
        <div style={{ marginBottom: "10px" }}>
          <select onChange={onChangeHandler}>
            <option value="default">Please Select a Course</option>
            {Object.keys(courseState).map((key) =>
              courseState[key].map(
                (item) =>
                  item.Name === user.name && <option value={key}>{key}</option>
              )
            )}
          </select>
        </div>
        {course !== "default" && (
          <>
            <button className="Button" onClick={() => setFlag(true)}>
              ADD
            </button>
            <Table bordered hover>
              <thead>
                <tr>
                  {attendanceState[course].length !== 0 &&
                    Object.keys(attendanceState).map(
                      (key) =>
                        key === course &&
                        Object.keys(attendanceState[key][0]).map((key) => (
                          <th>{key}</th>
                        ))
                    )}
                  {flag &&
                    <th>
                      <input
                        type="date"
                        onChange={addKeyValue}
                        placeholder="dd-mm-yyyy"
                      />
                    </th>}
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(attendanceState).map(
                  (key) =>
                    key === course &&
                    attendanceState[key].map((item, index) => (
                      <tr>
                        {Object.keys(item).map((key2) => (
                          <td>{item[key2]}</td>
                        ))}
                        {flag && (
                          <th>
                            <select
                              onChange={(event) => addStatus(index, event)}
                            >
                              <option>default</option>
                              <option Value="P">P</option>
                              <option Value="A">A</option>
                            </select>
                          </th>
                        )}
                        <td>
                          <button
                            className="Button"
                            onClick={() => edit(item, index)}
                          >
                            EDIT
                          </button>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </Table>
          </>
        )}
        {flag && (
          <button className="Button" onClick={onClickHandler}>
            save
          </button>
        )}
        {flag2 && (
          <>
            <table border="1" width="50%">
              {Object.keys(data).map((key) =>
                key === "Name" ? (
                  <tr>
                    <th>{key}</th>
                    <td>{data[key]}</td>
                  </tr>
                ) : (
                  <tr>
                    <th>{key}</th>
                    <td>
                      <input
                        name={key}
                        type="text"
                        placeholder={data[key]}
                        onChange={EditData}
                      />
                    </td>
                  </tr>
                )
              )}
            </table>
            <button className="Button" onClick={onClickHandler2}>
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Attendance;
