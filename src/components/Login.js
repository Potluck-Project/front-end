import React, { useState } from 'react';
import '../assets/css/Login.css'
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


const Login = props => {
    const [login, setLogin] = useState({username:"", password:""});

    const updateLogin = e => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    };

    const logUser = e => {
        e.preventDefault();
        axios.post( login)
            .then(res => {

                localStorage.setItem('token', res.data.token);
                props.history.push('/')
            })
            .catch(err => console.log(err.response));
    }

    return (

        <div className="logBase">
            <form className ="logForm"onSubmit = {logUser}>
                <fieldset>
                    <h2 className ="logLgd">Login</h2>
                    <label htmlFor='username' />User Name: 
                    <input
                        placeholder="Username"
                        id='username'
                        name="username"
                        value={login.username}
                        onChange={updateLogin}
                    />
                    <label htmlFor='password' />Password: 
                    <input
                        type="password"
                        id='password'
                        placeholder="Password"
                        name="password"
                        value={login.password}
                        onChange = {updateLogin}
                    />
                    <button>Login</button>
                    <h2>Don't have an account?</h2>
                    <NavLink to="/signup"> Sign Up</NavLink>

                </fieldset>
            </form>
        </div>

    )
}

export default Login;