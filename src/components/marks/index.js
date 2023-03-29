import { useSelector, useDispatch } from "react-redux";
import "../../styles/style.css";
import { useState } from "react";
import {
  marksAdded,
  marksEdited,
  taskAdded,
} from "./../../redux/actions/index";
import Table from "react-bootstrap/Table";
import ShowAllMarks from "./showAllMarks";

const Marks = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const marksState = useSelector((state) => state.marksReducer);
  const [course, setCourse] = useState("default");
  const [taskType, setTaskType] = useState("");
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [data, setData] = useState();
  const [temp, setTemp] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  const onChangeHandler2 = (event) => {
    setTaskType(event.target.value);
  };

  const onChangeHandler3 = (event) => {
    setTemp(event.target.value);
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

  const onClickHandler2 = () => {
    dispatch(taskAdded(course, temp));
    setTaskType(temp);
  };

  const edit = (item) => {
    setFlag2(false);
    dispatch(marksEdited(course, taskType, item, data));
    setData({});
  };

  return (
    <div className="Main">
      <h1 className="Heading">Marks</h1>
      <div className="Data3">
          <Table bordered hover>
            <thead>
              <tr>
                <th>Select Course</th>
                <th>Select Task Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select onChange={onChangeHandler}>
                    <option value="default">Please Select a Course</option>
                    {Object.keys(courseState).map((key) =>
                      courseState[key].map(
                        (item) =>
                          item.Name === user.name && (
                            <option value={key}>{key}</option>
                          )
                      )
                    )}
                  </select>
                </td>
                <td>
                  <select onChange={onChangeHandler2}>
                    <option value="default">Please Select Task Type</option>
                    {Object.keys(marksState).map(
                      (key) =>
                        key === course &&
                        Object.keys(marksState[key]).map((item) => (
                          <option value={item}>{item}</option>
                        ))
                    )}
                    <option value="new">new</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </Table>
        {course === "default" ? <ShowAllMarks /> : taskType === "new" ? (
          <>
            <input
              type="text"
              placeholder="Task Name"
              onChange={onChangeHandler3}
            />
            <button className="Button" onClick={onClickHandler2}>
              Add
            </button>
          </>
        ) : (
          Object.keys(marksState).map(
            (key) =>
              key === course &&
              Object.keys(marksState[key]).map(
                (key2) =>
                  key2 === taskType && (
                    <>
                      <h1>{key2}</h1>
                      <Table bordered hover>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Obtained Marks</th>
                            <th>Total Marks</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {marksState[key][key2].map((item) => (
                            <tr>
                              <td>{item.Student_Name}</td>
                              <td>{item.Obtained_Marks}</td>
                              <td>{item.Total_Marks}</td>
                              {flag2 ? (
                                <>
                                  <input
                                    name="Obtained_Marks"
                                    type="text"
                                    onChange={(event) =>
                                      setData({
                                        [event.target.name]: event.target.value,
                                      })
                                    }
                                  />
                                  <button
                                    onClick={() => edit(item)}
                                    className="Button"
                                  >
                                    save
                                  </button>
                                </>
                              ) : (
                                <td>
                                  <button
                                    className="Button"
                                    onClick={() => setFlag2(true)}
                                  >
                                    Edit
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </Table>
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
                          <button className="Button" onClick={onClickHandler}>
                            Save
                          </button>
                        </>
                      ) : (
                        <button
                          className="Button"
                          onClick={() => setFlag(true)}
                        >
                          ADD
                        </button>
                      )}
                    </>
                  )
              )
          )
        )}
      </div>
    </div>
  );
};

export default Marks;
