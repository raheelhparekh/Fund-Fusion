import React from 'react';
import Sidebar from '../components/Sidebar';
import ApplicationTable from '../components/ApplicationTable';

const RejectedApplications = ({ studentData, applicationData }) => {
  const rejectedApps = applicationData.find(app => app.status === 'Rejected Applications');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar studentData={studentData} />
      <main className="flex-1 p-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="bg-gray-200 rounded-lg p-4 mb-6">
            <h1 className="text-2xl font-bold mb-4">Rejected Applications</h1>
            <p className="text-gray-600 mb-6">
              Easily track the details and statuses of your rejected applications in one place.
            </p>
          </div>
          {rejectedApps ? (
            <ApplicationTable title="Rejected Applications" applications={rejectedApps.details} studentName={studentData.name} />
          ) : (
            <p className="text-gray-600">No rejected applications found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default RejectedApplications;