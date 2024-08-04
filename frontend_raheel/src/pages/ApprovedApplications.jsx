import React from 'react';
import Sidebar from '../components/Sidebar';
import ApplicationTable from '../components/ApplicationTable';

const ApprovedApplications = ({ studentData, applicationData }) => {
  const approvedApps = applicationData.find(app => app.status === 'Approved Applications');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar studentData={studentData} />
      <main className="flex-1 p-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Approved Applications</h1>
          <p className="text-gray-600 mb-6">
            Easily track the details and statuses of your approved applications in one place.
          </p>
          {approvedApps ? (
            <ApplicationTable title="Approved Applications" applications={approvedApps.details} studentName={studentData.name} />
          ) : (
            <p className="text-gray-600">No approved applications found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ApprovedApplications;