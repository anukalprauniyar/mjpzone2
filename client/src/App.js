import './App.css';
import StudentHome from './components/student/studentDashboard/StudentHome';
// import StudentRegistration from './components/student/StudentRegistration';
// import StudentsLogin from './components/student/StudentsLogin';
// import FacultyLogin from './components/faculty/FacultyLogin';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StudentHome />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentsLogin />} />
          <Route path='/faculty' element={<FacultyLogin />} />
          <Route path='/student-registration' element={<StudentRegistration />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
