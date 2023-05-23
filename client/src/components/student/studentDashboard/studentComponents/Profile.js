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
    <div className="profile-containers">
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
  First_Name: "Abhishek",
  Last_Name: "Srivastav",
  Father_First_Name: "Sushil",
  Father_Last_Name: "Srivastav",
  Mother_First_Name: "Saroj",
  Mother_Last_Name: "Srivastav",
  Date_Of_Birth: "10th March",
  Gender: "Male",
  Phone_No: 9616882034,
  Father_Phone_No: 9415451963,
  Email: "abhisheksriavstav@gmail.com",
  Address: "Azad Nagar",
  City: "Ghazipur",
  State: "Uttar Pradesh",
  Country: "India",
  // {/* For tenth class */}
  tenth_Roll_No: 12345,
  ten_Serial_No: 12345,
  ten_Board: "UP Board",
  ten_Obtained_Marks: 450,
  ten_Maximum_Marks: 600,
  // For 12
  twelth_Roll_No: 12345,
  twel_Serial_No: 12345,
  twel_Board: "UP Board",
  twel_Obtained_Marks: 437,
  twel_Maximum_Marks: 500,
  // {/* For graduation */}
  Graduation_Roll_No: 12345,
  grad_Enrollment_No: 12345,
  grad_University_Name: "MGKVP",
  grad_Obtained_Marks: 2279,
  grad_Maximum_Marks: 3600,
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