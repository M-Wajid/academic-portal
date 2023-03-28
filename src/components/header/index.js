import "../../styles/header.css";
import { useNavigate } from "react-router-dom";
import Logout from './../logout/index';

const Header = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  return (
    <div className="headerMain">
      <h1>ACADEMIC PORTAL</h1>
      <div>
        {user === null || user === undefined ? null : user.role ===
          "student" ? (
          <>
            <button
              className="headerButton"
              onClick={() => navigate("/student")}
            >
              Home
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/viewAttendance")}
            >
              Attendance
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/viewMarks")}
            >
              Marks
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/registerCourse")}
            >
              Course
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/studentLeave")}
            >
              Leave
            </button>
            <Logout />
          </>
        ) : user.role === "teacher" ? (
          <>
            <button
              className="headerButton"
              onClick={() => navigate("/teacher")}
            >
              Home
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/attendance")}
            >
              Attendance
            </button>
            <button className="headerButton" onClick={() => navigate("/marks")}>
              Marks
            </button>
            <button className="headerButton" onClick={() => navigate("/teacherLeave")}>
              Leave
            </button>
            <Logout />
          </>
        ) : user.role === "admin" && (
          <>
            <button className="headerButton" onClick={() => navigate("/admin")}>
              Home
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/addUser")}
            >
              User
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/addCourse")}
            >
              Course
            </button>
            <button
              className="headerButton"
              onClick={() => navigate("/adminLeave")}
            >
              Leave
            </button>
            <Logout />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
