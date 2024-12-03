import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useRouteLoaderData } from 'react-router-dom';
import ApplicationTable from '../Applications/components/ApplicationTable';
import Pagination from '../../components/Pagination';
import axios from 'axios';
import ApplicationView from '../ApplicationView/ApplicationView';
import ApplicationsStatusDescription from './components/ApplicationsStatusDescription';
import Search from './components/Search';
import Modal from '../../components/Modal/Modal';
import Root from '../../components/DashboardRoot/Root';

const Applications = () => {
  const { role } = useRouteLoaderData("Applicant-Root")?.data || useRouteLoaderData("Validator-Root")?.data 
  const [numOfApplications, setNumOfApplications] = useState(0);
  const [applications, setApplications] = useState([]);
  const [applicantName, setApplicantName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applicationDisplay, setApplicationDisplay] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const { status } = useParams();

  // Reset currentPage when status changes
  useEffect(() => {
    setCurrentPage(1);
  }, [status]);

  // Fetch applications based on status, pagination, and search criteria
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const skip = (currentPage - 1) * itemsPerPage;
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/general/getApplications/${status}?take=${itemsPerPage}&skip=${skip}${applicantName ? `&sortBy=applicantName&sortValue=${applicantName}` : ''}`,
          { withCredentials: true }
        );
        setNumOfApplications(res.data.totalApplications);
        setApplications(res.data.applications);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, [status, currentPage, applicantName]);

  const closeModal = () => {
    setApplicationDisplay(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelect = useCallback((selection) => {
    setApplicantName(selection); // Update search criteria only when selection is finalized
  }, []);

  const renderTable = () => (
    applications.length > 0 ? (
      <ApplicationTable
        title={`${status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()} Applications`}
        applications={applications}
        setApplicationDisplay={setApplicationDisplay}
      />
    ) : (
      <p className="text-gray-600">No {status.toLowerCase()} applications found.</p>
    )
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex-1 p-6">
      <div className="bg-white shadow rounded-lg p-6 mb-20">
        <ApplicationsStatusDescription />

        {role === "Validator" && <Search value={applicantName} setValue={handleSelect} />}
        {renderTable()}
        <Pagination
          numOfItems={numOfApplications}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        {applicationDisplay && <Modal><ApplicationView applicationDisplay={applicationDisplay} closeModal={closeModal} /></Modal>}
      </div>
    </main>
  );
};

export default Applications;
