import React from "react";
import { Formik } from "formik";
import Input from "./Input"; // Import the Input component
import { useSubmit, useRouteLoaderData, useNavigation } from "react-router-dom";
import { studentFormFeilds, facultyFormFeilds } from "./FormFeilds";
import * as yup from 'yup';

function Form() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmittingNav = navigation.state === "submitting";
  let formFeilds = []

  const applicant = useRouteLoaderData("Applicant-Root");
  const designation = applicant.data.user.designation; //Faculty or Student
  if (designation === "Student") {
    formFeilds = studentFormFeilds;
  } else  {
    formFeilds = facultyFormFeilds;
  }

  const createValidationSchema = (formFields) => {
    const schema = {};
  
    formFields.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.validation) {
          schema[field.name] = field.validation;
        }
      });
    });
  
    return yup.object().shape(schema);
  };
  
  const validationSchema = createValidationSchema(formFeilds);
  console.log(validationSchema)

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
      submit(formDataToSend, {
        method: "POST",
        encType: "multipart/form-data", // Specify the encoding type
      });
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
        primarySupervisor: true,
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
      validationSchema={validationSchema} 
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
            disabled={isSubmitting || isSubmittingNav}
            className="w-full bg-blue-500 text-white py-2 rounded-md disabled:bg-gray-400"
          >
            {(isSubmitting || isSubmittingNav) ? "Submitting" : "Submit"}
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
