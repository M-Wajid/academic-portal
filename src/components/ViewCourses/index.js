import { useSelector } from "react-redux";
import "./viewCourses.css"

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);

  return (
    <div className="courseMainView">
      <h1 className="viewCoursesHeading">Courses</h1>
      <div className="viewCoursesData">
        <table border="1" width="50%">
        <tbody>
          <tr>
            <th>Courses</th>
          </tr>
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
      </table>
      </div>
    </div>
  );
};

export default ViewCourses;
