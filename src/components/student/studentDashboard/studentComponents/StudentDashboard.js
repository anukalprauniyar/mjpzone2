import React from "react";
import "./studentComponentCss/StudentDashboard.css";

function StudentDashboard() {
    return (
        <div className="main-dashboard">
            <div className="welcome-dashboard">
                <h1>Welcome !</h1>
                <p>Dashboard</p>
            </div>

            <div className="container1">
                <div className="dashboard-attendance">
                    <h2>My Attendance</h2>
                    <div className="attendance-container">
                        <div className="attendance-subject-head attendance-subject">
                            <p className="subject-code-head"><b>Subject Code</b></p>
                            <p className="subject-name-head"><b>Subject Name</b></p>
                            <p className="subject-percentange-head"><b>Attendance</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 101</b></p>
                            <p className="subject-name">Programming in C</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 103</b></p>
                            <p className="subject-name">Database Management System</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 105</b></p>
                            <p className="subject-name">Computer Organisation</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 107</b></p>
                            <p className="subject-name">Data Structures and Algorithms</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 109</b></p>
                            <p className="subject-name">Principles of Management</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                    </div>
                </div>
                <div className="events">
                <h2>Upcoming Events</h2>
                    <div className="attendance-container">
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 101</b></p>
                            <p className="subject-name">Programming in C</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 103</b></p>
                            <p className="subject-name">Database Management System</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 105</b></p>
                            <p className="subject-name">Computer Organisation</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 107</b></p>
                            <p className="subject-name">Data Structures and Algorithms</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                        <div className="attendance-subject">
                            <p className="subject-code"><b>MCA 109</b></p>
                            <p className="subject-name">Principles of Management</p>
                            <p className="subject-percentange"><b>23/30</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container2">
                <div className="timetable"></div>
                <div className="course"></div>
            </div>
        </div>
    );
};

export default StudentDashboard;