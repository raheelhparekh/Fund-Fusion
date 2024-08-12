import React from 'react';

const ApplicationTable = ({ title, applications, studentName }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b p-4 text-gray-700">Topic</th>
          <th className="border-b p-4 text-gray-700">Name</th>
          <th className="border-b p-4 text-gray-700">Submitted</th>
          <th className="border-b p-4 text-gray-700">Branch</th>
          <th className="border-b p-4 text-gray-700">Status</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app, index) => (
          <tr key={index} className="odd:bg-gray-50 even:bg-white" style={{ height: '50px' }}>
            <td className="p-4">{app.topic}</td>
            <td className="p-4">{studentName}</td>
            <td className="p-4">{app.submitted}</td>
            <td className="p-4">{app.branch}</td>
            <td className="p-4 text-green-500">{app.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default ApplicationTable;