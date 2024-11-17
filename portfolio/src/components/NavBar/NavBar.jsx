import React from 'react'
import { Link } from "react-router-dom";

import './NavBar.css'

function NavBar(props) {
  return (
    <>
    <div className='link'>
    <Link to={props.url}>{props.linkname}</Link>
    </div>
    </>
  )
}

export default NavBar