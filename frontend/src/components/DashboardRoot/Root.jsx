import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Root = () => {
  const { user, role } = useLoaderData().data;

  return (
    <div className="overflow-hidden h-screen">
      <Navbar userData={user} role={role} />
      <div className="flex bg-gray-100 h-full">
        <Sidebar role={role} />
        <div className="w-full h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
