import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpeg'; 
import { IoNotifications } from 'react-icons/io5';

// Smaller SVG icon for the student
const studentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3 h-3 mr-1" // Smaller size
  >
    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const Navbar = ({ links, studentName, role }) => {
  return (
    <nav className="bg-white shadow-lg border-b-4 w-full border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-4 h-20 ">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Somaiya" className="object-contain w-48" />
          </Link>
        </div>
        <div className="flex items-center text-1xl font-medium justify-end space-x-3">
          {links.length > 0 && links.map((link, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <Link to={link.path} className="text-gray-700 hover:bg-red-700 hover:text-white p-1 rounded-md">
                {link.label}
              </Link>
              <span>|</span>
            </div>
          ))}
          <div className="flex flex-row items-center gap-2">
            <div className="p-1 bg-neutral-200 rounded-md">
              <IoNotifications size={18}/> 
            </div>
            <span>|</span>
          </div>
          {studentName && role && (
            <div className="text-gray-700 text-sm font-semibold">
              <div className="bg-gray-200 p-1 px-3 rounded flex flex-row gap-2 items-center">
                {studentIcon}
                <div className="flex flex-col">
                  {studentName} <span className="text-xs text-gray-500 ml-1">{role}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
