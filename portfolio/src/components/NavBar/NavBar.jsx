import React from 'react'

import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='logo'>
           <h3>Samadhi Gamaarachchi</h3>
        </div>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contactme">Contact me</a></li>

        </ul>
      
    </div>
  )
}

export default NavBar
