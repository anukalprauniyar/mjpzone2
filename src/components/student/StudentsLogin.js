import React from 'react';
import "./css/StudentLogin.css";
import Logo from './loginImage/mjpru-logo.png';
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
                        <h1>Login <span>(Student/Parent)</span></h1>
                        <Link to="/faculty">Click here for faculty login</Link>
                        <form action="submit">
                            <div>
                                <label htmlFor="username">ENROLLMENT/ROLL NO:</label>
                                <input type="text" name="username" id="username" placeholder="ENROLLMENT / ROLL NO" />
                            </div>
                            <div>
                                <label htmlFor="dob">DATE OF BIRTH:</label>
                                <input type="date" name="dob" id="dob" placeholder='dd-mm-yyyy' />
                            </div>
                            <div>
                                <button type="submit" className="submit">Login</button>
                            </div>
                            <div className='register-container'>
                                <Link to="/student-registration">Click here to Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentsLogin;