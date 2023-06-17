import React, { useState } from 'react'

export default function From() {
    const data={name:"",email:"",password:""}
    const[inputData,setInputData]=useState(data);
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value});
        console.log(inputData)
}
  return (
    <div>
      <form className='container'>
        <div className='header'>
            <h1>Registration From</h1>
        </div>
        <div>
            <input type='text' placeholder='Enter your Name' name='name' value={inputData.name} 
            onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='Enter your Email' name='Emai' value={inputData.email}  onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='Enter your Password' name='password' value={inputData.password} onChange={handleData}></input>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}


