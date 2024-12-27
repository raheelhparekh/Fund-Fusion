import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const handleLogout = async () => {
  let res = await fetch(`${import.meta.env.VITE_APP_API_URL}/logout`, {
    method: "GET",
    credentials: "include",
  });

  return res;
};

const Sidebar = ({ role }) => (
  <div className="w-72 h-screen bg-white p-6 shadow-lg z-10 flex flex-col overflow-y-auto">
    <div className="mb-8 text-center border-b-2 border-gray-200 pb-6">
      <div className="bg-white shadow-lg rounded-lg px-4 py-4 border border-gray-300">
        <h2 className="text-xl font-semibold text-red-700 tracking-tight">
          {`${role} Portal`}
        </h2>
        <p className="text-gray-700 text-sm font-medium py-1">
          Travel Policy SVU
        </p>
      </div>
    </div>

    <nav className="flex-grow">
      <ul className="space-y-4 text-sm">
        <li className="border-b border-gray-200 pb-2">
          <NavLink
            to={`/${role.toLowerCase()}/dashboard`}
            end
            className={({ isActive }) =>
              `flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded ${
                isActive ? "font-extrabold" : ""
              }`
            }
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 13l4 4L10 13m5-5h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m-4 6l4 4 4-4"
              ></path>
            </svg>{" "}
            Dashboard
          </NavLink>
        </li>
        <li className="text-gray-700 border-b border-gray-200 pb-2">
          <span className="flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded cursor-pointer">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>{" "}
            Application Status
          </span>
          <ul className="pl-4 mt-2 border-l border-gray-200 ml-2">
            <li className="border-b border-gray-200 pb-2">
              <NavLink
                to={`/${role.toLowerCase()}/dashboard/pending`}
                className={({ isActive }) =>
                  `flex items-center text-gray-600 hover:text-white hover:bg-red-700 p-2 rounded ${
                    isActive ? "font-black" : ""
                  }`
                }
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v18m9-9H3"
                  ></path>
                </svg>{" "}
                Pending
              </NavLink>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <NavLink
                to={`/${role.toLowerCase()}/dashboard/accepted`}
                className={({ isActive }) =>
                  `flex items-center text-gray-600 hover:text-white hover:bg-red-700 p-2 rounded ${
                    isActive ? "font-black" : ""
                  }`
                }
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>{" "}
                Accepted
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink
                to={`/${role.toLowerCase()}/dashboard/rejected`}
                className={({ isActive }) =>
                  `flex items-center text-gray-600 hover:text-white hover:bg-red-700 p-2 rounded ${
                    isActive ? "font-black" : ""
                  }`
                }
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>{" "}
                Rejected
              </NavLink>
            </li>
          </ul>
        </li>

        {role === "Applicant" ? (
          <>
            <li className="border-b border-gray-200 pb-2">
              <NavLink
                to="/applicant/policy"
                className={({ isActive }) =>
                  `flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded ${
                    isActive ? "font-extrabold" : ""
                  }`
                }
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 10v6a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h10a2 2 0 012 2zM10 14h4m-2-2v4"
                  ></path>
                </svg>{" "}
                Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applicant/contact-us"
                className={({ isActive }) =>
                  `flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded ${
                    isActive ? "font-extrabold" : ""
                  }`
                }
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h5l2 6h6l2-6h5"
                  ></path>
                </svg>{" "}
                Contact Us
              </NavLink>
            </li>
          </>
        ) : (
          //role = "Validator"
          <>
            <li>
              <NavLink
                to="/validator/report"
                className={({ isActive }) =>
                  `flex items-center text-gray-800 hover:text-white hover:bg-red-700 p-2 rounded ${
                    isActive ? "font-extrabold" : ""
                  }`
                }
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h5l2 6h6l2-6h5"
                  ></path>
                </svg>{" "}
                Report
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
    {/* Spacer to push logout to the bottom */}
    <div className="mt-14">
      <Link
        to="/"
        onClick={handleLogout}
        className="flex items-center text-gray-700 hover:bg-red-700 hover:text-white px-4 py-2 rounded-md transition-all duration-200"
      >
        <FaSignOutAlt className="w-4 h-4 mr-2" />
        Logout
      </Link>
    </div>
  </div>
);

export default Sidebar;
