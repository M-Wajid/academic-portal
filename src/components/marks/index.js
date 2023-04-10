import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { taskAdded } from "./../../redux/actions/index";
import ShowAllMarks from "./showAllMarks";
import AddMarks from "./addMarks";
import { MdCreate } from "react-icons/md";
import EditMarks from "./editMarks";

const Marks = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const marksState = useSelector((state) => state.marksReducer);
  const [course, setCourse] = useState("default");
  const [taskType, setTaskType] = useState("default");
  const [orignalData, setOrignalData] = useState();
  const [show, setShow] = useState(false);
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

  const onClickHandler2 = () => {
    dispatch(taskAdded(course, temp));
    setTaskType(temp);
  };

  const edit = (item) => {
    setOrignalData(item);
    setShow(true);
  };

  const clear = () => {
    setCourse("default");
    setTaskType("default");
  }

  return (
    <div className="Main">
      <h1 className="Heading">Marks</h1>
      <div className="Data3">
        <div className="Data">
        <select value={course} class="form-control" onChange={onChangeHandler} style={{marginRight: "10px"}}>
          <option value="default">Please Select a Course</option>
          {Object.keys(courseState).map((key) =>
            courseState[key].map(
              (item) =>
                item.Name === user.name && <option value={key}>{key}</option>
            )
          )}
        </select>
        <select value={taskType} class="form-control" onChange={onChangeHandler2} style={{marginRight: "10px"}}>
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
        <button className="Button" onClick={clear}>Clear</button>
        </div>
        
        {course === "default" ? (
          <ShowAllMarks />
        ) : (
          taskType !== "default" &&
          (taskType === "new" ? (
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
            <>
              <AddMarks course={course} taskType={taskType} />
              <EditMarks
                show={show}
                setShow={setShow}
                course={course}
                taskType={taskType}
                orignalData={orignalData}
              />
              {Object.keys(marksState).map(
                (key) =>
                  key === course &&
                  Object.keys(marksState[key]).map(
                    (key2) =>
                      key2 === taskType && (
                        <>
                          <h1>{key2}</h1>
                          <table className="styled-table">
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
                                  <td>
                                    <button
                                      className="Button"
                                      onClick={() => edit(item)}
                                    >
                                      <MdCreate />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </>
                      )
                  )
              )}
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default Marks;
