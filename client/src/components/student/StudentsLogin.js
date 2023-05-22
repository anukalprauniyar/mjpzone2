import React , {useState} from 'react';
import "./css/StudentLogin.css";
import Logo from './loginImage/mjpru-logo.png';
import { Link , useNavigate} from 'react-router-dom';



function StudentsLogin() {

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [dob, setDob] = useState('');


    const loginStudent = async (e) => {
        e.preventDefault();

        const res  = await fetch('/student-login',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, 
                dob
            })
        });

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login Successfull")
            navigate('/home')
        }
    }

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
                        <form action="submit" method="POST">
                            <div>
                                <label htmlFor="username">Email ID</label>
                                <input type="text" name="username" id="username" placeholder="Email ID"
                                  value = {email} 
                                  onChange={(e) => setEmail(e.target.value) }
                                />
                            </div>
                            <div>
                                <label htmlFor="dob">DATE OF BIRTH:</label>
                                <input type="date" name="dob" id="dob" placeholder='dd-mm-yyyy' 
                                  value = {dob}
                                  onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="submit" onClick={loginStudent}>Login</button>
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