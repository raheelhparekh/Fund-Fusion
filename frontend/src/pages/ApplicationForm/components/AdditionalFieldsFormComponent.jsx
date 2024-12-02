import React from "react";

const AdditionalFieldsFormComponent = ({
  formData,
  setFormData,
  currentForm,
  openAForm,
  designation,
}) => {
  return (
    <div
      className={`generalFormContainer additionalFormContainer ${
        currentForm === "additionalFormContainer" ? "" : "hiddenForm"
      }`}
    >
      <div
        className="header"
        data-form-name="additionalFormHeader"
        onClick={openAForm}
      >
        Additional
      </div>
      <div className="additionalForm form">
        <div className="labelAndInputField fullRow">
          <label>Any Other Requirements</label>
          <input
            name="anyOtherRequirements"
            value={formData.anyOtherRequirements}
            onChange={(event) =>
              setFormData({
                ...formData,
                anyOtherRequirements: event.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalFieldsFormComponent;
