import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { courseUnregistered } from './../../redux/actions/index';

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const dispatch = useDispatch();

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Courses</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(courseState).map((key) =>
          courseState[key].map((item) =>
            item.Name === user.name ? (
              <tr>
                <td>{key}</td>
                <td><button className="Button" onClick={() => dispatch(courseUnregistered(key,item))}>Delete</button></td>
              </tr>
            ) : null
          )
        )}
      </tbody>
    </Table>
  );
};

export default ViewCourses;
