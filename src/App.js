import { Route, Routes } from 'react-router-dom';
import HOME from './pages/home';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Admin from './pages/admin/index';
import Protected from './components/routeAuth/index';
import Add from './components/add';
import Delete from './components/delete/index';
import ViewAttendence from './components/viewAttendance/index';
import ViewMarks from './components/ViewMarks/index';
import RegisterCourse from './components/registerCourse/index';
import ViewCourses from './components/ViewCourses/index';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="/student" element={<Protected Component={Student} />}/>
        <Route path="/teacher" element={<Protected Component={Teacher} />}/>
        <Route path="/admin" element={<Protected Component={Admin} />}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/viewAttendance" element={<ViewAttendence />}/>
        <Route path="/viewMarks" element={<ViewMarks/>}/>
        <Route path="/registerCourse" element={<RegisterCourse />}/>
        <Route path="/viewCourses" element={<ViewCourses />}/>
      </Routes>
    </div>
  );
}
export default App;
