import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Root = () => {
  const { user, role } = useLoaderData().data;
  const [sidebarIsVisible, setSidebarIsVisible] = useState(true)

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSidebarIsVisible(false); // Hide sidebar on small screens
    } else {
      setSidebarIsVisible(true); // Show sidebar on larger screens
    }
  };

  useEffect(() => {
    // Set initial visibility based on screen width
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden h-screen">
      <Navbar userData={user} role={role} setSidebarIsVisible={setSidebarIsVisible} sidebarIsVisible={sidebarIsVisible}/>
      <div className="flex bg-gray-100 h-full">
        {sidebarIsVisible && <Sidebar role={role} />}
        <div className="w-full h-[90%] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
