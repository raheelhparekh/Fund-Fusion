import React from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";

function ApplicationsStatusDescription() {
  const { role } =
    useRouteLoaderData("Applicant-Root")?.data ||
    useRouteLoaderData("Validator-Root")?.data;
  const navigate = useNavigate();
  const { status } = useParams();

  return (
    <div className="bg-slate-50 shadow-md rounded-lg p-6 mb-8 border border-slate-400">
      <div className="flex justify-between items-center mb-6 gap-5">
        <h1 className="text-3xl font-semibold text-gray-800">
          {`${status.toUpperCase()} APPLICATIONS`}
        </h1>
        {role === "Applicant" && (
          <button
            type='button'
            onClick={() => navigate("../form")}
            className="flex items-center bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="text-sm">Create New Application</span>
          </button>
        )}
      </div>
      <p className="text-gray-600 text-lg leading-relaxed sm:block hidden">
        Easily track the details and statuses of all your submitted applications
        in one place.
        <br />
        Stay updated and manage your applications with ease.
      </p>
    </div>
  );
}

export default ApplicationsStatusDescription;
