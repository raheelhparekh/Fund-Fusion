import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
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
            <a className="login-nav-link active" href="#">Dashboard</a>
          </li>
          <li className="login-nav-item">
            <a className="login-nav-link" href="#">Policy</a>
          </li>
          <li className="login-nav-item">
            <a className="login-nav-link" href="#">Services</a>
          </li>
          <li className="login-nav-item">
            <a className="login-nav-link" href="#">
              <img src="/images/Trust.jpg" alt="Somaiya Trust" className="login-trust-logo" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
