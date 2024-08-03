import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginPage from './components/Login';
import Navbar from './components/Navbar';

function App() {
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
    <Router>
      <Navbar links={navbarLinks} studentName={studentData.name} role={studentData.role} /> {/* Pass student data to Navbar */}
      <Routes>
        <Route path="/" element={<Dashboard studentData={studentData} applicationData={applicationData} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;