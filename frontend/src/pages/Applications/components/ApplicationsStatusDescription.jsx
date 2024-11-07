import React from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";

function ApplicationsStatusDescription() {

  const { role } = useRouteLoaderData("Applicant-Root")?.data || useRouteLoaderData("Validator-Root")?.data 
  const navigate = useNavigate();
  const { status } = useParams();

  return (
    <div className="bg-gray-200 p-4 rounded-lg mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{`${status.toUpperCase()} APPLICATIONS`}</h1>
        {role === "Applicant" && (
          <button
            onClick={() => navigate("../form")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
      <p className="text-gray-600 mb-6">
        Easily track the details and statuses of all your submitted applications
        in one place.
      </p>
    </div>
  );
}

export default ApplicationsStatusDescription;
