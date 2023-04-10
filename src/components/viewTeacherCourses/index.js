import { useSelector } from "react-redux";

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Courses</th>
        </tr>
      
      </thead>
      <tbody>
          {Object.keys(courseState).map((key) =>
            courseState[key].map((item) =>
              item.Name === user.name ? <tr><td>{key}</td></tr> : null
            )
          )}
      </tbody>
    </table>
  );
};

export default ViewCourses;
