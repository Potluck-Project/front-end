import React, { useState } from 'react';
import '../assets/css/Login.css'
import axios from 'axios';



const SignUp = () => {
    const property = {username: "", password:"", email:""};
    const [login, setLogin] = useState(property);

    const updateLogin = e => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    };

    const logUser = e => {
        e.preventDefault();
        axios
            .post('https://potluck-app-api.herokuapp.com/api/auth/register', login)
            .then(res => {
                window.location.pathname = '/';
            })
            .catch(err => {
                console.log('err: ', err);
            });
    }

    return (

        <div className="logBase">
            <form className ="logForm"onSubmit = {logUser}>
                <fieldset>
                    <h2 className ="logLgd">Create a Free Account</h2>
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
                    <label htmlFor='email' />Email: 
                    <input
                        type="email"
                        id='email'
                        placeholder="Email"
                        name="email"
                        value={login.email}
                        onChange = {updateLogin}
                    />
                    <button>Create Account</button>
                    
                </fieldset>
            </form>
        </div>

    )
}

export default SignUp;