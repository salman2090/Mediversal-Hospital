import React, { useState } from 'react';
import './Register.css';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import register from '../../../Images/Register/register.jpg';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const [loginData, SetLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
            if(loginData.password !== loginData.password2){
                alert("Your Password didn't match.")
                return
            }
            registerUser(loginData.email, loginData.password, loginData.name, history)
           e.preventDefault();
    }
    return (
        <div>
            <h1 className='text-center fw-bold fs-2 mt-5 mb-3'>Please Register Below!</h1>
            <div className='register-container'>
                <div>
                    <img className="w-100 img-fluid" src={register} alt="" />
                </div>
                <div>
                    <Form className="form-bg" onSubmit={handleLoginSubmit}>
                        <div className="mt-5 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Enter Your name</label>
                            <input type="text" onBlur={handleOnBlur} className="form-control w-50 form-align" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Enter Your Email</label>
                            <input type="email" onBlur={handleOnBlur} className="form-control w-50 form-align" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputPassword" className="form-label">Enter Your Password</label>
                            <input type="password" onBlur = {handleOnBlur}className="form-control w-50 border form-align" placeholder='Password' id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputPassword1" className="form-label">Re-enter Your Password</label>
                            <input type="password" onBlur = {handleOnBlur}className="form-control w-50 border form-align" placeholder='Re-enter Password' id="exampleInputPassword1" />
                        </div>
                        <Button type="submit" className="submit-btn" variant="primary">Register</Button>
                        <NavLink to="/login" >
                            <button type="button"  className="d-block text-decoration-none btn btn-link form-align mt-3">Already Registered? Please Login</button>             
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

export default Register;