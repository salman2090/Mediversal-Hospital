import React, { useState } from 'react';
import './Login.css';
import login from '../../../Images/Login/login.jpg';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData, SetLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <h1 className='text-center fw-bold fs-2 mt-5 mb-3'>Please Login!</h1>
            <div className='login-container'>
                <div>
                    <img className="w-100 img-fluid" src={login} alt="" />
                </div>
                <div>
                    <Form className="form-bg" onSubmit={handleLoginSubmit}>
                        <div className="mt-5 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={handleOnBlur} className="form-control w-50 form-align" placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={handleOnBlur} className="form-control w-50 border form-align" placeholder='Enter Your Password' id="exampleInputPassword1" />
                        </div>
                        <Button type="submit" className="submit-btn ms-4" variant="success">Login</Button>
                        <NavLink to="/register" >
                            <button type="button" id="form-align" className="d-block text-decoration-none btn btn-link mt-3 ">New User? Please Register</button>             
                        </NavLink>
                    </Form>
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant="success">User Created Successfully!</Alert>}
                    {authError && <Alert variant="danger">{authError}</Alert> }
                </div>
            </div>
        </div>
    );
};

export default Login;