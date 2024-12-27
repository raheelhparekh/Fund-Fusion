import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.jpeg";
import { IoNotifications, IoPerson } from "react-icons/io5";
import Hamburger from "hamburger-react";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ userData, sidebarIsVisible, setSidebarIsVisible }) => {
  // Mouse cursor tracking for the pull-down effect
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleLogout = async () => {
    let res = await fetch(`${import.meta.env.VITE_APP_API_URL}/logout`, {
      method: "GET",
      credentials: "include",
    });

    return res;
  };

  const userDesignation = userData.designation;
  const userName = userData.userName;

  const [profileData] = useState({
    name: userName,
    university: "Somaiya Vidyavihar University",
    role: userDesignation,
  });

  const links = [];

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowNavbar(true);
      setIsSmallScreen(true);
    } else {
      setShowNavbar(false);
      setIsSmallScreen(false);
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

  const handleMouseMove = (e) => {
    if (e.clientY < 60 && !isSmallScreen) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    // Add event listener for mousemove only for large screens
    if (!isSmallScreen) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Clean up the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isSmallScreen]);

  return (
    <>
      <header>
        {/* Navbar with the pull-down effect */}
        <nav
          className={`bg-white shadow-md border-b-4 border-gray-200 w-full px-2 z-50 transition-all duration-300 ease-in-out transform ${
            isSmallScreen
              ? ""
              : `fixed top-0 left-0 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`
          }`}
        >
          <div className="w-full flex items-center justify-between px-4 py-3">
            <div className="flex items-center justify-between w-full">
              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden">
                <Hamburger
                  toggled={sidebarIsVisible}
                  toggle={setSidebarIsVisible}
                />
              </div>

              {/* Logo for Desktop */}
              <Link to="/" className="hidden md:flex items-center">
                <img src={logo} alt="Somaiya" className="object-contain w-48" />
              </Link>
            </div>

            <div className="flex items-center space-x-4 text-lg font-medium">
              {/* Navbar Links */}
              <div className="hidden sm:flex items-center space-x-2">
                {links?.map((link, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Link
                      to={link.path}
                      className="text-gray-700 hover:bg-red-700 hover:text-white px-4 py-2 rounded-md transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                    <span>|</span>
                  </div>
                ))}
              </div>

              {/* Logout Button */}
              <div className="flex items-center space-x-2">
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:bg-red-700 hover:text-white px-1 sm:px-4 py-2 rounded-md transition-all duration-200"
                >
                  {/* Logout icon */}
                  <FaSignOutAlt className="w-4 h-4 sm:mr-2" />
                  {/* Text hidden on small screens */}
                  <span className="hidden sm:block">Logout</span>
                </Link>
                <span>|</span>
              </div>

              {/* User Profile */}
              {profileData.name && profileData.role && (
                <div className="flex items-center space-x-2 bg-red-100 p-2 rounded-md">
                  <IoPerson className="text-red-700 text-xl" />
                  <div className="hidden sm:block">
                    <div className="text-gray-700 font-semibold">
                      {profileData.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {`${userData.department} ${profileData.role} at ${userData.institute}`}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
