import { Route, Routes } from "react-router-dom";
import HOME from "./pages/home";
import Student from "./pages/student";
import Teacher from "./pages/teacher";
import Admin from "./pages/admin/index";
import ViewAttendence from "./components/viewAttendance/index";
import ViewMarks from "./components/ViewMarks/index";
import RegisterCourse from "./components/registerCourse/index";

import AddCourse from "./components/addCourse/index";
import AddUser from "./components/addUser/index";
import Attendance from "./components/attendence/index";
import Marks from "./components/marks/index";
import Protected from "./components/routeAuth/protected";
import PermissionDenied from "./components/permissionDenied/index";
import AddLeave from "./components/addLeave";
import LeaveApprovalTeacher from "./../src/components/leaveApprovalTeacher";
import LeaveApprovalAdmin from "./components/leaveApprovalAdmin/index";
import ProtectedLogin from "./components/routeAuth/protectedLogin";
import NoMatchRoute from "./components/noMatchRoute/index";
import AppLayout from "./components/appLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLogin />}>
        <Route path="/" element={<HOME />} />
      </Route>

      <Route path="/" element={<Protected userRole="admin" />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/adminLeave" element={<LeaveApprovalAdmin />} />
        </Route>
      </Route>

      <Route path="/" element={<Protected userRole="teacher" />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/teacherLeave" element={<LeaveApprovalTeacher />} />
        </Route>
      </Route>

      <Route path="/" element={<Protected userRole="student" />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="/student" element={<Student />} />
          <Route path="/viewAttendance" element={<ViewAttendence />} />
          <Route path="/viewMarks" element={<ViewMarks />} />
          <Route path="/registerCourse" element={<RegisterCourse />} />
          <Route path="/studentLeave" element={<AddLeave />} />
        </Route>
      </Route>

      <Route path="/denied" element={<PermissionDenied />} />
      <Route path="*" element={<NoMatchRoute />} />
    </Routes>
  );
};
export default App;
