import { Route, Routes } from 'react-router-dom';
import './App.css';
import HOME from './pages/home';
import Student from './pages/student';
import Teacher from './pages/teacher';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/student" element={<Student />}/>
        <Route path="/teacher" element={<Teacher />}/>
      </Routes>
    </div>
  );
}

export default App;
