import { useSelector, useDispatch } from "react-redux";
import { teacherApproved } from "./../../redux/actions/index";
import "../../styles/style.css";
import "../../styles/table-style.css";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { MdOutlineThumbDownOffAlt } from "react-icons/md";

const LeaveApprovalTeacher = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const dispatch = useDispatch();

  return (
    <div className="Main">
      <h1 className="Heading">Leave</h1>
      <div className="Data3">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Student Name</th>
              <th>Leave From</th>
              <th>Leave To</th>
              <th>Teacher Approval</th>
              <th>Admin Approval</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(leaveState).map((key) =>
              leaveState[key].map(
                (item) =>
                  item.TeacherName === user.name && (
                    <tr>
                      <td>{key}</td>
                      <td>{item.StudentName}</td>
                      <td>{item.LeaveFrom}</td>
                      <td>{item.LeaveTo}</td>
                      <td>{item.TeacherApproval}</td>
                      <td>{item.AdminApproval}</td>
                      <td>
                        <button
                          className="Button"
                          onClick={() =>
                            dispatch(teacherApproved("Approved", key, item.id))
                          }
                        >
                          <MdOutlineThumbUpOffAlt />
                        </button>
                        <button
                          className="Button"
                          onClick={() =>
                            dispatch(
                              teacherApproved("Disapproved", key, item.id)
                            )
                          }
                        >
                          <MdOutlineThumbDownOffAlt />
                        </button>
                      </td>
                    </tr>
                  )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveApprovalTeacher;
