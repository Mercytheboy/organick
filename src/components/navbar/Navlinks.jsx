import React from 'react'
import { Link } from 'react-router-dom'

import './navlinks.css'

function Navlinks() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="organick__navbar-navlink">Home</Link>
        </li>
        <li>
          <Link to="/About" className="organick__navbar-navlink">About</Link>
        </li>
        <li>
          <Link to="/Pages" className="organick__navbar-navlink">Pages</Link>
        </li>
        <li>
          <Link to="/Shop" className="organick__navbar-navlink">Shop</Link>
        </li>
        <li>
          <Link to="/Project" className="organick__navbar-navlink">Projects</Link>
        </li>
        <li>
          <Link to="/News" className="organick__navbar-navlink">News</Link>
        </li>
      </ul>
    </>
  )
}

export default Navlinks