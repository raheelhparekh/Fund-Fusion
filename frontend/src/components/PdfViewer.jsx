// PdfViewer.js
import React from 'react';

function PdfViewer({ fileUrl }) {
  if (!fileUrl) {
    return <p>Loading PDF...</p>;
  }

  return (
    <object data={fileUrl} type="application/pdf" width="100%" height="600px">
      <p>
        Alternative text - include a link{" "}
        <a href={fileUrl}>to the PDF!</a>
      </p>
    </object>
  );
}

export default PdfViewer;
