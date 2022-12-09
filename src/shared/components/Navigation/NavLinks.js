import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
  return <ul className="nav-links">
    <li><NavLink to="/nannies" exact>ALL NANNIES</NavLink></li>
    <li><NavLink to="/">LOGIN</NavLink></li>
    <li><NavLink to="/">SIGN UP</NavLink></li>
  </ul>
}

export default NavLinks
