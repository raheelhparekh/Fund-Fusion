import React from "react";
import { Formik } from "formik";
import Input from "./Input"; // Import the Input component
import { useSubmit } from "react-router-dom";

function Form() {
  const submit = useSubmit();
  
  // Form submission handler
  const handleSubmit = async (values, { setSubmitting }) => {
    const formDataToSend = new FormData();

    // Append form fields to FormData
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formDataToSend.append(key, values[key]);
      }
    }

    try {
      const response = await submit(formDataToSend, {
        method: "POST",
        encType: "multipart/form-data", // Specify the encoding type
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error uploading form:", error.message);
    } finally {
      setSubmitting(false); // Reset submitting state
    }
  };

  return (
    <Formik
      initialValues={{
        applicantFullName: "",
        applicantAge: "",
        applicantContact: "",
        applicantAddress: "",
        applicantCourse: "",
        applicantYearOfStudy: "",
        applicantEmail: "",
        applicantRollNo: "",
        applicantDepartment: "",
        primarySupervisor: false,
        primarySupervisorFullName: "",
        primarySupervisorEmail: "",
        primarySupervisorContact: "",
        primarySupervisorDepartment: "",
        anotherSupervisor: false,
        anotherSupervisorFullName: "",
        anotherSupervisorEmail: "",
        anotherSupervisorContact: "",
        anotherSupervisorDepartment: "",
        purposeOfTravel: "",
        purposeOfTravelOther: "",
        modeOfTravel: "",
        modeOfTravelOther: "",
        proofOfTravel: "",
        accommodationOpted: false,
        typeOfAccommodation: "",
        durationOfStay: "",
        accommodationAddress: "",
        proofOfAccommodation: "",
        eventName: "",
        eventDate: "",
        eventVenue: "",
        eventWebsite: "",
        proofOfAttendance: "",
        parentalConsent: false,
        fatherFullName: "",
        fatherContact: "",
        motherFullName: "",
        motherContact: "",
        anyOtherRequirements: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.applicantEmail) {
          errors.applicantEmail = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.applicantEmail)
        ) {
          errors.applicantEmail = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue, // Use setFieldValue for file handling
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="m-6 pb-4 overflow-y-scroll">
          <Input
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue} // Pass setFieldValue for file handling
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 rounded-md disabled:bg-gray-400"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
