import "../../styles/style.css";
import { useSelector } from 'react-redux';

const ShowCourses = () => {
  const courseState = useSelector((state) => state.courseReducer)
  return (
    <div className="Main">
      <h1 className="Heading">All Courses</h1>
      <div className="Data">
        <table border="1" width="50%">
          <tbody>
            <tr>
              <th>Courses</th>
            </tr>
            {Object.keys(courseState).map((key) => <tr><td>{key}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowCourses