import { useSelector, useDispatch } from "react-redux";
import { adminApproved } from "../../redux/actions";
import "../../styles/style.css";
import "../../styles/table-style.css"

const LeaveApprovalAdmin = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
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
              <th>Teacher Name</th>
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
                  item.TeacherApproval === "Approved" && (
                    <tr>
                      <td>{key}</td>
                      <td>{item.StudentName}</td>
                      <td>{item.TeacherName}</td>
                      <td>{item.LeaveFrom}</td>
                      <td>{item.LeaveTo}</td>
                      <td>{item.TeacherApproval}</td>
                      <td>{item.AdminApproval}</td>
                      <td>
                        <button
                          className="Button"
                          onClick={() =>
                            dispatch(adminApproved("Approved", key, item.id))
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="Button"
                          onClick={() =>
                            dispatch(adminApproved("Disapproved", key, item.id))
                          }
                        >
                          Disapprove
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

export default LeaveApprovalAdmin;
