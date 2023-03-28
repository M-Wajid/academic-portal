import "../../styles/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { teacherAssigned } from "./../../redux/actions/index";
import Table from "react-bootstrap/Table";

const AssignTeacher = () => {
  const userState = useSelector((state) => state.userReducer);
  const courseState = useSelector((state) => state.courseReducer);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="Main">
      <h1 className="Heading">Assign Teacher to the Course</h1>
      <div className="Data2">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Teacher Name</th>
              <th>Course Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select name="TeacherName" onChange={onChangeHandler}>
                  <option value="default">Please Select a Teacher</option>
                  {userState.users.map(
                    (item) =>
                      item.role === "teacher" && (
                        <option value={item.name}>{item.name}</option>
                      )
                  )}
                </select>
              </td>
              <td>
                <select name="CourseName" onChange={onChangeHandler}>
                  <option value="default">Please Select a Course</option>
                  {Object.keys(courseState).map((key) => {
                    if (courseState[key].length === 0) {
                      return <option value={key}>{key}</option>;
                    } else {
                      let temp = null;
                      temp = courseState[key].find(
                        (item) => item.role === "teacher"
                      );
                      if (temp === undefined || temp === null) {
                        return <option value={key}>{key}</option>;
                      } else {
                        return null;
                      }
                    }
                  })}
                </select>
              </td>
              <td>
                <button
                  className="Button"
                  onClick={() => dispatch(teacherAssigned(data))}
                >
                  Assign
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AssignTeacher;
