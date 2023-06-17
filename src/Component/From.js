import React, { useEffect, useState } from 'react'

export default function From() {
    const data={name:"",email:"",password:""}
    const[inputData,setInputData]=useState(data);
    const [flag,setFlag]= useState(false)
    useEffect(()=>{

    },[flag])
    console.log("Registered")
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value});
        console.log(inputData)
}
function handleSubmit(e){
  e.preventDefault();
  if(!inputData.name || !inputData.email || !inputData.password)
  {
    alert("All Fields are Mendotary")
  }
  else{
    setFlag(true)
  }
}
  return (
    <div  className='container text-center'>
      <pre>{(flag)?<h2 className='smsg'>Hello {inputData.name}, you've  registered successfully</h2>:""}</pre>
      <form className='container' onSubmit={handleSubmit}>
        <div className='fromui'>
        <h3 className='text-center'>Registration From</h3>
        <div >
            <input type='text' placeholder='Enter your Name' name='name' value={inputData.name} 
            onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='Enter your Email' name='email' value={inputData.email}  onChange={handleData}></input>
        </div>
        <div>
            <input type='password' placeholder='Enter your Password' name='password' value={inputData.password} onChange={handleData}></input>
        </div>
        <div>
          </div>
            <button className='sbtn' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}


