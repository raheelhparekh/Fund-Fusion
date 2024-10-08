import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ studentData }) => (
  <aside className="w-64 bg-white p-6 shadow-lg">
    <div className="mb-8 text-center border-b-2 border-gray-200 pb-4">
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <h2 className="text-2xl font-bold text-red-700">Student Portal</h2>
        <p className="text-black text-xs font-bold">Somaiya Vidyavihar University</p>
      </div>
    </div>
    <nav>
      <ul className="space-y-4 text-md font-semibold">
        <li className="border-b border-gray-200 pb-2">
          <Link to="/dashboard" className="flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l4 4L10 13m5-5h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m-4 6l4 4 4-4"></path>
            </svg> Dashboard
          </Link>
        </li>
        <li className="text-gray-700 border-b border-gray-200 pb-2">
          <span className="flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded cursor-pointer">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg> Application Status
          </span>
          <ul className="pl-4 mt-2 border-l border-gray-200 ml-2">
            <li className="border-b border-gray-200 pb-2">
              <Link to="/pending-applications" className="flex items-center text-gray-600 hover:text-white hover:bg-red-700 p-2 rounded">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m9-9H3"></path>
                </svg> Pending
              </Link>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <Link to="/approved-applications" className="flex items-center text-gray-600 hover:text-white hover:bg-red-700 p-2 rounded">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg> Accepted
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/rejected-applications" className="flex items-center text-gray-600 hover:text-white hover:bg-red-700 p-2 rounded">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg> Rejected
              </Link>
            </li>
          </ul>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <Link to="/faqs" className="flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10v6a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h10a2 2 0 012 2zM10 14h4m-2-2v4"></path>
            </svg> FAQ's
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h5l2 6h6l2-6h5"></path>
            </svg> Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
