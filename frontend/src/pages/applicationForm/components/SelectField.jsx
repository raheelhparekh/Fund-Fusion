import React from 'react';
import IndividualRadioButtons from './IndividualRadioButtons';
import LabelAndInputField from './LabelAndInputField';

const SelectField = ({ label, dependsOn, name, options, ifOtherThenSpecify, formData, setFormData, responsibleForRendering }) => {
  function handleYesNoChange(event) {
    const name = event.target.name;
    if (event.target.value === 'yes') {
      setFormData({
        ...formData,
        [name]: true,
      });
    } else {
      setFormData({
        ...formData,
        [name]: false,
      });
    }
  }

  function handleSelectFields(event) {
    const name = event.target.name;
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  }

  function handleOtherInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    dependsOn === null || dependsOn === true ? (
      <div className="fullRowFieldForSelectOne">
        <label>{label}</label>
        <div className="optionsAndOtherInput">
          {options.length === 2 && options.includes('yes') && options.includes('no') && responsibleForRendering ? (
            <>
              <IndividualRadioButtons
                label="yes"
                value="yes"
                name={name}
                formData={formData}
                setFormData={setFormData}
                onChange={handleYesNoChange}
                checked={formData[name] === true}
              />
              <IndividualRadioButtons
                label="no"
                value="no"
                name={name}
                formData={formData}
                setFormData={setFormData}
                onChange={handleYesNoChange}
                checked={formData[name] === false}
              />
            </>
          ) : (
            options.map((option, index) => (
              <IndividualRadioButtons
                key={index}
                label={option}
                value={option}
                name={name}
                formData={formData}
                setFormData={setFormData}
                onChange={handleSelectFields}
                checked={formData[name] === option}
              />
            ))
          )}
          {ifOtherThenSpecify && formData[name] === 'Other' && (
            <LabelAndInputField
              label={null}
              name={`${name}Other`}
              formData={formData}
              setFormData={setFormData}
              onChange={handleOtherInputChange}
            />
          )}
        </div>
      </div>
    ) : null
  );
};

export default SelectField;