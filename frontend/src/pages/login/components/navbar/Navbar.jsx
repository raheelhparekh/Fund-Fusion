import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import './Navbar.css';

//Navlinks to be used later & will be parent route for policy,services and login

const Navbar = () => {
  return (
    <>
      <nav className="login-navbar">
        <a className="login-navbar-brand" href="#">
          <img src="/images/KJSCE-Logo.svg" alt="Somaiya Vidyavihar University" className="login-logo" />
        </a>
        <div className="login-navbar-toggler">
          <span className="login-navbar-toggler-icon"></span>
        </div>
        <div className="login-navbar-collapse" id="loginNavbarNav">
          <ul className="login-navbar-nav">
            <li className="login-nav-item">
              <NavLink className="login-nav-link" to="policy" end>Policy</NavLink>
            </li>
            <li className="login-nav-item">
              <NavLink className="login-nav-link" to="about" end>About</NavLink>
            </li>
            <li className="login-nav-item">
              <NavLink className="login-nav-link" to="" end>Login</NavLink>
            </li>
            <li className="login-nav-item">
              <a className="login-nav-link" href="#">
                <img src="/images/Trust.jpg" alt="Somaiya Trust" className="login-trust-logo" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  );


}

export default Navbar;
