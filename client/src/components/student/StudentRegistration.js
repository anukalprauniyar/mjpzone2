import React, { useState } from 'react';
import "./css/StudentRegistration.css";
import Logo from './loginImage/mjpru-logo.png';
import { Link } from 'react-router-dom';

function StudentRegistration() {
    const [userRegistration, setUserRegistration] = useState({
        studentfname: '',
        studentlname: '',
        fatherfname: '',
        fatherlname: '',
        motherfname: '',
        motherlname: '',
        gender: '',
        dob: '',
        phone: '',
        fatherphone: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        hsrollno: '',
        hsserialno: '',
        hsboard: '',
        hsobtainmarks: '',
        hsmaxmarks: '',
        imrollno: '',
        imserialno: '',
        imboard: '',
        imobtainmarks: '',
        immaxmarks: '',
        gdrollno: '',
        gdenrollno: '',
        gdboard: '',
        gdobtainmarks: '',
        gdmaxmarks: ''
    });

    // state to store all previous data and add new data
    const [records, setRecords] = useState([]);

    // To handle the input value to the input field
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({ ...userRegistration, [name]: value })
    };

    // Submit function to store users data
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
        // To store previous users data & set new data
        setRecords([...records, newRecord]);
        // To set empty input field after the submit
        setUserRegistration({ studentfname: '', studentlname: '', fatherfname: '', fatherlname: '', motherfname: '', motherlname: '', dob: '', gender: '', phone: '', fatherphone: '', email: '', address1: '', address2: '', city: '', state: '', country: '', hsrollno: '', hsserialno: '', hsboard: '', hsobtainmarks: '', hsmaxmarks: '', imrollno: '', imserialno: '', imboard: '', imobtainmarks: '', immaxmarks: '', gdrollno: '', gdenrollno: '', gdboard: '', gdobtainmarks: '', gdmaxmarks: '' });
    };

    return (
        <>
            <div className='registration-heading'>
                <Link to="/" className='title'>
                    <h1><img src={Logo} alt="logo" /> MJPZONE</h1>
                </Link>
                <h1>MJP Rohilkhand University, Bareilly</h1>
            </div>
            <h1 className='registration-form-title'>Student Registration Form</h1>
            <form onSubmit={handleSubmit} className='registration-form'>
                <div className="form-heading"><b>Personal Details</b></div>
                <div className="form-container1">
                    <div className='form-container1-box'>
                        <label htmlFor="username">Student Name</label>
                        <input type="text" autoComplete='off'
                            value={userRegistration.studentfname}
                            onChange={handleInput}
                            name="studentfname" id="firstname" placeholder="First Name" />
                        <input type="text" autoComplete='off'
                            value={userRegistration.studentlname}
                            onChange={handleInput}
                            name="studentlname" id="lastname" placeholder="Last Name" />
                    </div>
                    <div className='form-container1-box form-container1-box-right1'>
                        <label htmlFor="username">Father's Name</label>
                        <input type="text" autoComplete='off'
                            value={userRegistration.fatherfname}
                            onChange={handleInput}
                            name="fatherfname" id="firstname" placeholder="First Name" />
                        <input type="text" autoComplete='off'
                            value={userRegistration.fatherlname}
                            onChange={handleInput}
                            name="fatherlname" id="lastname" placeholder="Last Name" />
                    </div>
                </div>

                <div className="form-container1">
                    <div className='form-container1-box'>
                        <label htmlFor="username">Mother's Name</label>
                        <input type="text" autoComplete='off'
                            value={userRegistration.motherfname}
                            onChange={handleInput}
                            name="motherfname" id="firstname" placeholder="First Name" />
                        <input type="text" autoComplete='off'
                            value={userRegistration.motherlname}
                            onChange={handleInput}
                            name="motherlname" id="lastname" placeholder="Last Name" />
                    </div>
                    <div className='form-container1-box form-container1-box-right2'>
                        <label htmlFor="dob">DOB</label>
                        <input type="date" autoComplete='off'
                            value={userRegistration.dob}
                            onChange={handleInput}
                            name="dob" id="dob" placeholder='dd-mm-yyyy' />
                    </div>
                </div>

                <div className="form-container1">
                    <div className='form-container1-box'>
                        <label htmlFor="gender">Gender</label>
                        <select autoComplete='off'
                            value={userRegistration.gender}
                            onChange={handleInput}
                            name="gender" id="">
                            <option selected value="select">--Please Select Gender--</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="T">Transgender</option>
                        </select>
                    </div>
                    <div className='form-container1-box form-container1-box-right3'>
                        <label htmlFor="phone">Mobile No</label>
                        <input type="number" autoComplete='off'
                            value={userRegistration.phone}
                            onChange={handleInput}
                            name="phone" id="phone" placeholder='Enter Mobile No' />
                    </div>
                </div>

                <div className="form-container1">
                    <div className='form-container1-box'>
                        <label htmlFor="phone">Father/Mother Mobile No</label>
                        <input type="number" autoComplete='off'
                            value={userRegistration.fatherphone}
                            onChange={handleInput}
                            name="fatherphone" id="phone" placeholder='Enter Mobile No' />
                    </div>
                    <div className='form-container1-box form-container1-box-right4'>
                        <label htmlFor="email">Email Id</label>
                        <input type="email" autoComplete='off'
                            value={userRegistration.email}
                            onChange={handleInput}
                            name="email" id="email" placeholder='Enter Your Email' />
                    </div>
                </div>

                <div className='form-container2'>
                    <div className='form-heading'><b>Address Details</b></div>
                    <div className="form-container2-box">
                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="address1">Address1</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.address1}
                                    onChange={handleInput}
                                    name="address1" id="address1" />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="address2">Address2</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.address2}
                                    onChange={handleInput}
                                    name="address2" id="address2" />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="city">City</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.city}
                                    onChange={handleInput}
                                    name="city" id="city" />
                            </div>
                        </div>

                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="state">State</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.state}
                                    onChange={handleInput}
                                    name="state" id="state" />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="country">Country</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.country}
                                    onChange={handleInput}
                                    name="country" id="country" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='form-container2'>
                    <div className='form-heading'><b>10th Marksheet Details</b></div>
                    <div className="form-container2-box">
                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Roll No</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.hsrollno}
                                    onChange={handleInput}
                                    name="hsrollno" id="rollno" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Serial No</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.hsserialno}
                                    onChange={handleInput}
                                    name="hsserialno" id="serialno" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="board">Board</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.hsboard}
                                    onChange={handleInput}
                                    name="hsboard" id="board" required />
                            </div>
                        </div>

                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Obtain Marks</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.hsobtainmarks}
                                    onChange={handleInput}
                                    name="hsobtainmarks" id="obtainmarks" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Maximum Marks</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.hsmaxmarks}
                                    onChange={handleInput}
                                    name="hsmaxmarks" id="maxmarks" required />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='form-container2'>
                    <div className='form-heading'><b>12th Marksheet Details</b></div>
                    <div className="form-container2-box">
                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Roll No</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.imrollno}
                                    onChange={handleInput}
                                    name="imrollno" id="rollno" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Serial No</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.imserialno}
                                    onChange={handleInput}
                                    name="imserialno" id="serialno" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="board">Board</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.imboard}
                                    onChange={handleInput}
                                    name="imboard" id="board" required />
                            </div>
                        </div>

                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Obtain Marks</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.imobtainmarks}
                                    onChange={handleInput}
                                    name="imobtainmarks" id="obtainmarks" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Maximum Marks</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.immaxmarks}
                                    onChange={handleInput}
                                    name="immaxmarks" id="maxmarks" required />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='form-container2'>
                    <div className='form-heading'><b>Graduation Details</b></div>
                    <div className="form-container2-box">
                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Roll No</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.gdrollno}
                                    onChange={handleInput}
                                    name="gdrollno" id="rollno" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Enroll</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.gdenrollno}
                                    onChange={handleInput}
                                    name="gdenrollno" id="enrollno" required />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="board">University</label>
                                <input type="text" autoComplete='off'
                                    value={userRegistration.gdboard}
                                    onChange={handleInput}
                                    name="gdboard" id="board" required />
                            </div>
                        </div>

                        <div className="form-container22">
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Obtain Marks</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.gdobtainmarks}
                                    onChange={handleInput}
                                    name="gdobtainmarks" id="obtainmarks" />
                            </div>
                            <div className='form-container1-box'>
                                <label htmlFor="marksheet10">Maximum Marks</label>
                                <input type="number" autoComplete='off'
                                    value={userRegistration.gdmaxmarks}
                                    onChange={handleInput}
                                    name="gdmaxmarks" id="maxmarks" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='register-container'>
                    <button type="submit" className="register">Register</button>
                </div>
            </form>
        </>
    );
};

export default StudentRegistration;