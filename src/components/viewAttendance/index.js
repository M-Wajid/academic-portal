import { useSelector } from "react-redux";
import { useState } from "react";

const ViewAttendence = () => {
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState();
  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };
  return (
    <div>
      <select name="course" onChange={onChangeHandler}>
        <option value="default">default</option>
        {Object.keys(courseState).map((key) =>
          courseState[key].map((item) =>
            item.Name === user.name ? <option value={key}>{key}</option> : null
          )
        )}
      </select>
      <br></br>
      <br></br>
      {course === null ||
      course === undefined ||
      course === "default" ? null : (
        <table border="1" width="100%">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
            {Object.keys(attendanceState).map((key) =>
              key === course
                ? attendanceState[key].map((item) =>
                    item.Name === user.name
                      ? Object.keys(item).map((key) =>
                          key === "Name" ? null : (
                            <tr>
                              <td>{key}</td>
                              <td>{item[key]}</td>
                            </tr>
                          )
                        )
                      : null
                  )
                : null
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAttendence;
