import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardRoot = ({ role }) => {
  const { user } = useLoaderData().data;

  return (
    <>
      <Navbar userData={user} role={role} />
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar role={role} />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardRoot;