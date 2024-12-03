import React from 'react';

const ApplicationTable = ({ title, applications, setApplicationDisplay }) => {

  // Fetch full application data on row click
  const getFullApplication = async (applicationId, currentStatus) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/general/getApplicationData/${applicationId}`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) throw new Error(`Failed to fetch application data: ${response.status} ${response.statusText}`);
      const fullApplication = await response.json();
      setApplicationDisplay({ ...fullApplication, currentStatus });
    } catch (error) {
      console.error('Error fetching application data:', error);
    }
  };

  const onRowClick = (application) => {
    getFullApplication(application.applicationId, application.currentStatus);
  };

  
  return (
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
            <tr
              key={index}
              onClick={() => onRowClick({...app, currentStatus : title.split(" ")[0]})} 
              className="odd:bg-gray-50 even:bg-white hover:bg-gray-200 cursor-pointer"
              style={{ height: '50px' }}
            >
              <td className="p-4">{app.formData.eventName}</td>
              <td className="p-4">{app.applicantName}</td>
              <td className="p-4">{formatDateToDDMMYYYY(app.createdAt)}</td>
              <td className="p-4">{app.formData.applicantDepartment}</td>
              <td className="p-4 text-green-500">{title.split(" ")[0] }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;

function formatDateToDDMMYYYY(dateString) {
  // Convert the ISO string to a Date object
  const date = new Date(dateString);

  // Extract the day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Ensures two-digit format
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
  const year = date.getFullYear();

  // Format the date as dd/mm/yyyy
  return `${day}/${month}/${year}`;
}
