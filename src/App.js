import { Route, Routes } from 'react-router-dom';
import './App.css';
import HOME from './pages/home';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Admin from './pages/admin/index';
import Protected from './components/routeAuth/index';
import Add from './components/add';
import Delete from './components/delete/index';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="/student" element={<Protected Component={Student} />}/>
        <Route path="/teacher" element={<Protected Component={Teacher} />}/>
        <Route path="/admin" element={<Protected Component={Admin} />}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/delete" element={<Delete/>}/>
      </Routes>
    </div>
  );
}
export default App;
