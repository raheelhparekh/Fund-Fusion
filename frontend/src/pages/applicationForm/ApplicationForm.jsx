import React, { useState } from "react";
import { useSubmit, useNavigation } from "react-router-dom";
import "./ApplicationForm.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
        const [formData, setFormData] = useState({
                applicantFullName: "",
                applicantAge: "",
                applicantContact: "",
                applicantAddress: "",
                applicantCourse: "BTECH",
                applicantYearOfStudy: "",
                applicantEmail: "",
                applicantRollNo: "",
                applicantDepartment: "",
                primarySupervisorFullName: "",
                primarySupervisorEmail: "",
                primarySupervisorContact: "",
                primarySupervisorDepartment: "",
                anotherSupervisor: false,
                anotherSupervisorFullName: "",
                anotherSupervisorEmail: "",
                anotherSupervisorContact: "",
                anotherSupervisorDepartment: "",
                purposeOfTravel: "",
                purposeOfTravelOther: "",
                modeOfTravel: "",
                modeOfTravelOther: "",
                proofOfTravel: "",
                accommodationOpted: false,
                typeOfAccommodation: "",
                durationOfStay: "",
                accommodationAddress: "",
                proofOfAccommodation: "",
                eventName: "",
                eventDate: "",
                eventVenue: "",
                eventWebsite: "",
                proofOfAttendance: "",
                parentalConsent: false,
                fatherFullName: "",
                fatherContact: "",
                motherFullName: "",
                motherContact: "",
                anyOtherRequirements: "",
        });

        const [currentForm, setCurrentForm] = useState("personalAndAcademicFormContainer");
        function openAForm(event) {
                let formName = event.target.getAttribute("data-form-name");

                formName = formName.replace("Header", "") + "Container";

                if (formName === currentForm) {
                        setCurrentForm("");
                } else {
                        setCurrentForm(formName);
                }
        }

        const handleFileChange = (event) => {
                const file = event.target.files[0];
                const name = event.target.name;

                setFormData((prevData) => ({
                        ...prevData,
                        [name]: file,
                }));
        };

        const submit = useSubmit();

        const navigation = useNavigation();
        const isSubmitting = navigation.state === "submitting";

        const handleSubmit = async (event) => {
                event.preventDefault();

                const formDataToSend = new FormData();

                for (const key in formData) {
                        formDataToSend.append(key, formData[key]);
                }

                try {
                        submit(formDataToSend, { method: 'POST', encType: "multipart/form-data" });
                } catch (error) {
                        console.error("Error uploading form:", error.message);
                }
        };

        return (
                <div className="topLevelFormContainer">
                        <form className="mainForm">
                                <div
                                        className={`generalFormContainer personalAndAcademicFormContainer ${currentForm === "personalAndAcademicFormContainer"
                                                ? ""
                                                : "hiddenForm"
                                                }`}>
                                        <div
                                                className="header"
                                                data-form-name="personalAndAcademicFormHeader"
                                                onClick={openAForm}>
                                                Personal And Academic
                                        </div>
                                        <div className="personalAndAcademicForm form">
                                                <div className="labelAndInputField">
                                                        <label>Full Name</label>
                                                        <input
                                                                type="text"
                                                                name="applicantFullName"
                                                                value={formData.applicantFullName}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantFullName: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>
                                                <div className="labelAndInputField">
                                                        <label>Contact</label>
                                                        <input
                                                                type="text"
                                                                name="applicantContact"
                                                                value={formData.applicantContact}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantContact: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>
                                                <div className="labelAndInputField">
                                                        <label>Age</label>
                                                        <input
                                                                type="text"
                                                                name="applicantAge"
                                                                value={formData.applicantAge}
                                                                onChange={(event) =>
                                                                        setFormData({ ...formData, applicantAge: event.target.value })
                                                                }
                                                        />
                                                </div>

                                                <div className="labelAndInputField fullRow">
                                                        <label>Residential Address</label>
                                                        <input
                                                                type="text"
                                                                name="applicantAddress"
                                                                value={formData.applicantAddress}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantAddress: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>

                                                <div className="dropDownField">
                                                        <label>Select Course</label>
                                                        <select
                                                                name="applicantCourse"
                                                                value={formData.applicantCourse} // Must match state
                                                                onChange={(event) => {
                                                                        console.log("Selected course:", event.target.value); // Debugging log
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantCourse: event.target.value, // Update state
                                                                        });
                                                                }}
                                                        >
                                                                <option value="">Select Course</option> {/* Default option */}
                                                                <option value="BTECH">Bachelor Of Technology</option>
                                                                <option value="MTECH">Master Of Technology</option>
                                                                <option value="PHD">PHD</option>
                                                        </select>
                                                </div>


                                                <div className="dropDownField">
                                                        <label>Select Year of Study</label>
                                                        <select
                                                                name="applicantYearOfStudy"
                                                                value={formData.applicantYearOfStudy} // Controlled component
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantYearOfStudy: event.target.value,
                                                                        })
                                                                }
                                                        >
                                                                {formData.applicantCourse === "BTECH" ? (
                                                                        <>
                                                                                <option value="">Select Year</option>
                                                                                <option value="FY">First Year</option>
                                                                                <option value="SY">Second Year</option>
                                                                                <option value="TY">Third Year</option>
                                                                                <option value="LY">Fourth Year</option>
                                                                        </>
                                                                ) : formData.applicantCourse === "MTECH" ? (
                                                                        <>
                                                                                <option value="">Select Year</option>
                                                                                <option value="FY">First Year</option>
                                                                                <option value="SY">Second Year</option>
                                                                        </>
                                                                ) : formData.applicantCourse === "PHD" ? (
                                                                        <>
                                                                        </>
                                                                ) : null}
                                                        </select>
                                                </div>
                                                <div className="dropDownField">
                                                        <label>Select Department</label>
                                                        <select
                                                                name="applicantDepartment"
                                                                value={formData.applicantDepartment} // This should match the state
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantDepartment: event.target.value, // Update the state
                                                                        })
                                                                }
                                                        >
                                                                <option value="">Select Department</option> {/* Default option */}
                                                                <option value="COMPS">COMPS</option>
                                                                <option value="IT">IT</option>
                                                                <option value="MECH">MECH</option>
                                                                <option value="AIDS">AIDS</option>
                                                                <option value="EXTC">EXTC</option>
                                                                <option value="ETRX">ETRX</option>
                                                                <option value="RAI">RAI</option>
                                                        </select>
                                                </div>


                                                <div className="labelAndInputField">
                                                        <label>Somaiya Email Id</label>
                                                        <input
                                                                type="text"
                                                                name="applicantEmail"
                                                                value={formData.applicantEmail}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantEmail: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>

                                                <div className="labelAndInputField">
                                                        <label>Roll No</label>
                                                        <input
                                                                type="text"
                                                                name="applicantRollNo"
                                                                value={formData.applicantRollNo}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                applicantRollNo: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>


                                                <div className="labelAndInputField">
                                                        <label>Supervisor's Full Name</label>
                                                        <input
                                                                type="text"
                                                                name="primarySupervisorFullName"
                                                                value={formData.primarySupervisorFullName}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                primarySupervisorFullName: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>

                                                <div className="labelAndInputField">
                                                        <label>Supervisor's Somaiya Email Id</label>
                                                        <input
                                                                type="text"
                                                                name="primarySupervisorEmail"
                                                                value={formData.primarySupervisorEmail}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                primarySupervisorEmail: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>

                                                <div className="labelAndInputField">
                                                        <label>Supervisor's Contact</label>
                                                        <input
                                                                type="text"
                                                                name="primarySupervisorContact"
                                                                value={formData.primarySupervisorContact}
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                primarySupervisorContact: event.target.value,
                                                                        })
                                                                }
                                                        />
                                                </div>

                                                <div className="dropDownField">
                                                        <label>Supervisor's Department</label>
                                                        <select
                                                                name="primarySupervisorDepartment"
                                                                value={formData.primarySupervisorDepartment} // Controlled component
                                                                onChange={(event) =>
                                                                        setFormData({
                                                                                ...formData,
                                                                                primarySupervisorDepartment: event.target.value, // Update department
                                                                        })
                                                                }
                                                        >
                                                                <option value="">Select Department</option> {/* Default option */}
                                                                <option value="COMPS">COMPS</option>
                                                                <option value="IT">IT</option>
                                                                <option value="MECH">MECH</option>
                                                                <option value="AIDS">AIDS</option>
                                                                <option value="EXTC">EXTC</option>
                                                                <option value="ETRX">ETRX</option>
                                                                <option value="RAI">RAI</option>
                                                        </select>
                                                </div>


                                                <div className="radioField fullRow">
                                                        <label>Do you have another supervisor?</label>
                                                        <div className="radioOptions">
                                                                <div className="individualRadioOption">
                                                                        <input
                                                                                type="radio"
                                                                                name="anotherSupervisor"
                                                                                value="yes"
                                                                                onChange={(event) =>
                                                                                        setFormData({
                                                                                                ...formData,
                                                                                                anotherSupervisor: event.target.value === "yes",
                                                                                        })
                                                                                }
                                                                        />
                                                                        <label>Yes</label>
                                                                </div>
                                                                <div className="individualRadioOption">
                                                                        <input
                                                                                type="radio"
                                                                                name="anotherSupervisor"
                                                                                value="no"
                                                                                onChange={(event) =>
                                                                                        setFormData({
                                                                                                ...formData,
                                                                                                anotherSupervisor: event.target.value === "yes",
                                                                                        })
                                                                                }
                                                                        />
                                                                        <label>No</label>
                                                                </div>
                                                        </div>
                                                </div>

                                                {formData.anotherSupervisor && (
                                                        <div className="labelAndInputField">
                                                                <label>Other Supervisor's Full Name</label>
                                                                <input
                                                                        type="text"
                                                                        name="anotherSupervisorFullName"
                                                                        value={formData.anotherSupervisorFullName}
                                                                        onChange={(event) =>
                                                                                setFormData({
                                                                                        ...formData,
                                                                                        anotherSupervisorFullName: event.target.value,
                                                                                })
                                                                        }
                                                                />
                                                        </div>
                                                )}
                                                {formData.anotherSupervisor && (
                                                        <div className="labelAndInputField">
                                                                <label>Other Supervisor's Somaiya Email Id</label>
                                                                <input
                                                                        type="text"
                                                                        name="anotherSupervisorEmail"
                                                                        value={formData.anotherSupervisorEmail}
                                                                        onChange={(event) =>
                                                                                setFormData({
                                                                                        ...formData,
                                                                                        anotherSupervisorEmail: event.target.value,
                                                                                })
                                                                        }
                                                                />
                                                        </div>
                                                )}
                                                {formData.anotherSupervisor && (
                                                        <div className="labelAndInputField">
                                                                <label>Other Supervisor's Contact</label>
                                                                <input
                                                                        type="text"
                                                                        name="anotherSupervisorContact"
                                                                        value={formData.anotherSupervisorContact}
                                                                        onChange={(event) =>
                                                                                setFormData({
                                                                                        ...formData,
                                                                                        anotherSupervisorContact: event.target.value,
                                                                                })
                                                                        }
                                                                />
                                                        </div>
                                                )}
                                                {formData.anotherSupervisor && (
                                                        <div className="dropDownField">
                                                                <label>Other Supervisor's Department</label>
                                                                <select
                                                                        name="anotherSupervisorDepartment"
                                                                        value={formData.anotherSupervisorDepartment} // Controlled component
                                                                        onChange={(event) =>
                                                                                setFormData({
                                                                                        ...formData,
                                                                                        anotherSupervisorDepartment: event.target.value, // Correctly updating state
                                                                                })
                                                                        }
                                                                >
                                                                        <option value="">Select Department</option> {/* Added default option */}
                                                                        <option value="COMPS">COMPS</option>
                                                                        <option value="IT">IT</option>
                                                                        <option value="MECH">MECH</option>
                                                                        <option value="AIDS">AIDS</option>
                                                                        <option value="EXTC">EXTC</option>
                                                                        <option value="ETRX">ETRX</option>
                                                                        <option value="RAI">RAI</option>
                                                                </select>
                                                        </div>

                                                )}
                                        </div>
                                </div>
                                <div
                                        className={`generalFormContainer travelFormContainer ${currentForm === "travelFormContainer" ? "" : "hiddenForm"
                                                }`}>
                                        <div
                                                className="header"
                                                data-form-name="travelFormHeader"
                                                onClick={openAForm}>
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
                                                                        <option value="">Select Accommodation Type</option> {/* Default option */}
                                                                        <option value="Hotel">Hotel</option>
                                                                        <option value="Guest House">Guest House</option>
                                                                        <option value="Other">Other</option>
                                                                </select>
                                                        </div>
                                                )}
                                                {formData.accommodationOpted && (<div className="labelAndInputField">
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
                                                </div>)}
                                                {formData.accommodationOpted && (<div className="labelAndInputField fullRow">
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
                                                </div>)}

                                                {formData.accommodationOpted && (<div className="fileField fullRow">
                                                        <label>Proof of Accommodation</label>
                                                        <input type="file" name="proofOfAccommodation" onChange={handleFileChange} />
                                                </div>)}

                                        </div>
                                </div>
                                <div
                                        className={`generalFormContainer eventConferenceFormContainer ${currentForm === "eventConferenceFormContainer" ? "" : "hiddenForm"
                                                }`}>
                                        <div
                                                className="header"
                                                data-form-name="eventConferenceFormHeader"
                                                onClick={openAForm}>
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
                                                        <input type="file" name="proofOfAttendance" onChange={handleFileChange} />
                                                </div>
                                        </div>
                                </div>
                                <div
                                        className={`generalFormContainer parentAndConsentFormContainer ${currentForm === "parentAndConsentFormContainer" ? "" : "hiddenForm"
                                                }`}>
                                        <div
                                                className="header"
                                                data-form-name="parentAndConsentFormHeader"
                                                onClick={openAForm}>
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
                                <div
                                        className={`generalFormContainer additionalFormContainer ${currentForm === "additionalFormContainer" ? "" : "hiddenForm"
                                                }`}>
                                        <div
                                                className="header"
                                                data-form-name="additionalFormHeader"
                                                onClick={openAForm}>
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
                                <div className="submitContainer">
                                        <button
                                                className="submit"
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}>
                                                {isSubmitting ? "Submitting" : "Submit"}
                                        </button>
                                </div>
                        </form>
                </div>
        );
};

export default ApplicationForm;