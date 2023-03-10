import "./header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const onClickHandler = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="headerMain">
      <h1>ACADEMIC PORTAL</h1>
      <div>
        {user.role === "student" ? (
                <>
                  <button className="headerButton" onClick={() => navigate('/')}>Home</button>
                  <button className="headerButton" onClick={() => navigate('/viewAttendance')}>View Attendance</button>
                  <button className="headerButton" onClick={() => navigate('/viewMarks')}>View Marks</button>
                  <button className="headerButton" onClick={() => navigate('/viewCourses')}>View Courses</button>
                  <button className="headerButton" onClick={() => navigate('/registerCourse')}>Add Course</button>
                  <button className="headerButton" onClick={onClickHandler}>Log out</button>
                </>
              ) : user.role === "teacher" ? (
                <>
                  <button className="headerButton" onClick={() => navigate('/')}>Home</button>
                  <button className="headerButton"onClick={() => navigate('/')}>Add Attendance</button>
                  <button className="headerButton" onClick={() => navigate('/')}>Add Marks</button>
                  <button className="headerButton" onClick={onClickHandler}>Log out</button>
                </>
              ): user.role === "admin" ? (
                <>
                  <button className="headerButton" onClick={() => navigate('/')}>Home</button>
                  <button className="headerButton" onClick={() => navigate('/')}>Add User</button>
                  <button className="headerButton" onClick={() => navigate('/')}>Delete User</button>
                  <button className="headerButton" onClick={onClickHandler}>Log out</button>
                </>
              ): null}
      </div>
    </div>
  );
};

export default Header;
