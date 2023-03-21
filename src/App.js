import { Route, Routes } from 'react-router-dom';
import HOME from './pages/home';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Admin from './pages/admin/index';
import ProtectedAdmin from './components/routeAuth/protectedAdmin';
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
import ProtectedStudent from './components/routeAuth/protectedStudent';
import ProtectedTeacher from './components/routeAuth/protectedTeacher';

const App = () => {
  return (
    
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="/student" element={<ProtectedStudent Component={Student} />}/>
        <Route path="/teacher" element={<ProtectedTeacher Component={Teacher} />}/>
        <Route path="/admin" element={<ProtectedAdmin Component={Admin} />}/>
        <Route path="/viewAttendance" element={<ProtectedStudent Component={ViewAttendence} />}/>
        <Route path="/viewMarks" element={<ProtectedStudent Component={ViewMarks} />}/>
        <Route path="/registerCourse" element={<ProtectedStudent Component={RegisterCourse} />}/>
        <Route path="/addUser" element={<ProtectedAdmin Component={AddUser} />}/>
        <Route path="/deleteUser" element={<ProtectedAdmin Component={DeleteUser} />}/>
        <Route path="/addCourse" element={<ProtectedAdmin Component={AddCourse} />}/>
        <Route path="/assignTeacher" element={<ProtectedAdmin Component={AssignTeacher} />}/>
        <Route path="/bookExamAdmin" element={<ProtectedAdmin Component={BookExamAdmin} />} />
        <Route path="/attendance" element={<ProtectedTeacher Component={Attendance} />} />
        <Route path="/marks" element={<ProtectedTeacher Component={Marks} />} />
      </Routes>
    </div>
  );
}
export default App;
