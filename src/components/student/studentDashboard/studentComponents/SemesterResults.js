import React from "react";
import "./studentComponentCss/SemesterResults.css";

function createData(CourseCode, CourseName, Obtained, Total) {
    return { CourseCode, CourseName, Obtained, Total };
}

const rows = [
    createData(101, "Programming in C", 80, 100),
    createData(103, "Database Management System", 70, 100),
    createData(105, "Computer Organization", 85, 100),
    createData(107, "Data Structures and Algorithms ", 75, 100),
    createData(109, " Principles of Management", 65, 100),
    createData(111, " Programming in C Lab", 78, 100),
];
function SemesterResults() {
    return (
        <div className="main">
            <h1 className="mycourse">Examination</h1>
            <div>
                <div align="center" className="filter">
                    {/* <b>Semester:</b>&nbsp; &nbsp; */}
                    <b>Semester/Year(s) Exam Result:</b>&nbsp;&nbsp;
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
                                <th>Obtained</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((item) => (
                                <tr>
                                    <td className="sdata">{item.CourseCode}</td>
                                    <td>{item.CourseName}</td>
                                    <td>{item.Obtained}</td>
                                    <td>{item.Total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SemesterResults;