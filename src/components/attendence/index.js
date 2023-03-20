import { useSelector, useDispatch } from "react-redux";
import "./attendance.css";
import { useState } from "react";
import { attendanceAdded, attendanceEdited } from "./../../redux/actions/index";

const Attendance = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const [course, setCourse] = useState();
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
      [event.target.name]: event.target.value 
    })
  }

  const onClickHandler2 = () => {
    setFlag2(false);
    dispatch(attendanceEdited(course, i, data))
  }

  return (
    <div className="attendanceMain">
      <h1 className="attendanceHeading">Attendance</h1>
      <div className="attendanceData">
        <div style={{ marginBottom: "10px" }}>
          <select onChange={onChangeHandler}>
            <option value="default">default</option>
            {Object.keys(courseState).map((key) =>
              courseState[key].map(
                (item) =>
                  item.Name === user.name && <option value={key}>{key}</option>
              )
            )}
          </select>
        </div>
        {course !== undefined && course !== null && course !== "default" && (
          <table border="1" width="100%">
            <tbody>
              <tr>
                <th>...</th>
                {Object.keys(attendanceState).map(
                  (key) =>
                    key === course &&
                    Object.keys(attendanceState[key][0]).map((key) => (
                      <th>{key}</th>
                    ))
                )}
                {flag ? (
                  <th>
                    <input
                      type="text"
                      onChange={addKeyValue}
                      placeholder="dd-mm-yyyy"
                    />
                  </th>
                ) : (
                  <button
                    className="attendanceButton"
                    onClick={() => setFlag(true)}
                  >
                    ADD
                  </button>
                )}
              </tr>
              {Object.keys(attendanceState).map(
                (key) =>
                  key === course &&
                  attendanceState[key].map((item, index) => (
                    <tr>
                      <td>
                        <button
                          className="attendanceButton"
                          onClick={() => edit(item, index)}
                        >
                          EDIT
                        </button>
                      </td>
                      {Object.keys(item).map((key2) => (
                        <td>{item[key2]}</td>
                      ))}
                      {flag && (
                        <th>
                          <select onChange={(event) => addStatus(index, event)}>
                            <option>default</option>
                            <option Value="P">P</option>
                            <option Value="A">A</option>
                          </select>
                        </th>
                      )}
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        )}
        {flag && (
          <button className="attendanceButton" onClick={onClickHandler}>
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
                  <td><input name={key} type="text" placeholder={data[key]} onChange={EditData}/></td>
                </tr>
              )
            )}
          </table>
          <button className="attendanceButton" onClick={onClickHandler2}>Save</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Attendance;
