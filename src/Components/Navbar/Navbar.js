import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo_green from '../Images/logo_green.png';
import React, { useState } from "react"



const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB navbar'>
            <div className='logo'>
              <img src={logo_green} alt='logo' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
              <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li>
              <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
              </li>
              <li>
              <a className="nav-link" href="/Shop">Shop</a>
              </li>
              
              <li>
              <NavLink activeClassName="active" className="nav-link" to="/login"><i class="fa-solid fa-user"></i></NavLink>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i class="fa-regular fa-circle-xmark"></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar;