import React from 'react';
import './LabelAndInputField.css';

const wideFieldLabels = [
    'Full Name',
    'Somaiya Email Id',
    'Nearest Railway Station', 
    'Supervisor/Mentors First Name', 
    'Supervisor/Mentors Last Name', 
    'Supervisor/Mentors Somaiya Email Id', 
    'Supervisor/Mentors Contact', 
    'Supervisor/Mentors Department',
    'Event Name',
    'Event Date',
    'Event Website/Reference', 
    'Supervisor/Mentors Full Name',
    'Another Supervisor Full Name',
    'Another Supervisor somaiya Email Id',
    'Other Supervisor\'s Full Name',
    'Other Supervisor\'s Somaiya Email Id',
    'Other Supervisor\'s Contact',
    'Other Supervisor\'s Department',
    'Supervisor\'s Full Name',
    'Supervisor\'s Somaiya Email Id',
    'Supervisor\'s Contact',
    'Supervisor\'s Department',
    'Father\'s Full Name',
    'Father\'s Contact',
    'Mother\'s Full Name',
    'Mother\'s Contact',
];

const fullRowNeeded = [
    'Any Other Requirements',
    'Accommodation Address',
    'Event Venue',
    'Residential Address',
]

const regularSpan = [
    'Age',
    'Roll No',
    'Department',
'Contact',
'Duration of Stay',
]

const LabelAndInputField = (props) => {

    function handleChange(event) {
        props.setFormData((prevData) => {
            return {
                ...prevData,
                [props.name]: event.target.value
            }
        })
    }

    return (
        <>
            {props.label ? (
                <div className={`labelAndInputField ${wideFieldLabels.includes(props.label) ? "isWide" : ""}  ${fullRowNeeded.includes(props.label) ? "fullRowFieldForLabel" : ""} ${regularSpan.includes(props.label) ? "regularSpan" : ""}`}>
                    <label className='label'  >{props.label}</label>
                    <input className='input' type="text" onChange={handleChange} name={props.name} />
                </div>
            ) : (
                <input className='justInputElement' type="text" placeholder='If Other then Specify' onChange={handleChange} name={props.name} />
            )}
        </>
    );
}

export default LabelAndInputField;
