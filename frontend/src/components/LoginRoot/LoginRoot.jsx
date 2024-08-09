import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import './LoginRoot.css';

//Navlinks to be used later & will be parent route for policy,services and login

const LoginRoot = () => {
  return (
    <>
      <header>
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
      </header>
      
      <Outlet/>

      <footer className="flex h-12 items-center justify-center text-gray-800 bg-white">
        <div className="text-center text-sm">
          ©2024 KJSCE, All Rights Reserved.
        </div>
      </footer>

    </>
  );


}

export default LoginRoot;
