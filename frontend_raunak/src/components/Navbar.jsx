import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpeg'; // Adjust the path if necessary

const Navbar = ({ links, studentName, role }) => {
  return (
    <nav className="bg-white shadow-lg border-b-4 border-gray-300"> {/* Increase border width to 4 */}
      <div className="container mx-auto flex items-center justify-between px-2" style={{ height: '80px', marginLeft: '0' }}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Somaiya" className="object-contain" style={{ width: '200px', height: '60px' }} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {links.length > 0 && links.map((link, index) => (
            <Link key={index} to={link.path} className="text-gray-700 hover:text-red-700">
              {link.label}
            </Link>
          ))}
          {studentName && role && ( // Conditionally render student info if logged in
            <div className="text-gray-700">
              {studentName} <span className="text-sm text-gray-500">{role}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;