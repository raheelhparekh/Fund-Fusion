import React, { useState, useEffect } from "react";
import axios from "axios";

function ValidatorsReport() {
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

  //fetch data from API/backend. use this code to fetch data from backend.
  useEffect(() => {
    axios
      .get("api link here")
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // example i have used to check the UI. Please replace this with the above code and add the backend link there.
  //   useEffect(() => {
  //     const exampleData = {
  //       applicantFullName: "John Doe",
  //       applicantAge: "22",
  //       applicantContact: "+1 234 567 890",
  //       applicantAddress: "123 Main St, Springfield, IL, USA",
  //       applicantCourse: "BTECH",
  //       applicantYearOfStudy: "3rd Year",
  //       applicantEmail: "john.doe@example.com",
  //       applicantRollNo: "B12345",
  //       applicantDepartment: "Computer Science",
  //       primarySupervisorFullName: "Dr. Jane Smith",
  //       primarySupervisorEmail: "jane.smith@example.com",
  //       primarySupervisorContact: "+1 234 567 891",
  //       primarySupervisorDepartment: "Information Technology",
  //       anotherSupervisor: true,
  //       anotherSupervisorFullName: "Dr. Robert Brown",
  //       anotherSupervisorEmail: "robert.brown@example.com",
  //       anotherSupervisorContact: "+1 234 567 892",
  //       anotherSupervisorDepartment: "Mechanical Engineering",
  //       purposeOfTravel: "Conference",
  //       purposeOfTravelOther: "",
  //       modeOfTravel: "Flight",
  //       modeOfTravelOther: "",
  //       proofOfTravel: "Uploaded Document",
  //       accommodationOpted: true,
  //       typeOfAccommodation: "Hotel",
  //       durationOfStay: "3 Days",
  //       accommodationAddress: "789 Ocean Drive, Miami, FL, USA",
  //       proofOfAccommodation: "Uploaded Document",
  //       eventName: "Tech Summit 2024",
  //       eventDate: "2024-11-15",
  //       eventVenue: "Convention Center, San Francisco, CA, USA",
  //       eventWebsite: "https://www.techsummit2024.com",
  //       proofOfAttendance: "Uploaded Document",
  //       parentalConsent: true,
  //       fatherFullName: "Michael Doe",
  //       fatherContact: "+1 234 567 893",
  //       motherFullName: "Mary Doe",
  //       motherContact: "+1 234 567 894",
  //       anyOtherRequirements: "Dietary needs: Vegetarian",
  //     };

  //     setTimeout(() => {
  //       setFormData(exampleData);
  //     }, 1000);
  //   }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg bg-white">
      {/* Personal and Academic Section */}
      <div className="mb-8 border-b-2 border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Personal and Academic
        </h2>
        <Field label="Full Name" value={formData.applicantFullName} />
        <Field label="Age" value={formData.applicantAge} />
        <Field label="Contact" value={formData.applicantContact} />
        <Field
          label="Residential Address"
          value={formData.applicantAddress}
          textarea
        />
        <Field label="Course" value={formData.applicantCourse} />
        <Field label="Year of Study" value={formData.applicantYearOfStudy} />
        <Field label="Email" value={formData.applicantEmail} />
        <Field label="Roll Number" value={formData.applicantRollNo} />
        <Field label="Department" value={formData.applicantDepartment} />
        <Field
          label="Primary Supervisor Full Name"
          value={formData.primarySupervisorFullName}
        />
        <Field
          label="Primary Supervisor Email"
          value={formData.primarySupervisorEmail}
        />
        <Field
          label="Primary Supervisor Contact"
          value={formData.primarySupervisorContact}
        />
        <Field
          label="Primary Supervisor Department"
          value={formData.primarySupervisorDepartment}
        />
        <Field
          label="Another Supervisor?"
          value={formData.anotherSupervisor ? "Yes" : "No"}
        />
        {formData.anotherSupervisor && (
          <>
            <Field
              label="Another Supervisor Full Name"
              value={formData.anotherSupervisorFullName}
            />
            <Field
              label="Another Supervisor Email"
              value={formData.anotherSupervisorEmail}
            />
            <Field
              label="Another Supervisor Contact"
              value={formData.anotherSupervisorContact}
            />
            <Field
              label="Another Supervisor Department"
              value={formData.anotherSupervisorDepartment}
            />
          </>
        )}
      </div>

      {/* Travel Section */}
      <div className="mb-8 border-b-2 border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Travel</h2>
        <Field label="Purpose of Travel" value={formData.purposeOfTravel} />
        <Field label="Mode of Travel" value={formData.modeOfTravel} />
        <Field label="Proof of Travel" value={formData.proofOfTravel} />
        <Field
          label="Accommodation Opted?"
          value={formData.accommodationOpted ? "Yes" : "No"}
        />
        {formData.accommodationOpted && (
          <>
            <Field
              label="Type of Accommodation"
              value={formData.typeOfAccommodation}
            />
            <Field label="Duration of Stay" value={formData.durationOfStay} />
            <Field
              label="Accommodation Address"
              value={formData.accommodationAddress}
              textarea
            />
            <Field
              label="Proof of Accommodation"
              value={formData.proofOfAccommodation}
            />
          </>
        )}
      </div>

      {/* Event / Conference Section */}
      <div className="mb-8 border-b-2 border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Event / Conference
        </h2>
        <Field label="Event Name" value={formData.eventName} />
        <Field label="Event Date" value={formData.eventDate} />
        <Field label="Event Venue" value={formData.eventVenue} textarea />
        <Field label="Event Website" value={formData.eventWebsite} />
        <Field label="Proof of Attendance" value={formData.proofOfAttendance} />
      </div>

      {/* Parent & Consent Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Parent & Consent
        </h2>
        <Field
          label="Parental Consent"
          value={formData.parentalConsent ? "Yes" : "No"}
        />
        <Field label="Father's Full Name" value={formData.fatherFullName} />
        <Field label="Father's Contact" value={formData.fatherContact} />
        <Field label="Mother's Full Name" value={formData.motherFullName} />
        <Field label="Mother's Contact" value={formData.motherContact} />
        <Field
          label="Other Requirements"
          value={formData.anyOtherRequirements}
          textarea
        />
      </div>
    </div>
  );
}

// Helper Component for displaying fields
const Field = ({ label, value, textarea }) => (
  <div className="flex flex-col mb-4">
    <label className="font-semibold mb-2">{label}:</label>
    {textarea ? (
      <textarea
        value={value}
        readOnly
        className="p-2 border border-gray-300 rounded-md bg-gray-100 resize-vertical h-24"
      ></textarea>
    ) : (
      <input
        type="text"
        value={value}
        readOnly
        className="p-2 border border-gray-300 rounded-md bg-gray-100"
      />
    )}
  </div>
);

export default ValidatorsReport;
