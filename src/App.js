import { Route, Routes } from 'react-router-dom';
import HOME from './pages/home';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Admin from './pages/admin/index';
import ViewAttendence from './components/viewAttendance/index';
import ViewMarks from './components/ViewMarks/index';
import RegisterCourse from './components/registerCourse/index';
import Header from './components/header';
import AddCourse from './components/addCourse/index';
import AddUser from './components/addUser/index';
import DeleteUser from './components/deleteUser/index';
import AssignTeacher from './components/assignTeacher/index';
import Attendance from './components/attendence/index';
import Marks from './components/marks/index';
import BookExamAdmin from './components/bookExamAdmin/index';
import UnregisterUser from './components/unregisterUser/index';
import Protected from './components/routeAuth/protected';
import PermissionDenied from './components/permissionDenied/index';

const App = () => {
  return (
    
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="/" element={<Protected userRole="admin"/>}>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/addUser" element={<AddUser />}/>
          <Route path="/deleteUser" element={<DeleteUser />}/>
          <Route path="/addCourse" element={<AddCourse />}/>
          <Route path="/assignTeacher" element={<AssignTeacher />}/>
          <Route path="/bookExamAdmin" element={<BookExamAdmin />} />
          <Route path="/unregister" element={<UnregisterUser/>} />
        </Route>

        <Route path="/" element={<Protected userRole="teacher"/>}>
          <Route path="/teacher" element={<Teacher />}/>
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/marks" element={<Marks />} />
        </Route>

        <Route path="/" element={<Protected userRole="student"/>}>
          <Route path="/student" element={<Student />}/>
          <Route path="/viewAttendance" element={<ViewAttendence />}/>
          <Route path="/viewMarks" element={<ViewMarks />}/>
          <Route path="/registerCourse" element={<RegisterCourse/>}/>
        </Route>
        
        <Route path='/denied' element={<PermissionDenied />}/>
      </Routes>
    </div>
  );
}
export default App;
