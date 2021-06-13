import React, { useState, useContext, useReducer } from "react";

import { If, Then, Else } from 'react-if';

import { LoginContext } from './Context.js';

function Login() {

  const [user, setUser] = useState({});
  const userContext = useContext(LoginContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the user object to: context
    userContext.login(user);
  }


  return (

    <If condition={userContext.isLoggedIn}>
      <Then>
        <button onClick={userContext.logout}>Log Out</button>
      </Then>
      <Else>
        <form className='login-form' onSubmit={handleSubmit}>
          <input placeholder="username" name="username" onChange={handleChange} className='login-input' />
          <input name="password" type="password" onChange={handleChange} className='login-input' />
          <button className='login-button' id="loginbut">Login</button>
        </form>
      </Else>
    </If>

  )

}

export default Login;
