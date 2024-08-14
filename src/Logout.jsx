import React from 'react'

function Logout() {
  return (
    <div className='out'>
      <form>
        <label>EMAIL:</label>
        <input type="email"/>
        <br></br><br></br>
        <label>PASSWORD:</label>
        <input type="password"/>
      </form>
    </div>
  )
}

export default Logout
