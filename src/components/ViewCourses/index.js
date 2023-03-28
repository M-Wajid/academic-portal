import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Courses</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(courseState).map((key) =>
          courseState[key].map((item) =>
            item.Name === user.name ? (
              <tr>
                <td>{key}</td>
              </tr>
            ) : null
          )
        )}
      </tbody>
    </Table>
  );
};

export default ViewCourses;
