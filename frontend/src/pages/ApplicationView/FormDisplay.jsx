import React from "react";
import PdfActions from "./PdfActions";
import Form from "../ApplicationForm/Form";

function FormDisplay({ applicantDesignation, formData }) {
  if (!formData) return <h1>Error: Application Not Found</h1>;
  return (
    <Form
      prefilledData={formData}
      applicantDesignation={applicantDesignation}
    />
  );
}
export default FormDisplay;
