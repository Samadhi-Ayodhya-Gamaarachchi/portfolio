import React from 'react'
import NavBar from '../NavBar/NavBar'
import '../Header/Header.css'

function Header() {
  return (
    <>
    <div className='nav'>
    <div className='logo'>
    <h3>Samadhi Gamaarachchi</h3>
    </div>
    <div className='item'>
      <NavBar linkname="Home" url="/"/>
      <NavBar linkname="About me" url="/about"/>
      <NavBar linkname="Projects" url="/projects"/>
      <NavBar linkname="Contact me" url="/contact"/>
      </div>
    </div>
    </>
  )
}

export default Header
