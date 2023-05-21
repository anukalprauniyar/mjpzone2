import React from 'react';
import "./css/FacultyLogin.css";
import Logo from '../student/loginImage/mjpru-logo.png';
import { Link } from 'react-router-dom';

function StudentsLogin() {
    return (
        <>
            <div className="login-frame">
                <div className='login-container'>
                    <div className='login-left'>
                        <Link to="/" className='title'>
                            <h1><img src={Logo} alt="logo" /> MJPZONE</h1>
                        </Link>
                    </div>
                    <div className='login-right'>
                        <h1>Login <span>(Admin/Faculty)</span></h1>
                        <Link to="/">Click here for student login</Link>
                        <form action="submit">
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="ENROLLMENT / ROLL NO" />
                            </div>
                            <div>
                                <label htmlFor="dob">Department</label>
                                <select name="department" id="department">
                                    <option value="csit">Department of CSIT</option>
                                    <option value="pharmacy">Department of Pharmacy</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit" className="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentsLogin;