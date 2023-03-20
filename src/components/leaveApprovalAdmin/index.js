import { useSelector, useDispatch } from "react-redux";
import { adminApproved } from "../../redux/actions";
import "../../styles/style.css";

const LeaveApprovalAdmin = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const dispatch = useDispatch();
  return (
    <div className="Main">
      <h1 className="Heading">Leave</h1>
      <div className="Data3">
        {Object.keys(leaveState).map((key) => (
          <>
            {leaveState[key].map(
              (item) =>
                item.TeacherApproval === "Approved" && (
                  <>
                    <table border="1" width="50%">
                      <tbody>
                        <tr>
                          <th>Course Name</th>
                          <td>{key}</td>
                        </tr>
                        <tr>
                          <th>Student Name</th>
                          <td>{item.StudentName}</td>
                        </tr>
                        <tr>
                          <th>Teacher Name</th>
                          <td>{item.TeacherName}</td>
                        </tr>
                        <tr>
                          <th>Leave From</th>
                          <td>{item.LeaveFrom}</td>
                        </tr>
                        <tr>
                          <th>Leave To</th>
                          <td>{item.LeaveTo}</td>
                        </tr>
                        <tr>
                          <th>Teacher Approval</th>
                          <td>{item.TeacherApproval}</td>
                        </tr>
                        <tr>
                          <th>Admin Approval</th>
                          <td>{item.AdminApproval}</td>
                        </tr>
                      </tbody>
                    </table>
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
                  </>
                )
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default LeaveApprovalAdmin;
