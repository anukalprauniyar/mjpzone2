import React from "react";
import "./studentComponentCss/StudentMain.css";
import StudentDashboard from "./StudentDashboard";
import Schedule from "./Schedule";
import FacultyPage from "./FacultyPage";
import EventNotice from "./EventNotice";
import EventRegistration from "./EventRegistration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SemesterResults from "./SemesterResults";
import CourseDetails from "./CourseDetails";
import StudentAttendance from "./StudentAttendance";

function StudentMain() {
    return (
        <div className="main">
            <nav className="mainNavbar">
                <h1>MJP Rohilkhand University, Bareilly</h1>
                <div className="profile-container">
                    {/* eslint-disable-next-line */}
                    <img src="/" alt="student picture" />
                    <h1>Abhishek Srivastav</h1>
                </div>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<StudentDashboard />} />
                    <Route path='/schedule' element={<Schedule />} />
                    <Route path='/faculty-page' element={<FacultyPage />} />
                    <Route path='/event-notice' element={<EventNotice />} />
                    <Route path='/event-registration' element={<EventRegistration />} />
                    <Route path='/course-details' element={<CourseDetails />} />
                    <Route path='/semester-results' element={<SemesterResults />} />
                    <Route path='/attendance' element={<StudentAttendance />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default StudentMain;