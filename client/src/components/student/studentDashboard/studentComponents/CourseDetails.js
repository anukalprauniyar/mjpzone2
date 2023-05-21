import * as React from "react";
import "./studentComponentCss/CourseDetail.css";

function createData(CourseCode, CourseName, Type, Syllabus) {
    return { CourseCode, CourseName, Type, Syllabus };
}

const rows = [
    createData(101, "Programming in C", "Compulsary"),
    createData(103, "Database Management System", "Compulsary"),
    createData(105, "Computer Organization", "Compulsary"),
    createData(107, "Data Structures and Algorithms ", "Compulsary"),
    createData(109, " Principles of Management", "Compulsary"),
    createData(111, " Programming in C Lab", "Compulsary"),
];
function CourseDetails() {
    return (
        <div className="main">
            <h1 className="mycourse">My Courses</h1>
            <div>
                <div align="center" className="filter">
                    {/* <b>Semester:</b>&nbsp; &nbsp; */}
                    <b>Semester:</b>&nbsp;&nbsp;
                    <select className="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    {/* <input type="number" /> */}
                </div>
                <div align="center" className="container">
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Syllabus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((item) => (
                                <tr>
                                    <td className="tdata">{item.CourseCode}</td>
                                    <td>{item.CourseName}</td>
                                    <td>{item.Type}</td>
                                    <td>{item.Syllabus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;