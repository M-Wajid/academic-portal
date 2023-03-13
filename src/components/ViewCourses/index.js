import { useSelector } from "react-redux";

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);

  return (
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
  );
};

export default ViewCourses;
