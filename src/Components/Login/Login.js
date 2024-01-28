import React from 'react'
import { useState } from 'react'
import './Login.css'
import email from '../Assets/email.png'
import pass from '../Assets/password.png'
import person from '../Assets/person.png'

export const Login = () => {
    const [action,setAction]=useState('Sign Up')
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={person} alt='person'></img>
                <input type='text' placeholder='Name'></input>
            </div>
            <div className='input'>
                <img src={pass} alt='Password'></img>
                <input type='email' placeholder='Email'></input>
            </div>
            <div className='input'>
                <img src={email} alt='email'></img>
                <input type='password' placeholder='Password'></input>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-pass'>Forgot Password <span>Click Here</span></div>}
        
        
        
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            
        </div>

    </div>
  )
}
