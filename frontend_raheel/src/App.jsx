import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import PendingApplications from './pages/PendingApplications';
import ApprovedApplications from './pages/ApprovedApplications';
import RejectedApplications from './pages/RejectedApplications';
import {applicationData} from './data/applicationData';

function App() {
  const [studentData, setStudentData] = useState({
    name: "Ritwik",
    university: "Somaiya Vidyavihar University",
    role: "Student", 
  });

  const navbarLinks = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Login", path: "/login" },
  ];

  return (
    <Router>
      <Navbar links={navbarLinks} studentName={studentData.name} role={studentData.role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard studentData={studentData} applicationData={applicationData} />} />
        <Route path="/pending-applications" element={<PendingApplications applicationData={applicationData} studentData={studentData} />} />
        <Route path="/approved-applications" element={<ApprovedApplications applicationData={applicationData} studentData={studentData} />} />
        <Route path="/rejected-applications" element={<RejectedApplications applicationData={applicationData} studentData={studentData} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;