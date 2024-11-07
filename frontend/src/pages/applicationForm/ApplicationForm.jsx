import React, { useState } from "react";
import { useSubmit, useNavigation, useRouteLoaderData } from "react-router-dom";
import "./ApplicationForm.css";
// import axios from "axios";
import PersonalAndAcademicFormComponent from "./components/PersonalAndAcademicFormComponent";
import TravelFormComponent from "./components/TravelFormComponent";
import EventDetailsFormComponent from "./components/EventDetailsFormComponent";
import ParentalConsentFormComponent from "./components/ParentalConsentFormComponent";
import AdditionalFieldsFormComponent from "./components/AdditionalFieldsFormComponent";

const ApplicationForm = () => {
  const applicant = useRouteLoaderData("Applicant-Root");
  const designation = applicant.data.user.designation; //Faculty or Student

  const [formData, setFormData] = useState({
    applicantFullName: "",
    applicantAge: "",
    applicantContact: "",
    applicantAddress: "",
    applicantCourse: "BTECH",
    applicantYearOfStudy: "",
    applicantEmail: "",
    applicantRollNo: "",
    applicantDepartment: "",
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
  });

  const [currentForm, setCurrentForm] = useState(
    "personalAndAcademicFormContainer"
  );
  function openAForm(event) {
    let formName = event.target.getAttribute("data-form-name");

    formName = formName.replace("Header", "") + "Container";

    if (formName === currentForm) {
      setCurrentForm("");
    } else {
      setCurrentForm(formName);
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const name = event.target.name;

    setFormData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  const submit = useSubmit();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      submit(formDataToSend, {
        method: "POST",
        encType: "multipart/form-data",
      });
    } catch (error) {
      console.error("Error uploading form:", error.message);
    }
  };

  return (
    <div className="topLevelFormContainer">
      <form className="mainForm">
        <PersonalAndAcademicFormComponent
          formData={formData}
          setFormData={setFormData}
          openAForm={openAForm}
          currentForm={currentForm}
          designation={designation}
        />

        <TravelFormComponent
          formData={formData}
          setFormData={setFormData}
          openAForm={openAForm}
          currentForm={currentForm}
          handleFileChange={handleFileChange}
        />

        <EventDetailsFormComponent
          formData={formData}
          setFormData={setFormData}
          openAForm={openAForm}
          currentForm={currentForm}
        />

        {designation === "Student" && (
          <ParentalConsentFormComponent
            formData={formData}
            setFormData={setFormData}
            openAForm={openAForm}
            currentForm={currentForm}
          />
        )}

        <AdditionalFieldsFormComponent
          formData={formData}
          setFormData={setFormData}
          openAForm={openAForm}
          currentForm={currentForm}
        />

        <div className="submitContainer">
          <button
            className="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
