import React from "react";

const EventDetailsFormComponent = ({
  formData,
  setFormData,
  currentForm,
  openAForm,
  handleFileChange,
}) => {
  return (
    <div
      className={`generalFormContainer eventConferenceFormContainer ${
        currentForm === "eventConferenceFormContainer" ? "" : "hiddenForm"
      }`}
    >
      <div
        className="header"
        data-form-name="eventConferenceFormHeader"
        onClick={openAForm}
      >
        Event/Conference
      </div>
      <div className="eventConferenceForm form">
        <div className="labelAndInputField">
          <label>Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={(event) =>
              setFormData({ ...formData, eventName: event.target.value })
            }
          />
        </div>
        <div className="labelAndInputField">
          <label>Event Date</label>
          <input
            type="text"
            name="eventDate"
            value={formData.eventDate}
            onChange={(event) =>
              setFormData({ ...formData, eventDate: event.target.value })
            }
          />
        </div>
        <div className="labelAndInputField">
          <label>Event Website/Reference</label>
          <input
            type="text"
            name="eventWebsite"
            value={formData.eventWebsite}
            onChange={(event) =>
              setFormData({ ...formData, eventWebsite: event.target.value })
            }
          />
        </div>
        <div className="labelAndInputField fullRow">
          <label>Event Venue</label>
          <input
            type="text"
            name="eventVenue"
            value={formData.eventVenue}
            onChange={(event) =>
              setFormData({ ...formData, eventVenue: event.target.value })
            }
          />
        </div>
        <div className="fileField fullRow">
          <label>Proof of Attendance</label>
          <input
            type="file"
            name="proofOfAttendance"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsFormComponent;
