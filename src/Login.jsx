import React from 'react'
import './index.css'

function Login() {
  return (
    <div className='form'>
      <center>
       <form>
        <label>ID:</label>
        <input type="number"/>
        <br></br><br></br>
        <label>Name:</label>
        <input type="text"/>
        <br></br><br></br>
        <label>USERNAME:</label>
        <input type="text"/>
        <br></br><br></br>
        <label>EMAIL:</label>
        <input type="email"/>
        <br></br><br></br>
        <label>WEBSITE:</label>
        <input type="text"/>
      </form> 
      <br></br>
      <button>LOGIN&LOGOUT</button>
      </center>
      </div>
  )
}    
      
    
  

export default Login
