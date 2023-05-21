import React from "react";
import StudentNavbar from "./StudentNavbar";
import StudentMain from "./studentComponents/StudentMain";
import "../css/StudentHome.css";



function StudentHome() {
    return (
        <div className="dashboard">
            <StudentNavbar />
             <StudentMain />
        </div>
    );
};

export default StudentHome;