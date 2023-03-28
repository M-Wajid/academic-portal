import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);

  return (
    <Table bordered hover>
      <tbody>
        <tr>
          <th>Courses</th>
          {Object.keys(courseState).map((key) =>
            courseState[key].map((item) =>
              item.Name === user.name ? <td>{key}</td> : null
            )
          )}
        </tr>
      </tbody>
    </Table>
  );
};

export default ViewCourses;
