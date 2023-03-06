import { Route, Routes } from 'react-router-dom';
import './App.css';
import HOME from './pages/home';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Admin from './pages/admin/index';
import { StudentElement, TeacherElement, AdminElement } from './components/routeAuth/index';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="/student" element={<StudentElement><Student /></StudentElement>}/>
        <Route path="/teacher" element={<TeacherElement><Teacher /></TeacherElement>}/>
        <Route path="/admin" element={<AdminElement><Admin /></AdminElement>}/>
      </Routes>
    </div>
  );
}
export default App;
