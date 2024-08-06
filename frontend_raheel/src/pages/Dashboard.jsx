import React from 'react';
import Sidebar from '../components/Sidebar';
// import Header from './Header';
import ApplicationTable from '../components/ApplicationTable';

const Dashboard = ({ studentData, applicationData }) => {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar studentData={studentData} />
        <main className="flex-1 p-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">DASHBOARD</h1>
            <p className="text-gray-600 mb-6">
              Easily track the details and statuses of all your submitted applications in one place.
            </p>
            {applicationData.map((app, index) => (
              <ApplicationTable key={index} title={app.status} applications={app.details} studentName={studentData.name} />
            ))}
          </div>
        </main>
      </div>
    );
  };

export default Dashboard;