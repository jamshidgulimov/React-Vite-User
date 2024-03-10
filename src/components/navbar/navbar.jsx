import React from 'react'
import './navbar.css'

const Navbar = ({userLength}) => {
  return (
    <div className='navbar'>
        <div className="navbar-container container">
      <h2 className='navbar-logo'>NAVBAR</h2>
      <h2 className='navbar-counter'>{userLength > 0 ? "Users: " + userLength : "No User"}</h2>
      </div>
    </div>
  )
}

export default Navbar
