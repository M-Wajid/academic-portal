import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const ViewCourseAttendance = (props) => {
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const { course } = props;
  return (
    <Table bordered hover>
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
    </Table>
  );
};

export default ViewCourseAttendance;
