import React from 'react';
import Sidebar from '../components/Sidebar';
// import Header from './Header';
import ApplicationTable from '../components/ApplicationTable';

const Dashboard = ({ studentData, applicationData }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <Sidebar studentData={studentData} />
      <main className="flex-1 p-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="bg-gray-200 p-4 rounded-lg" style={{ padding: '20px', marginBottom: '20px' }}>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">DASHBOARD</h1>
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
                <span className="text-sm">New Application</span>
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Easily track the details and statuses of all your submitted applications in one place.
            </p>
          </div>
          {applicationData.map((app, index) => (
            <ApplicationTable key={index} title={app.status} applications={app.details} studentName={studentData.name} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;