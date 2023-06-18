import React, { useState } from 'react'

const Login = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  return (
    <div className='login'>
        <form className="login_form">
            <h1 >Login Here</h1>
            <input type='text' placeholder='Enter your Name' name='name' value={name} onChange={(e)=>{
                setName(e.target.value)
            }}></input>
            <input type='text' placeholder='Enter your Email' name='email' value={email } onChange={(e)=>{
                setEmail(e.target.value)
            }}></input>
            <input type='password' placeholder='Enter your Password' name='password' value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <button type='submit' className='submit_btn'>SUBMIT</button>
        </form>
      
    </div>
  )
}

export default Login
