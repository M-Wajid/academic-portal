import "../../styles/style.css";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const ShowCourses = () => {
  const courseState = useSelector((state) => state.courseReducer);
  return (
    <div className="Main">
      <h1 className="Heading">All Courses</h1>
      <div className="Data">
        <Table>
          <thead>
            <tr>
              <th>Courses</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(courseState).map((key) => (
              <tr>
                <td>{key}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ShowCourses;
