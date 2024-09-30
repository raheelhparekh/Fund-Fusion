import React, { useState } from 'react';
import { useSubmit, useNavigation} from 'react-router-dom'
import './ApplicationForm.css';
import LabelAndInputField from './components/LabelAndInputField';
import SelectField from './components/SelectField';
import FileField from './components/FileField';
import DropDown from './components/DropDown';

import axios from 'axios';


    const ApplicationForm = () => {
        const [formData, setFormData] = useState({
            applicantFullName: '',
            applicantAge: '',
            applicantContact: '',
            applicantAddress: '',
            applicantEmail: '',
            applicantRollNo: '',
            applicantDepartment: '',
            primarySupervisorFullName: '',
            primarySupervisorEmail: '',
            primarySupervisorContact: '',
            primarySupervisorDepartment: '',
            anotherSupervisor: false,
            anotherSupervisorFullName: '',
            anotherSupervisorEmail: '',
            anotherSupervisorContact: '',
            anotherSupervisorDepartment: '',
            purposeOfTravel: '',
            purposeOfTravelOther: '',
            modeOfTravel: '',
            modeOfTravelOther: '',
            proofOfTravel: '',
            accomodationOpted: false,
            typeOfAccomodation: '',
            durationOfStay: '',
            accomodationAddress: '',
            proofOfAccomodation: '',
            eventName: '',
            eventDate: '',
            eventVenue: '',
            eventWebsite: '',
            proofOfAttendance: '',
            parentalConsent: false,
            fatherFullName: '',
            fatherContact: '',
            motherFullName: '',
            motherContact: '',
            anyOtherRequirements: ''
        })
    
        const [currentForm, setCurrentForm] = useState('PersonalAndAcademicFormContainer');
        function openAForm(event) {
            const formName = event.target.dataset.formName;
    
            if (formName === currentForm) {
                setCurrentForm('');
            } else {
                setCurrentForm(formName);
            }
        }
    
        const personalAndAcademicFormFields = [
            { label: 'Full Name', type: 'text', dependsOn: null, name: "applicantFullName", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Contact', type: 'text', dependsOn: null, name: "applicantContact", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Age', type: 'text', dependsOn: null, name: "applicantAge", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Residential Address', type: 'text', dependsOn: null, name: "applicantAddress", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Somaiya Email Id', type: 'text', dependsOn: null, name: "applicantEmail", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Roll No', type: 'text', dependsOn: null, name: "applicantRollNo", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Department', type: 'dropdown', dependsOn: null, name: 'applicantDepartment', options: ['COMPS', 'IT', 'MECH', 'AIDS', 'EXTC', 'ETRX', 'RAI'], ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Supervisor\'s Full Name', type: 'text', dependsOn: null, name: "primarySupervisorFullName", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Supervisor\'s Somaiya Email Id', type: 'text', dependsOn: null, name: "primarySupervisorEmail", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Supervisor\'s Contact', type: 'text', dependsOn: null, name: "primarySupervisorContact", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Supervisor\'s Department', type: 'dropdown', dependsOn: null, name: 'primarySupervisorDepartment', options: ['COMPS', 'IT', 'MECH', 'AIDS', 'EXTC', 'ETRX', 'RAI'], ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Do you have another supervisor?', type: 'selectOne', dependsOn: null, name: 'anotherSupervisor', options: ['yes', 'no'], ifOtherThenSpecify: false, responsibleForRendering: true, formData: formData, setFormData: setFormData },
            { label: 'Other Supervisor\'s Full Name', type: 'text', dependsOn: 'anotherSupervisor', name: "anotherSupervisorFullName", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Other Supervisor\'s Somaiya Email Id', type: 'text', dependsOn: 'anotherSupervisor', name: "anotherSupervisorEmail", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Other Supervisor\'s Contact', type: 'text', dependsOn: 'anotherSupervisor', name: "anotherSupervisorContact", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Other Supervisor\'s Department', type: 'dropdown', dependsOn: 'anotherSupervisor', name: 'anotherSupervisorDepartment', options: ['COMPS', 'IT', 'MECH', 'AIDS', 'EXTC', 'ETRX', 'RAI'], ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData }
        ];
    
        const travelFormFields = [
            { label: "Purpose of Travel", type: "selectOne", dependsOn: null, name: 'purposeOfTravel', options: ['Academic', 'Personal', 'Research', 'Other'], ifOtherThenSpecify: true, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Mode of Travel', type: 'selectOne', dependsOn: null, name: 'modeOfTravel', options: ['Flight', 'Train', 'Bus', 'Car', 'Other'], ifOtherThenSpecify: true, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Proof of Travel', type: 'file', dependsOn: null, name: 'proofOfTravel', options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Accommodation Opted?', type: 'selectOne', dependsOn: null, name: 'accommodationOpted', options: ['yes', 'no'], ifOtherThenSpecify: false, responsibleForRendering: true, formData: formData, setFormData: setFormData },
            { label: 'Type of Accommodation', type: 'selectOne', dependsOn: 'accommodationOpted', name: 'typeOfAccommodation', options: ['Hotel', 'Guest House', 'Other'], ifOtherThenSpecify: true, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Duration of Stay', type: 'text', dependsOn: 'accommodationOpted', name: "durationOfStay", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Accommodation Address', type: 'text', dependsOn: 'accommodationOpted', name: "accommodationAddress", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
        ];
    
        const eventConferenceFields = [
            { label: 'Event Name', type: 'text', dependsOn: null, name: "eventName", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Event Date', type: 'text', dependsOn: null, name: "eventDate", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Event Website/Reference', type: 'text', dependsOn: null, name: "eventWebsite", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Event Venue', type: 'text', dependsOn: null, name: "eventVenue", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
        ];
    
        const parentAndConsentFields = [
            { label: 'Do you have parental consent?', type: 'selectOne', dependsOn: null, name: 'parentalConsent', options: ['yes', 'no'], ifOtherThenSpecify: false, responsibleForRendering: true, formData: formData, setFormData: setFormData },
            { label: 'Father\'s Full Name', type: 'text', dependsOn: 'parentalConsent', name: "fatherFullName", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Father\'s Contact', type: 'text', dependsOn: 'parentalConsent', name: "fatherContact", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Mother\'s Full Name', type: 'text', dependsOn: 'parentalConsent', name: "motherFullName", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
            { label: 'Mother\'s Contact', type: 'text', dependsOn: 'parentalConsent', name: "motherContact", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
        ];
    
        const additionalFields = [
            { label: 'Any Other Requirements', type: 'text', dependsOn: null, name: "anyOtherRequirements", options: null, ifOtherThenSpecify: false, responsibleForRendering: false, formData: formData, setFormData: setFormData },
        ];



    function renderInputFields({ label, type, dependsOn, name, options, ifOtherThenSpecify, responsibleForRendering, formData, setFormData }, index) {
        switch (type) {
            case "text":
                if (dependsOn === null || formData[dependsOn]) {
                    return <LabelAndInputField key={index} label={label} name={name} setFormData={setFormData} />;
                }
                break;
            case "selectOne":
                if (dependsOn === null || formData[dependsOn]) {
                    return (
                        <SelectField
                            key={index}
                            label={label}
                            dependsOn={dependsOn}
                            name={name}
                            options={options}
                            ifOtherThenSpecify={ifOtherThenSpecify}
                            responsibleForRendering={responsibleForRendering}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    );
                }

            case "file":
                if (dependsOn === null || formData[dependsOn]) {
                    return <FileField key={index} name={name} label={label} setFormData={setFormData} formData={formData} />;
                }
                break;
            case "dropdown":
                if (dependsOn === null || formData[dependsOn]) {
                    return (
                        <DropDown
                            key={index}
                            label={label}
                            dependsOn={dependsOn}
                            name={name}
                            options={options}
                            ifOtherThenSpecify={ifOtherThenSpecify}
                            responsibleForRendering={responsibleForRendering}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    );
                }
                break;
            default:
                break;
        }
    }

    const submit = useSubmit();

    function handleSubmit(event) {
        event.preventDefault();

        const formDataObject = new FormData();

        // Append all fields from formData to FormData object
        Object.entries(formData).forEach(([key, value]) => {
            formDataObject.append(key, value);
        });

        // Submit the FormData object
        submit(formDataObject, { method: "POST" });
    }

    const navigation = useNavigation();
    const isSubmitting = (navigation.state === "submitting")

    return (
        <div className='topLevelFormContainer'>
            <form className='mainForm'>
                <div className={`generalFormContainer personalAndAcademicFormContainer ${currentForm === 'PersonalAndAcademicFormContainer' ? '' : 'hiddenForm'}`}>
                    <div className='header' data-form-name='PersonalAndAcademicFormContainer' onClick={openAForm}>
                        Personal And Academic
                    </div>
                    <div className='form'>
                        {personalAndAcademicFormFields.map((field, index) => renderInputFields(field, index))}
                    </div>
                </div>
                <div className={`generalFormContainer travelFormContainer ${currentForm === 'TravelFormContainer' ? '' : 'hiddenForm'}`}>
                    <div className='header' data-form-name='TravelFormContainer' onClick={openAForm}>
                        Travel
                    </div>
                    <div className='form'>
                        {travelFormFields.map((field, index) => renderInputFields(field, index))}
                    </div>
                </div>
                <div className={`generalFormContainer eventConferenceFormContainer ${currentForm === 'EventConferenceFormContainer' ? '' : 'hiddenForm'}`}>
                    <div className='header' data-form-name='EventConferenceFormContainer' onClick={openAForm}>
                        Event/Conference
                    </div>
                    <div className='form'>
                        {eventConferenceFields.map((field, index) => renderInputFields(field, index))}
                    </div>
                </div>
                <div className={`generalFormContainer parentAndConsentFormContainer ${currentForm === 'ParentAndConsentFormContainer' ? '' : 'hiddenForm'}`}>
                    <div className='header' data-form-name='ParentAndConsentFormContainer' onClick={openAForm}>
                        Parental Consent
                    </div>
                    <div className='form'>
                        {parentAndConsentFields.map((field, index) => renderInputFields(field, index))}
                    </div>
                </div>
                <div className={`generalFormContainer additionalFieldsFormContainer ${currentForm === 'AdditionalFieldsFormContainer' ? '' : 'hiddenForm'}`}>
                    <div className='header' data-form-name='AdditionalFieldsFormContainer' onClick={openAForm}>
                        Additional Fields
                    </div>
                    <div className='form'>
                        {additionalFields.map((field, index) => renderInputFields(field, index))}
                    </div>
                </div>
                <button  disabled = {isSubmitting} className='submitFormButton' type='submit' onClick={handleSubmit} > {isSubmitting?"Submitting":"Submit"} </button>
            </form>
        </div>
    );
};

export default ApplicationForm;