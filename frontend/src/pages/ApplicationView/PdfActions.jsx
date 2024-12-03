// PdfActions.js
import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal/Modal.jsx';

function PdfActions({ fileName, applicationId }) {
  const [fileUrl, setFileUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchFileBlob = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/general/getFile/${applicationId}/${fileName}`, {
        responseType: 'blob',
        withCredentials: true,
      });

      if (response.data.type !== 'application/pdf') {
        throw new Error("Invalid file format received.");
      }

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setFileUrl(url);

      return () => URL.revokeObjectURL(url); // Clean up URL when component unmounts

    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const handleView = async () => {
    if (!fileUrl) await fetchFileBlob(); // Only fetch if fileUrl is not set
    setIsModalOpen(true);
  };

  const handleDownload = async () => {
    if (!fileUrl) await fetchFileBlob(); // Only fetch if fileUrl is not set

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', `${fileName}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2'
        onClick={handleView}
      >
        View PDF
      </button>
      <button
        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleDownload}
      >
        Download PDF
      </button>

      {isModalOpen && fileUrl && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <object data={fileUrl} type="application/pdf" width="100%" height="600px">
            <p>
              PDF preview failed. Please <a href={fileUrl} target="_blank" rel="noopener noreferrer">open the PDF</a> in a new tab.
            </p>
          </object>
        </Modal>
      )}
    </div>
  );
}

export default PdfActions;
