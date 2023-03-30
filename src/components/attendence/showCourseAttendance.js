import { useSelector, useDispatch } from "react-redux";
import "../../styles/style.css";
import { useState } from "react";
import { attendanceAdded } from "./../../redux/actions/index";
import Table from "react-bootstrap/Table";

const ShowCourseAttendance = (props) => {
  const { course, edit, flag, setFlag } = props;
  const [keyValue, setKeyValue] = useState();
  const [status, setStatus] = useState([]);
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const dispatch = useDispatch();

  const addKeyValue = (event) => {
    setKeyValue(event.target.value);
  };

  const addStatus = (index, event) => {
    let arr = [...status];
    arr[index] = event.target.value;
    setStatus(arr);
  };

  const onClickHandler = () => {
    if (keyValue !== undefined) {
      if(status.length === attendanceState[course].length){
        dispatch(attendanceAdded(course, keyValue, status));
        setStatus([]);
        setFlag(false);
      }else{
        alert("Please select the status for all the students");
      }
    } else {
      alert("Please select a date");
    }
  };

  return (
    <>
      <>
        {flag ? (
          <>
            <button className="Button" onClick={() => setFlag(false)}>
              close
            </button>
          </>
        ) : (
          <button className="Button" onClick={() => setFlag(true)}>
            ADD
          </button>
        )}

        <Table bordered hover>
          <thead>
            <tr>
              {!!attendanceState[course] &&
              attendanceState[course].length !== 0 &&
              <>
              {Object.keys(attendanceState).map(
                  (key) =>
                    key === course &&
                    Object.keys(attendanceState[key][0]).map((key) => (
                      <th>{key}</th>
                    ))
                )}
              {flag && (
                <th>
                  <input
                    type="date"
                    onChange={addKeyValue}
                    placeholder="dd-mm-yyyy"
                  />
                </th>
              )}
              </>
                
              }
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(attendanceState).map(
              (key) =>
                key === course && attendanceState[key].length !== 0 &&
                attendanceState[key].map((item, index) => (
                  <tr>
                    {Object.keys(item).map((key2) => (
                      <td>{item[key2]}</td>
                    ))}
                    {flag && (
                      <th>
                        <select onChange={(event) => addStatus(index, event)}>
                          <option>Please Select Status</option>
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
        {flag && (
          <button className="Button" onClick={onClickHandler}>
            save
          </button>
        )}
      </>
    </>
  );
};

export default ShowCourseAttendance;
