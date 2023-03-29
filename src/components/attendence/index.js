import { useSelector } from "react-redux";
import "../../styles/style.css";
import { useState } from "react";
import EditAttendance from "./editAttendance";
import ShowCourseAttendance from "./showCourseAttendance";
import ShowAllAttendance from "./showAllAttendance";

const Attendance = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const [course, setCourse] = useState("default");
  const [show, setShow] = useState(false);
  const [data, setData] = useState({"name": "","date":""});
  const [i, setI] = useState();
  const [flag, setFlag] = useState(false);

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  const edit = (item, index) => {
    setData(item);
    setI(index);
    setShow(true);
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
        <br></br>
        <br></br>
        {course !== "default" 
        ? (<ShowCourseAttendance course={course} edit={edit} flag={flag} setFlag={setFlag}/>)
        : <ShowAllAttendance/>}
        
        <EditAttendance show={show} setShow={setShow} data={data} setData={setData} index={i} course={course}/>
      </div>
    </div>
  );
};

export default Attendance;
