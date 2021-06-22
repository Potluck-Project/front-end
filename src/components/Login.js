import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import img from './Images/1.jpeg'

const LogBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
 
    background-image:url(${img});
    border: 2px solid red;
    height: 800px; 
    width: 1500px;
    background-size: cover;
    
`;
const LogForm = styled.form`
    overflow: hidden;
    background-color: #F0F2F2;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    width: 25%;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
`;
const LogLgd = styled.legend`
    font-size: 1rem;
`;
const LogLabel = styled.label`
    display: inline;
    font-size: 1rem;
    padding: 0 .5rem;
`;
const LogInput = styled.input`
    display: inline;
    border: 1px solid #999999;
    border-radius: 3px;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const LogBorder = styled.fieldset`
    border-radius: 5px;
    padding: 1rem;
`;
const LogBtn = styled.button`
    margin: auto 15%;
    width: 10rem;
    height: 3rem;
    background-color: #30BF45;
    border: 1px solid #999999;
    border-radius: 10px;
    color: white;
    :hover{
        background-color: #C4F2D0;
        color: black;
    }
`;

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

        <LogBase>
            <LogForm onSubmit = {logUser}>
                <LogBorder>
                    <LogLgd><h1>Login</h1></LogLgd>
                    <LogLabel htmlFor='username' />User Name
                    <LogInput
                        placeholder="Username"
                        id='username'
                        name="username"
                        value={login.username}
                        onChange={updateLogin}
                    />
                    <LogLabel htmlFor='password' />Password
                    <LogInput
                        type="password"
                        id='password'
                        placeholder="Password"
                        name="password"
                        value={login.password}
                        onChange = {updateLogin}
                    />
                    <LogBtn>Login</LogBtn>
                </LogBorder>
            </LogForm>
        </LogBase>

    )
}

export default Login;