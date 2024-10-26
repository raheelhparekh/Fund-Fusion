import React, { useState }from 'react'
import { useRouteLoaderData, useParams, useNavigate, useSubmit } from 'react-router-dom';
import ApplicationTable from './components/ApplicationTable';
import Modal from '../../components/Modal/Modal';
import ApplicationDisplay from '../ApplicationDisplay/ApplicationDisplay';

  
const Dashboard = ({ role }) => {
  const navigate = useNavigate()
  const submit = useSubmit()
  const { applications } = useRouteLoaderData(`${role}-Root`).data

  const { status } = useParams();

  const [applicationDisplay, setApplicationDisplay] = useState(null);

  const getFullApplication = async (applicationId, currentStatus) => {
    try {
      const response = await fetch(`http://localhost:3000/general/getApplicationData/${applicationId}`, {
        method: 'GET',
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch application data: ${response.status} ${response.statusText}`);
      }
  
      const fullApplication = await response.json();
      
      setApplicationDisplay({...fullApplication, currentStatus}); 
    } catch (error) {
      console.error('Error fetching application data:', error);
      return null; 
    }
  };
  
  const handleRowClick = (application) => {
    getFullApplication(application.applicationId, application.currentStatus)
  };

  const closeModal = () => {
    setApplicationDisplay( null );
  };

  const getApplicationsByStatus = (status) => {
    const appData = applications[status.toUpperCase()];
    return appData.length > 0 ? (
      <ApplicationTable 
        title={`${status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()} Applications`} 
        applications={appData} 
        onRowClick={handleRowClick}
      />
    ) : (
      <p className="text-gray-600">No {status.toLowerCase()} applications found.</p>
    );
  };
  

  const renderContent = () => {
    if (status) {
      return getApplicationsByStatus(status);
    }
  
    return (
      <>
        {Object.keys(applications).map((statusKey) => {
          const appData = applications[statusKey];
          return appData.length > 0 ? (
            <ApplicationTable 
              key={statusKey} 
              title={`${statusKey.charAt(0).toUpperCase() + statusKey.slice(1).toLowerCase()} Applications`} 
              applications={appData}
              onRowClick={handleRowClick}
            />
          ) : null;
        })}
      </>
    );
  };
  
  const handleSubmit = (applicationId,action) => {

    const formData = new FormData();
    formData.append('applicationId', applicationId);
    formData.append('action', action);

    // Use the submit function to send a PUT request with the form data
    submit(formData, { method: "POST" }); 

  }

  return (

    <main className="flex-1 p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="bg-gray-200 p-4 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{status ? `${status.toUpperCase()} APPLICATIONS` : "DASHBOARD"}</h1>
            {role === "Applicant" && (
              <button onClick={()=>navigate("../form")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
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
            Easily track the details and statuses of all your submitted applications in one place.
          </p>
        </div>
        {renderContent()}

        {applicationDisplay && (
        <Modal onClose={closeModal} title={applicationDisplay.formData.eventName}>
          <ApplicationDisplay applicationId={applicationDisplay.applicationId} formData={applicationDisplay.formData}/>
          
          <div className="flex justify-between mt-4">
          {(role === "Validator" && applicationDisplay.currentStatus === "Pending") && 
            <div className="flex space-x-4">
              <button onClick={()=> handleSubmit(applicationDisplay.applicationId, "accepted")}  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Accept
              </button>
              <button onClick={()=> handleSubmit(applicationDisplay.applicationId, "rejected")}  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Reject
              </button>
            </div>
          }
            <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </Modal>)}

      </div>
    </main>
  
  
    
  );
};

export default Dashboard;
