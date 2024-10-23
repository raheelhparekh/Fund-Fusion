import React from 'react'

function ApplicationDisplay({formData}) {

    return (
      <div className="p-6 border border-gray-300 rounded-lg bg-white">
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
    <div className="flex flex-row mb-4">
      <label className="font-semibold mb-2 mr-4">{label}:</label>
      {textarea ? (
        <textarea
          value={value}
          readOnly
          className="p-2 border border-gray-300 rounded-md bg-gray-100 resize-vertical h-24 w-fit"
        ></textarea>
      ) : (
        <input
          type="text"
          value={value}
          readOnly
          className="p-2 border border-gray-300 rounded-md bg-gray-100 w-fit"
        />
      )}
    </div>
  );

 

export default ApplicationDisplay
