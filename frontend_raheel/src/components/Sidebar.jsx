import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ studentData }) => (
  <aside className="w-64 bg-white p-6">
    <div className="mb-8">
      <h2 className="text-2xl font-bold">Student Portal</h2>
      <p className="text-gray-500 text-sm">{studentData.university}</p>
    </div>
    <nav>
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="text-red-600 font-semibold">Dashboard</Link></li>
        <li><Link to="/new-application" className="text-gray-600 hover:text-red-600">New Application</Link></li>
        <li className="text-gray-600">
          <span className="hover:text-red-600 cursor-pointer">Application Status</span>
          <ul className="pl-4 space-y-2 mt-2">
            <li><Link to="/pending-applications" className="text-gray-600 hover:text-red-600">Pending Applications</Link></li>
            <li><Link to="/approved-applications" className="text-gray-600 hover:text-red-600">Approved Applications</Link></li>
            <li><Link to="/rejected-applications" className="text-gray-600 hover:text-red-600">Rejected Applications</Link></li>
          </ul>
        </li>
        <li><Link to="/faqs" className="text-gray-600 hover:text-red-600">FAQ's</Link></li>
        <li><Link to="/contact-us" className="text-gray-600 hover:text-red-600">Contact Us</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;