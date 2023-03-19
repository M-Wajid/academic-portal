import { useSelector, useDispatch } from "react-redux";
import { teacherApproved } from './../../redux/actions/index';
import "./leaveApprovalTeacher.css"

const LeaveApprovalTeacher = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const dispatch = useDispatch();

  return (
    <div className="teacherApprovalMain">
      <h1 className="teacherApprovalHeading">Leave</h1>
      <div className="teacherApprovalData">
      {Object.keys(leaveState).map((key) => 
      <>
      <h1>{key}</h1>
      {leaveState[key].map((item) => (item.TeacherName === user.name)&&
          <>
            <table border="1" width="50%">
              <tbody>
                <tr>
                  <th>Student Name</th>
                  <td>{item.StudentName}</td>
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
            <button className="teacherApprovalButton" onClick={() => dispatch(teacherApproved("Approved", key, item.id))}>Approve</button>
            <button className="teacherApprovalButton" onClick={() => dispatch(teacherApproved("Disapproved", key, item.id))}>Disapprove</button>
          </>)}
      </>
        
      )}
    </div>
    </div>
  );
};

export default LeaveApprovalTeacher;
