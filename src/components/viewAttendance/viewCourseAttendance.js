import { useSelector } from "react-redux";
import "../../styles/table-style.css";

const ViewCourseAttendance = (props) => {
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const { course } = props;
  return (
    <>
      <h2>{course}</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
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
    </>
  );
};

export default ViewCourseAttendance;
