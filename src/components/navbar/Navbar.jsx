import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import Navlinks from './Navlinks'

import './navbar.css'
import logo from '../../assest/Logo.png'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <nav className="organick__navbar">
        <div className="organick__navbar-company">
          <div className="organick__navbar-company_logo">
            <img src={logo} alt="Company logo" />
          </div>
          <p className='organick__navbar-company-name'>Organick</p>
        </div>

        <nav className="organick__navbar-links">
          <Navlinks />
        </nav>

        <div className='organick__navbar-search_cart-container'>
          <div action="" className="organick__navbar-search-bar">
            <input type="text" placeholder="Search..." className="organick__navbar-search-bar_input"/>
            <button type="submit"><FaSearch /></button>
          </div>

          <div className="organick__navbar-cart">
            <div>
              <FaShoppingCart />
            </div>
            <p className="organick__navbar-cart-count"> Cart (0)</p>
          </div>
        </div>

        <div className="organick__navbar-menu">
          {toggleMenu
            ? <FaTimes color='var(--color-header)' size={27} onClick={() => setToggleMenu(false)} />
            : <FaBars color='var(--color-header)' size={27} onClick={() => setToggleMenu(true)} />
          }
        </div>
      </nav>

      <nav>
          {
            toggleMenu && (
              <div className="organick__navbar-menu_container">
                <div className="organick__navbar-menu_container-links">
                  <Navlinks />
                  <form action="" className="organick__navbar-menu_search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><FaSearch /></button>
                  </form>
              </div>
            </div>
          )
        }
      </nav>
    </>
  )
}

export default Navbar