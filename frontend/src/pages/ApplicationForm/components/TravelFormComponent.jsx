import React from "react";

const TravelFormComponent = ({
  currentForm,
  openAForm,
  setFormData,
  formData,
  handleFileChange,
}) => {
  return (
    <div
      className={`generalFormContainer travelFormContainer ${
        currentForm === "travelFormContainer" ? "" : "hiddenForm"
      }`}
    >
      <div
        className="header"
        data-form-name="travelFormHeader"
        onClick={openAForm}
      >
        Travel
      </div>
      <div className="travelForm form">
        <div className="radioField fullRow">
          <label>Purpose of Travel</label>
          <div className="radioOptions">
            <div className="individualRadioOption">
              <input
                type="radio"
                name="purposeOfTravel"
                value="Academic"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    purposeOfTravel: event.target.value,
                  })
                }
              />
              <label>Academic</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="purposeOfTravel"
                value="Personal"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    purposeOfTravel: event.target.value,
                  })
                }
              />
              <label>Personal</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="purposeOfTravel"
                value="Research"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    purposeOfTravel: event.target.value,
                  })
                }
              />
              <label>Research</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="purposeOfTravel"
                value="Other"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    purposeOfTravel: event.target.value,
                  })
                }
              />
              <label>Other</label>
            </div>
            {formData.purposeOfTravel === "Other" && (
              <div className="smallLabelAndInputField">
                {/* <label>Specify</label> */}
                <input
                  type="text"
                  name="purposeOfTravelOther"
                  value={formData.purposeOfTravelOther}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      purposeOfTravelOther: event.target.value,
                    })
                  }
                  placeholder="Specify"
                />
              </div>
            )}
          </div>
        </div>
        <div className="radioField fullRow">
          <label>Mode of Travel</label>
          <div className="radioOptions">
            <div className="individualRadioOption">
              <input
                type="radio"
                name="modeOfTravel"
                value="Flight"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    modeOfTravel: event.target.value,
                  })
                }
              />
              <label>Flight</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="modeOfTravel"
                value="Train"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    modeOfTravel: event.target.value,
                  })
                }
              />
              <label>Train</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="modeOfTravel"
                value="Bus"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    modeOfTravel: event.target.value,
                  })
                }
              />
              <label>Bus</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="modeOfTravel"
                value="Car"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    modeOfTravel: event.target.value,
                  })
                }
              />
              <label>Car</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="modeOfTravel"
                value="Other"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    modeOfTravel: event.target.value,
                  })
                }
              />
              <label>Other</label>
            </div>
            {formData.modeOfTravel === "Other" && (
              <div className="smallLabelAndInputField">
                {/* <label>Specify</label> */}
                <input
                  type="text"
                  name="modeOfTravelOther"
                  value={formData.modeOfTravelOther}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      modeOfTravelOther: event.target.value,
                    })
                  }
                  placeholder="Specify"
                />
              </div>
            )}
          </div>
        </div>
        <div className="fileField fullRow">
          <label>Proof of Travel</label>
          <input type="file" name="proofOfTravel" onChange={handleFileChange} />
        </div>
        <div className="radioField fullRow">
          <label>Accommodation Opted?</label>
          <div className="radioOptions">
            <div className="individualRadioOption">
              <input
                type="radio"
                name="accommodationOpted"
                value="yes"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    accommodationOpted: event.target.value === "yes",
                  })
                }
              />
              <label>Yes</label>
            </div>
            <div className="individualRadioOption">
              <input
                type="radio"
                name="accommodationOpted"
                value="no"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    accommodationOpted: event.target.value === "yes",
                  })
                }
              />
              <label>No</label>
            </div>
          </div>
        </div>
        {formData.accommodationOpted && (
          <div className="dropDownField">
            <label>Type of Accommodation</label>
            <select
              name="typeOfAccommodation"
              value={formData.typeOfAccommodation} // Controlled component
              onChange={(event) =>
                setFormData({
                  ...formData,
                  typeOfAccommodation: event.target.value, // Update state correctly
                })
              }
            >
              <option value="">Select Accommodation Type</option>{" "}
              {/* Default option */}
              <option value="Hotel">Hotel</option>
              <option value="Guest House">Guest House</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}
        {formData.accommodationOpted && (
          <div className="labelAndInputField">
            <label>Duration of Stay</label>
            <input
              type="text"
              name="durationOfStay"
              value={formData.durationOfStay}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  durationOfStay: event.target.value,
                })
              }
            />
          </div>
        )}
        {formData.accommodationOpted && (
          <div className="labelAndInputField fullRow">
            <label>Accommodation Address</label>
            <input
              type="text"
              name="accommodationAddress"
              value={formData.accommodationAddress}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  accommodationAddress: event.target.value,
                })
              }
            />
          </div>
        )}

        {formData.accommodationOpted && (
          <div className="fileField fullRow">
            <label>Proof of Accommodation</label>
            <input
              type="file"
              name="proofOfAccommodation"
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelFormComponent;
