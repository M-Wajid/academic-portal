import { useSelector } from "react-redux";
import "../../styles/table-style.css"

const ViewAllAttendance = () => {
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const user = JSON.parse(localStorage.getItem("data"));

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(attendanceState).map((key1) =>
          attendanceState[key1].map((item) =>
            item.Name === user.name
              ? Object.keys(item).map((key) =>
                  key === "Name" ? null : (
                    <tr>
                      <th>{key1}</th>
                      <td>{key}</td>
                      <td>{item[key]}</td>
                    </tr>
                  )
                )
              : null
          )
        )}
      </tbody>
    </table>
  );
};

export default ViewAllAttendance;
