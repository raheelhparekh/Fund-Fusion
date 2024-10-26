import React from 'react';
import axios from 'axios';

function DownloadButton({ fileName, applicationId }) {

  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/general/getFile/${applicationId}/${fileName}`, {
        responseType: 'blob', 
        withCredentials: true,
      });

      if (response.data.type !== 'application/pdf') {
        throw new Error("Invalid file format received.");
      }

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${fileName}.pdf`); 

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 100);
      
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={handleDownload}>Download</button>
  );
}

export default DownloadButton;
