// PdfViewer.js
import React from "react";
import Modal from "./Modal/Modal";

function PdfViewer({ fileUrl, setIsModalOpen }) {
  if (!fileUrl) {
    return <p>Loading PDF...</p>;
  }

  return (
    <Modal onClose={() => setIsModalOpen(false)}>
      <object data={fileUrl} type="application/pdf" width="100%" height="600px">
        <p>
          PDF preview failed. Please{" "}
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            open the PDF
          </a>{" "}
          in a new tab.
        </p>
      </object>
    </Modal>
  );
}

export default PdfViewer;
