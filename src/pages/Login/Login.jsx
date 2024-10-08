import React, { useState } from 'react';
import './Login.css';
import assets  from '../../assets/assets.js';
import {signup, login} from '../../config/firebase';

const Login = () => {

  const [currentState, setCurrentState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(currentState === "Sign Up"){
      signup(userName, email, password);
    }else{
      login(email, password)
    }
  }
  return (
    <div className='login'>
      <div className='hero-logo'>
        <img src={assets.logo_icon} alt="logo" className='logo'/>
        <p>ChitChat</p>
      </div>
      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currentState}</h2>
        {currentState === "Sign Up" ? <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="Username" className="form-input" required /> : null}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email address" className="form-input" required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="form-input" required />
        <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Login now"}</button>
        {currentState === "Sign Up"
        ? <div className="login-term" ><input type="checkbox" required/><p>Agree to the terms of use & privacy policy</p></div>
        : null
        }

        <div className="login-forgot">
          {currentState === "Sign Up" 
            ? <p className="login-toggle">Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
            : <p className="login-toggle">Create an account. <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
          }  
        </div>
      </form>
      
    </div>
  )
}

export default Login
