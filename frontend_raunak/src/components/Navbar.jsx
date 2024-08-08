import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpeg'; // Adjust the path if necessary
import { IoNotifications } from 'react-icons/io5';

// Example SVG as a string
const studentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 mr-1" // Adjust size as needed
  >
    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const Navbar = ({ links, studentName, role }) => {
  return (
    <nav className="bg-white shadow-lg border-b-4 w-full border-gray-300" style={{ width: '100vw' }}>
      <div className="container mx-auto flex items-center justify-between px-2" style={{ height: '150px', marginLeft: '0' }}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center ">
            <img src={logo} alt="Somaiya" className="object-contain" style={{ width: '200px', height: '100px' }} />
          </Link>
        </div>
        <div className="flex items-center text-xl font-medium justify-end -mr-[300px] space-x-4">
          {links.length > 0 && links.map((link, index) => (
            <div className='flex flex-row items-center gap-4'>
            <Link key={index} to={link.path} className="text-gray-700 hover:bg-red-700 hover:text-white p-3 rounded-lg">
              {link.label} 
            </Link>
            <span> | </span>
            </div>
          ))}
          <div className='flex felx-row items-center gap-4'>
          <div className='p-3 bg-neutral-200 rounded-lg'>
          <IoNotifications size={25}/> 
          </div>
          <span>|</span>
          </div>
          {studentName && role && (
            <div className="text-gray-700 text-xl font-semibold">
              <div className="bg-gray-200 p-2 px-6 rounded flex  flex-row gap-4 items-center">
                {studentIcon}
                <div className='flex flex-col '>
                {studentName} <span className="text-sm text-gray-500 ml-1">{role}</span>
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
