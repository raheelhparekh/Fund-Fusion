import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="#">
        <img src="/images/KJSCE-Logo.svg" alt="Somaiya Vidyavihar University" height="50" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-items" id="navbarNav">
        <ul className="navbar-nav ml-auto align-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="/images/Trust.jpg" alt="Somaiya Trust" height="50" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
