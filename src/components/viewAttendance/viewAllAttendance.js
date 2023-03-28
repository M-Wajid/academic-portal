import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const ViewAllAttendance = () => {
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const user = JSON.parse(localStorage.getItem("data"));

  return (
    <Table bordered hover>
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
    </Table>
  );
};

export default ViewAllAttendance;
