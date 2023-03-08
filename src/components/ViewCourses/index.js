import { useSelector } from "react-redux";
const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const userState = useSelector((state) => state.courseReducer);

  return (
    <div>
      <table border="1" width="30%" align="center">
        <tbody>
          <tr>
            <th>Courses</th>
          </tr>
          {Object.keys(userState).map((key) =>
            userState[key].map((item) =>
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
  );
};

export default ViewCourses;
