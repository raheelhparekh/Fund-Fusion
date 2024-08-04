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
        <li><a href="#" className="text-red-600 font-semibold">Dashboard</a></li>
        <li><a href="#" className="text-gray-600 hover:text-red-600">New Application</a></li>
        <li><a href="#" className="text-gray-600 hover:text-red-600">Application Status</a></li>
        <li><a href="#" className="text-gray-600 hover:text-red-600">FAQ's</a></li>
        <li><a href="#" className="text-gray-600 hover:text-red-600">Contact Us</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;