import React from 'react';

function FileField({ name, label, setFormData,formData }) {
  function uploadFile(file) {
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      setFormData({
        ...formData,
        [name]: base64String,
      });
      console.log(formData);
    };
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    uploadFile(file);
  }

  return (
    <>
      <div className="fullRowFieldForFileUpload" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <label>{label}</label>
        <input type="file" onChange={handleFileChange} name={name} className='fileUploadIcon'/>
      </div>
    </>
  );
}

export default FileField;
