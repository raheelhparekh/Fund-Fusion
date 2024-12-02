import React from "react";

const ParentalConsentFormComponent = ({
  formData,
  setFormData,
  currentForm,
  openAForm,
}) => {
  return (
    <div
      className={`generalFormContainer parentAndConsentFormContainer ${
        currentForm === "parentAndConsentFormContainer" ? "" : "hiddenForm"
      }`}
    >
      <div
        className="header"
        data-form-name="parentAndConsentFormHeader"
        onClick={openAForm}
      >
        Parent And Consent
      </div>
      <div className="parentAndConsentForm form">
        <div className="radioField fullRow">
          <label>Do you have parental consent?</label>
          <div className="radioOptions">
            <div className="individualRadioOption">
              <input
                type="radio"
                name="parentalConsent"
                value="yes"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    parentalConsent: event.target.value === "yes",
                  })
                }
              />
              <label>Yes</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="parentalConsent"
                value="no"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    parentalConsent: event.target.value === "yes",
                  })
                }
              />
              <label>No</label>
            </div>
          </div>
        </div>
        {formData.parentalConsent && (
          <div className="labelAndInputField">
            <label>Father's Full Name</label>
            <input
              type="text"
              name="fatherFullName"
              value={formData.fatherFullName}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  fatherFullName: event.target.value,
                })
              }
            />
          </div>
        )}
        {formData.parentalConsent && (
          <div className="labelAndInputField">
            <label>Father's Contact</label>
            <input
              type="text"
              name="fatherContact"
              value={formData.fatherContact}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  fatherContact: event.target.value,
                })
              }
            />
          </div>
        )}
        {formData.parentalConsent && (
          <div className="labelAndInputField">
            <label>Mother's Full Name</label>
            <input
              type="text"
              name="motherFullName"
              value={formData.motherFullName}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  motherFullName: event.target.value,
                })
              }
            />
          </div>
        )}
        {formData.parentalConsent && (
          <div className="labelAndInputField">
            <label>Mother's Contact</label>
            <input
              type="text"
              name="motherContact"
              value={formData.motherContact}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  motherContact: event.target.value,
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentalConsentFormComponent;
