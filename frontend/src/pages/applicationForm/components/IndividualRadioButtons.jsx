import React from 'react';

const IndividualRadioButtons = ({ label, value, name, formData, onChange ,checked }) => {
  return (
    <div className='individualRadioButtons'>
      <input 
        type="radio" 
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </div>
  );
}

export default IndividualRadioButtons;