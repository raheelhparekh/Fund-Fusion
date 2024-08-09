import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/ApplicantDashboardRoot/Sidebar';
// import Header from './Header';
import ApplicationTable from '../applicantDashboard/components/ApplicationTable';
  
const ApplicantDashboard = () => {
  const [studentData, setStudentData] = useState({
    name: "Ritwik",
    university: "Somaiya Vidyavihar University",
    role: "Student", // Added role to display in the Navbar
  });

  const applicationData = [
    {
      status: "Pending Applications",
      details: [
        { topic: "Astronomy", submitted: "10-01-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", branch: "I.T.", status: "Pending" },
      ],
    },
    {
      status: "Approved Applications",
      details: [
        { topic: "Physics", submitted: "05-01-23", branch: "Science", status: "Approved" },
        { topic: "Astronomy", submitted: "10-01-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", branch: "I.T.", status: "Pending" },
      ],
    },
  ];

  const navbarLinks = [
    { label: "Dashboard", path: "/applicant" },
    { label: "Login", path: "/" },
  ];
  //Code starts here
  const { status } = useParams();

  const getApplicationsByStatus = (status) => {
    const appData = applicationData.find(app => app.status.toLowerCase().includes(status));
    return appData ? (
      <ApplicationTable title={appData.status} applications={appData.details} studentName={studentData.name} />
    ) : (
      <p className="text-gray-600">No {status} applications found.</p>
    );
  };

  const renderContent = () => {
    if (status) {
      return getApplicationsByStatus(status);
    }

    // If no status is provided, display all applications
    return applicationData.map((app, index) => (
      <ApplicationTable key={index} title={app.status} applications={app.details} studentName={studentData.name} />
    ));
  };

  return (

  <main className="flex-1 p-6">
    <div className="bg-white shadow rounded-lg p-6">
      <div className="bg-gray-200 p-4 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{status ? `${status.toUpperCase()} APPLICATIONS`:"DASHBOARD"}</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
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
        </div>
        <p className="text-gray-600 mb-6">
          Easily track the details and statuses of all your submitted applications in one place.
        </p>
      </div>
      {renderContent()}
    </div>
  </main>
  );
};

export default ApplicantDashboard;