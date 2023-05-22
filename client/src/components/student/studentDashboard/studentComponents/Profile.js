import React from "react";
import "./studentComponentCss/Profile.css";

function StudentProfile(props) {
  const {
    First_Name,
    Last_Name,
    Father_First_Name,
    Father_Last_Name,
    Mother_First_Name,
    Mother_Last_Name,
    Date_Of_Birth,
    Gender,
    Phone_No,
    Father_Phone_No,
    Email,
    Address,
    City,
    State,
    Country,
    tenth_Roll_No,
    ten_Serial_No,
    ten_Board,
    ten_Obtained_Marks,
    ten_Maximum_Marks,
    twelth_Roll_No,
    twel_Serial_No,
    twel_Board,
    twel_Obtained_Marks,
    twel_Maximum_Marks,
    Graduation_Roll_No,
    grad_Enrollment_No,
    grad_University_Name,
    grad_Obtained_Marks,
    grad_Maximum_Marks,
  } = props.student;

  return (
    <div className="profile-container">
      <div className="personal">
        {/* personal info */}
        <h3>Personal Information</h3>
        <table>
          <tr>
            <td>First Name: </td>
            <td>{First_Name}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{Last_Name}</td>
          </tr>
          <tr>
            <td>Father First Name:</td>
            <td>{Father_First_Name}</td>
          </tr>
          <tr>
            <td>Father Last Name:</td>
            <td>{Father_Last_Name}</td>
          </tr>
          <tr>
            <td>Mother First Name:</td>
            <td>{Mother_First_Name}</td>
          </tr>
          <tr>
            <td>Mother Last Name:</td>
            <td>{Mother_Last_Name}</td>
          </tr>
          <tr>
            <td>Date Of Birth: </td>
            <td>{Date_Of_Birth}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td> {Gender}</td>
          </tr>
          <tr>
            <td>Phone No.:</td>
            <td>{Phone_No}</td>
          </tr>
          <tr>
            <td>Father Phone No.:</td>
            <td>{Father_Phone_No}</td>
          </tr>
          <tr>
            <td>Email:</td> <td>{Email}</td>
          </tr>
          <tr>
            <td>Address:</td> <td>{Address}</td>
          </tr>
          <tr>
            <td>City:</td> <td>{City}</td>
          </tr>
          <tr>
            <td>State:</td> <td>{State}</td>
          </tr>
          <tr>
            <td>Country:</td> <td>{Country}</td>
          </tr>
        </table>
      </div>
      <hr />
      <div>
        <h3>Education Information</h3>
        <h4>For High School </h4>
        <table>
          <tr>
            <td>10nth Roll No.:</td>
            <td>{tenth_Roll_No}</td>
          </tr>
          <tr>
            <td> Serial No.:</td>
            <td>{ten_Serial_No}</td>
          </tr>
          <tr>
            <td>Board:</td>
            <td>{ten_Board}</td>
          </tr>
          <tr>
            <td>Obtained Marks:</td>
            <td>{ten_Obtained_Marks}</td>
          </tr>
          <tr>
            <td>Maximum Marks:</td>
            <td>{ten_Maximum_Marks}</td>
          </tr>
        </table>
        <h4>For Intermediate </h4>
        <table>
          <tr>
            <td>12th Roll No.:</td>
            <td>{twelth_Roll_No}</td>
          </tr>
          <tr>
            <td>Serial No.:</td>
            <td>{twel_Serial_No}</td>
          </tr>
          <tr>
            <td>Board:</td>
            <td>{twel_Board}</td>
          </tr>
          <tr>
            <td>Obtained Marks:</td>
            <td>{twel_Obtained_Marks}</td>
          </tr>
          <tr>
            <td> Maximum Marks: </td>
            <td>{twel_Maximum_Marks}</td>
          </tr>
        </table>
        <h4>For graduation</h4>
        <table>
          <tr>
            <td>Graduation Roll No.:</td>
            <td>{Graduation_Roll_No}</td>
          </tr>
          <tr>
            <td>Enrollment No.:</td>
            <td>{grad_Enrollment_No}</td>
          </tr>
          <tr>
            <td>University Name:</td>
            <td>{grad_University_Name}</td>
          </tr>
          <tr>
            <td>Obtained Marks:</td>
            <td>{grad_Obtained_Marks}</td>
          </tr>
          <tr>
            <td>Maximum Marks:</td>
            <td>{grad_Maximum_Marks}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
const student = {
  // name: "John Doe",
  // age: 21,
  // major: "Computer Science",
  First_Name: "Tony",
  Last_Name: "Stark",
  Father_First_Name: "Howard",
  Father_Last_Name: "Stark",
  Mother_First_Name: "Maria",
  Mother_Last_Name: "Stark",
  Date_Of_Birth: "29th May",
  Gender: "Male",
  Phone_No: 6781367092,
  Father_Phone_No: 6781367092,
  Email: "tonystark3000@gmail.com",
  Address: "Stark Tower New York",
  City: "New York",
  State: "United States",
  Country: "American",
  // {/* For tenth class */}
  tenth_Roll_No: 3000,
  ten_Serial_No: 3999,
  ten_Board: "Avengers",
  ten_Obtained_Marks: 3000,
  ten_Maximum_Marks: 3000,
  // For 12
  twelth_Roll_No: 6000,
  twel_Serial_No: 3888,
  twel_Board: "Avengers",
  twel_Obtained_Marks: 6000,
  twel_Maximum_Marks: 6000,
  // {/* For graduation */}
  Graduation_Roll_No: 9000,
  grad_Enrollment_No: 78982942794,
  grad_University_Name: "Avengers",
  grad_Obtained_Marks: 9000,
  grad_Maximum_Marks: 9000,
};

function Profile() {
  return (
    <div>
      <h1>Student Profile</h1>
      <StudentProfile student={student} />
    </div>
  );
}

export default Profile;