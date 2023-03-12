import { useSelector, useDispatch } from "react-redux";
import "./marks.css";
import { useState } from "react";
import { marksAdded } from "./../../redux/actions/index";

const Marks = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const marksState = useSelector((state) => state.marksReducer);
  const [course, setCourse] = useState();
  const [taskType, setTaskType] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  const onChangeHandler2 = (event) => {
    setTaskType(event.target.value);
  };

  const setNewData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    setFlag(false);
    dispatch(marksAdded(course, taskType, data));
  };

  return (
    <div className="marksMain">
      <h1 className="marksHeading">Marks</h1>
      <div className="marksData">
        <div style={{ marginBottom: "10px" }}>
          <p>Select Course</p>
          <select onChange={onChangeHandler}>
            <option value="default">default</option>
            {Object.keys(courseState).map((key) =>
              courseState[key].map(
                (item) =>
                  item.Name === user.name && <option value={key}>{key}</option>
              )
            )}
          </select>

          <p>Select Task Type</p>
          <select onChange={onChangeHandler2}>
            <option value="default">default</option>
            {Object.keys(marksState).map(
              (key) =>
                key === course &&
                Object.keys(marksState[key]).map((item) => (
                  <option value={item}>{item}</option>
                ))
            )}
          </select>
        </div>
        {course !== undefined &&
          course !== null &&
          course !== "default" &&
          Object.keys(marksState).map(
            (key) =>
              key === course &&
              Object.keys(marksState[key]).map(
                (key2) =>
                  key2 === taskType && (
                    <>
                      <h1>{key2}</h1>
                      <table border="1" width="100%">
                        <tbody>
                          <tr>
                            <th>Name</th>
                            <th>Obtainde Marks</th>
                            <th>Total Marks</th>
                          </tr>
                          {marksState[key][key2].map((item) => (
                            <tr>
                              <td>{item.Student_Name}</td>
                              <td>{item.Obtained_Marks}</td>
                              <td>{item.Total_Marks}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {flag ? (
                        <>
                          <input
                            name="Student_Name"
                            type="text"
                            onChange={setNewData}
                            placeholder="Student_Name"
                          />
                          <input
                            name="Obtained_Marks"
                            type="text"
                            onChange={setNewData}
                            placeholder="Obtained_Marks"
                          />
                          <input
                            name="Total_Marks"
                            type="text"
                            onChange={setNewData}
                            placeholder="Total_Marks"
                          />
                          <button onClick={onClickHandler}>Save</button>
                        </>
                      ) : (
                        <button onClick={() => setFlag(true)}>ADD</button>
                      )}
                    </>
                  )
              )
          )}
      </div>
    </div>
  );
};

export default Marks;
