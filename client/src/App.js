import "./App.css";
import StudentHome from "./components/student/studentDashboard/StudentHome";
import StudentRegistration from "./components/student/StudentRegistration";
import StudentsLogin from "./components/student/StudentsLogin";
import FacultyLogin from "./components/faculty/FacultyLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentDashboard from "./components/student/studentDashboard/studentComponents/StudentDashboard";
import Schedule from "./components/student/studentDashboard/studentComponents/Schedule";
import FacultyPage from "./components/student/studentDashboard/studentComponents/FacultyPage";
import EventNotice from "./components/student/studentDashboard/studentComponents/EventNotice";
import EventRegistration from "./components/student/studentDashboard/studentComponents/EventRegistration";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SemesterResults from "./components/student/studentDashboard/studentComponents/SemesterResults";
import CourseDetails from "./components/student/studentDashboard/studentComponents/CourseDetails";
import StudentAttendance from "./components/student/studentDashboard/studentComponents/StudentAttendance";
import Profile from "./components/student/studentDashboard/studentComponents/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsLogin />} />
          <Route path="/faculty" element={<FacultyLogin />} />
          <Route
            path="/student-registration"
            element={<StudentRegistration />}
          />
          <Route path="/home" element={<StudentHome />} />

          <Route path="/" element={<StudentDashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/faculty-page" element={<FacultyPage />} />
          <Route path="/event-notice" element={<EventNotice />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/semester-results" element={<SemesterResults />} />
          <Route path="/attendance" element={<StudentAttendance />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
