import React, { useState } from 'react'
import Sidebar from '../applicantDashboard/components/Sidebar';
// import Header from './Header';
import ApplicationTable from '../applicantDashboard/components/ApplicationTable';
import Navbar from './components/Navbar';


function ApplicantDashboard() {

  const [studentData, setStudentData] = useState({
    name: "Ritwik",
    university: "Somaiya Vidyavihar University",
    role: "Student", // Added role to display in the Navbar
  });

  const applicationData = [
    {
      status: "Pending Applications",
      details: [
        { topic: "Astronomy", submitted: "10-01-23", deadline: "10-04-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", deadline: "10-04-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", deadline: "10-04-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", deadline: "10-04-23", branch: "I.T.", status: "Pending" },
      ],
    },
    {
      status: "Approved Applications",
      details: [
        { topic: "Physics", submitted: "05-01-23", deadline: "05-04-23", branch: "Science", status: "Approved" },
        { topic: "Astronomy", submitted: "10-01-23", deadline: "10-04-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", deadline: "10-04-23", branch: "I.T.", status: "Pending" },
        { topic: "Astronomy", submitted: "10-01-23", deadline: "10-04-23", branch: "I.T.", status: "Pending" },
      ],
    },
  ];

  const navbarLinks = [
    { label: "Dashboard", path: "/" },
    { label: "Login", path: "/login" },
  ];

  return (
    <>
      <Navbar links={navbarLinks} studentName={studentData.name} role={studentData.role} />
      <div className="flex min-h-screen bg-gray-100">
          <Sidebar studentData={studentData} />
          <main className="flex-1 p-6">
            {/* <Header studentName={studentData.name} /> */}
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
    </>
  )
}

export default ApplicantDashboard
