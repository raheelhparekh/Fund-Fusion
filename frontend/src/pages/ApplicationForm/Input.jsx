import React, { useState } from "react";
import { studentFormFeilds, facultyFormFeilds } from "./FormFeilds";
import { useRouteLoaderData } from "react-router-dom";

function Input({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) {
  const applicant = useRouteLoaderData("Applicant-Root");
  const designation = applicant.data.user.designation; //Faculty or Student
  let formFeilds;
  if (designation === "Student") {
    formFeilds = studentFormFeilds;
  } else  {
    formFeilds = facultyFormFeilds;
  }

  const [currentForm, setCurrentForm] = useState(
    "Personal and Academic Information"
  );
  return formFeilds.map((section, sectionIndex) => (
    <div
      key={sectionIndex}
      className="bg-white p-2 mb-4 rounded"
      onClick={() => setCurrentForm(section.label)}
    >
      <h3 className="text-xl font-semibold mt-4 mb-4">{section.label}</h3>
      {currentForm === section.label && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {section.fields.map((formFeild) => {
            if (formFeild?.parent) {
              if (values[formFeild?.parent] === false) {
                typeof values[formFeild?.parent] === "boolean"
                  ? (values[formFeild?.name] = false)
                  : (values[formFeild?.name] = "");
                return null;
              } else if (
                typeof values[formFeild?.parent] === "string" &&
                values[formFeild?.parent] !== "Other"
              ) {
                typeof values[formFeild?.parent] === "boolean"
                  ? (values[formFeild?.name] = false)
                  : (values[formFeild?.name] = "");
                return null;
              }
            }

            switch (formFeild.type) {
              case "dropdown":
                return (
                  <div key={formFeild.name} className="space-y-1">
                    <label
                      htmlFor={formFeild.name}
                      className="block font-medium"
                    >
                      {formFeild.label}
                    </label>
                    <select
                      name={formFeild.name}
                      id={formFeild.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[formFeild.name] || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="" label="Select option" />
                      {formFeild.options[values[formFeild.depend] || ""].map(
                        (option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            className="text-black"
                          >
                            {option.label}
                          </option>
                        )
                      )}
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors[formFeild.name] &&
                        touched[formFeild.name] &&
                        errors[formFeild.name]}
                    </p>
                  </div>
                );

              case "checkbox":
                return (
                  <div key={formFeild.name} className="space-y-1">
                    <label
                      htmlFor={formFeild.name}
                      className="inline-flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name={formFeild.name}
                        id={formFeild.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values[formFeild.name] || false}
                        className="h-4 w-4 border-gray-300 rounded"
                      />
                      <span className="text-sm">{formFeild.label}</span>
                    </label>
                    <p className="text-red-500 text-sm">
                      {errors[formFeild.name] &&
                        touched[formFeild.name] &&
                        errors[formFeild.name]}
                    </p>
                  </div>
                );

              case "file":
                return (
                  <div key={formFeild.name} className="space-y-1">
                    <label
                      htmlFor={formFeild.name}
                      className="block font-medium"
                    >
                      {formFeild.label}
                    </label>
                    <input
                      type="file"
                      name={formFeild.name}
                      id={formFeild.name}
                      onChange={(e) => {
                        // Handle file input change
                        setFieldValue(formFeild.name, e.target.files[0]);
                      }}
                      onBlur={handleBlur}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <p className="text-red-500 text-sm">
                      {errors[formFeild.name] &&
                        touched[formFeild.name] &&
                        errors[formFeild.name]}
                    </p>
                  </div>
                );

              default:
                return (
                  <div key={formFeild.name} className="space-y-1">
                    <label
                      htmlFor={formFeild.name}
                      className="block font-medium"
                    >
                      {formFeild.label}
                    </label>
                    <input
                      type={formFeild.type}
                      name={formFeild.name}
                      id={formFeild.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[formFeild.name] || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <p className="text-red-500 text-sm">
                      {errors[formFeild.name] &&
                        touched[formFeild.name] &&
                        errors[formFeild.name]}
                    </p>
                  </div>
                );
            }
          })}
        </div>
      )}
    </div>
  ));
}

export default Input;
