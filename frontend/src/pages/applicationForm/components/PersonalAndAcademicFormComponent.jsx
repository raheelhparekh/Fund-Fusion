import React, { useState } from "react";

const PersonalAndAcademicFormComponent = ({
  currentForm,
  openAForm,
  formData,
  setFormData,
  designation,
}) => {
  const [
    facultyKeLiyeSpecialSupervisorConditionalRendering,
    setFacultyKeLiyeSpecialSupervisorConditionalRendering,
  ] = useState(false);

  return (
    <div
      className={`generalFormContainer personalAndAcademicFormContainer ${
        currentForm === "personalAndAcademicFormContainer" ? "" : "hiddenForm"
      }`}
    >
      <div
        className="header"
        data-form-name="personalAndAcademicFormHeader"
        onClick={openAForm}
      >
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

        {designation === "Student" && (
          <>
            <div className="dropDownField">
              <label>Select Course</label>
              <select
                name="applicantCourse"
                value={formData.applicantCourse}
                onChange={(event) => {
                  console.log("Selected course:", event.target.value);
                  setFormData({
                    ...formData,
                    applicantCourse: event.target.value,
                  });
                }}
              >
                <option value="">Select Course</option>
                <option value="BTECH">Bachelor Of Technology</option>
                <option value="MTECH">Master Of Technology</option>
                <option value="PHD">PHD</option>
              </select>
            </div>

            <div className="dropDownField">
              <label>Select Year of Study</label>
              <select
                name="applicantYearOfStudy"
                value={formData.applicantYearOfStudy}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    applicantYearOfStudy: event.target.value,
                  })
                }
              >
                {formData.applicantCourse === "BTECH" && (
                  <>
                    <option value="">Select Year</option>
                    <option value="FY">First Year</option>
                    <option value="SY">Second Year</option>
                    <option value="TY">Third Year</option>
                    <option value="LY">Fourth Year</option>
                  </>
                )}
                {formData.applicantCourse === "MTECH" && (
                  <>
                    <option value="">Select Year</option>
                    <option value="FY">First Year</option>
                    <option value="SY">Second Year</option>
                  </>
                )}
                {formData.applicantCourse === "PHD" && <></>}
              </select>
            </div>
          </>
        )}

        <div className="dropDownField">
          <label>Select Department</label>
          <select
            name="applicantDepartment"
            value={formData.applicantDepartment}
            onChange={(event) =>
              setFormData({
                ...formData,
                applicantDepartment: event.target.value,
              })
            }
          >
            <option value="">Select Department</option>
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

        {designation === "Student" ? (
          <>
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
                value={formData.primarySupervisorDepartment}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    primarySupervisorDepartment: event.target.value,
                  })
                }
              >
                <option value="">Select Department</option>
                <option value="COMPS">COMPS</option>
                <option value="IT">IT</option>
                <option value="MECH">MECH</option>
                <option value="AIDS">AIDS</option>
                <option value="EXTC">EXTC</option>
                <option value="ETRX">ETRX</option>
                <option value="RAI">RAI</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="radioField fullRow">
              <label>Do you have a supervisor?</label>
              <div className="radioOptions">
                <div className="individualRadioOption">
                  <input
                    type="radio"
                    name="tempNoUseLater"
                    onChange={(event) => {
                      console.log("Yes clicked");
                      setFacultyKeLiyeSpecialSupervisorConditionalRendering(
                        true
                      );
                    }}
                  />
                  <label>Yes</label>
                </div>
                <div className="individualRadioOption">
                  <input
                    type="radio"
                    name="tempNoUseLater"
                    onChange={(event) => {
                      console.log("No clicked");
                      setFacultyKeLiyeSpecialSupervisorConditionalRendering(
                        false
                      );
                    }}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>

            {facultyKeLiyeSpecialSupervisorConditionalRendering && (
              <>
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
                    value={formData.primarySupervisorDepartment}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        primarySupervisorDepartment: event.target.value,
                      })
                    }
                  >
                    <option value="">Select Department</option>
                    <option value="COMPS">COMPS</option>
                    <option value="IT">IT</option>
                    <option value="MECH">MECH</option>
                    <option value="AIDS">AIDS</option>
                    <option value="EXTC">EXTC</option>
                    <option value="ETRX">ETRX</option>
                    <option value="RAI">RAI</option>
                  </select>
                </div>
              </>
            )}
          </>
        )}

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
          <>
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

            <div className="dropDownField">
              <label>Other Supervisor's Department</label>
              <select
                name="anotherSupervisorDepartment"
                value={formData.anotherSupervisorDepartment}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    anotherSupervisorDepartment: event.target.value,
                  })
                }
              >
                <option value="">Select Department</option>
                <option value="COMPS">COMPS</option>
                <option value="IT">IT</option>
                <option value="MECH">MECH</option>
                <option value="AIDS">AIDS</option>
                <option value="EXTC">EXTC</option>
                <option value="ETRX">ETRX</option>
                <option value="RAI">RAI</option>
              </select>
            </div>
          </>
        )}
        {/* </> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default PersonalAndAcademicFormComponent;
