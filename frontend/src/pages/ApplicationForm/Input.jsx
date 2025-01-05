import React, { useEffect, useState } from "react";
import { studentFormFeilds, facultyFormFeilds } from "./FormFeilds";
import { useParams, useRouteLoaderData } from "react-router-dom";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import PdfViewer from "../../components/PdfViewer";
import PdfActions from "../ApplicationView/PdfActions";

function Input({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  formFeilds,
}) {
  const applicationId = useParams().applicationId;

  const [showMiniFrom, setShowMiniForm] = useState(false);
  const [pdfIsVisible, setPdfIsVisible] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  return formFeilds.map((section, sectionIndex) => {
    if (
      section?.parent?.name &&
      !section?.parent?.values?.includes(values[section?.parent?.name])
    ) {
      section.fields.forEach((formFeild) => {
      if (typeof values[formFeild?.name] === "boolean") {
        values[formFeild.name] = false;
      } else {
        values[formFeild.name] = "";
      }
      });
      return null;
    }
    return (
      <div
        key={sectionIndex}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md min-w-fit border-t-4 border-red-700 mb-4"
      >
        <h3 className="text-xl font-semibold mt-2 mb-4">{section.label}</h3>
        <div
          className={`${
            section.label === "Expense Details"
              ? "grid grid-cols-1" // Apply single column grid when the label is "Expense Details"
              : section.label === "Travel Polciy Report"
              ? "grid grid-cols-2" // Apply two-column grid when the label is "Travel Polciy Report"
              : "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" // Apply multi-column grid for other labels
          } gap-4`}
        >
          {section.fields.map((formFeild) => {
            if (formFeild?.parent?.name) {
              if (values[formFeild?.parent?.name] === false) {
                typeof values[formFeild?.name] === "boolean"
                  ? (values[formFeild?.name] = false)
                  : (values[formFeild?.name] = "");
                return null;
              } else if (
                typeof values[formFeild?.parent?.name] === "string" &&
                !formFeild?.parent?.values.includes(
                  values[formFeild?.parent?.name]
                )
              ) {
                typeof values[formFeild?.name] === "boolean"
                  ? (values[formFeild?.name] = false)
                  : (values[formFeild?.name] = "");
                return null;
              }
            }

            switch (formFeild.type) {
              case "dropdown":
                return (
                  <div
                    key={formFeild.name}
                    className="space-y-1 bg-slate-50 p-3 rounded-md"
                  >
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-300 ease-in-out"
                      disabled={formFeild?.disabled}
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
                  <div
                    key={formFeild.name}
                    className="space-y-1 bg-slate-50 p-3 rounded-md"
                  >
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
                        className="h-4 w-4 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                        disabled={formFeild?.disabled}
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

              case "textarea":
                return (
                  <div
                    key={formFeild.name}
                    className="space-y-1 bg-slate-50 p-3 rounded-md"
                  >
                    <label
                      htmlFor={formFeild.name}
                      className="block font-medium"
                    >
                      {formFeild.label}
                    </label>
                    <textarea
                      name={formFeild.name}
                      id={formFeild.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[formFeild.name] || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md max-h-32 min-h-20 focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-300 ease-in-out"
                      disabled={formFeild?.disabled}
                    />
                    <p className="text-red-500 text-sm">
                      {errors[formFeild.name] &&
                        touched[formFeild.name] &&
                        errors[formFeild.name]}
                    </p>
                  </div>
                );

              case "file":
                return (
                  <div
                    key={formFeild.name}
                    className="space-y-1 bg-slate-50 p-3 rounded-md"
                  >
                    <label
                      htmlFor={formFeild.name}
                      className="block font-medium"
                    >
                      {formFeild.label}
                    </label>

                    {formFeild?.disabled ? (
                      values[formFeild.name] === "" ? (
                        <p className="pt-2">No File Submitted</p>
                      ) : (
                        <PdfActions
                          applicationId={applicationId}
                          fileName={formFeild.name}
                        />
                      )
                    ) : (
                      <>
                        <input
                          type="file"
                          name={formFeild.name}
                          id={formFeild.name}
                          onChange={(e) => {
                            setFieldValue(formFeild.name, e.target.files[0]);
                          }}
                          onBlur={handleBlur}
                          className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-300 ease-in-out"
                        />
                        <p className="text-red-500 text-sm">
                          {errors[formFeild.name] &&
                            touched[formFeild.name] &&
                            errors[formFeild.name]}
                        </p>
                      </>
                    )}
                  </div>
                );

              case "miniForm":
                return (
                  <div
                    key={formFeild.name}
                    className="space-y-4 bg-slate-50 p-6 rounded-md w-full"
                  >
                    {pdfIsVisible && (
                      <PdfViewer
                        fileUrl={fileUrl}
                        setIsModalOpen={setPdfIsVisible}
                      />
                    )}

                    {/* Label and Add Expense Button */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <label
                        htmlFor={formFeild.name}
                        className="block text-lg font-medium text-gray-800 mb-3 sm:mb-0 sm:w-1/2"
                      >
                        {`${formFeild.label}: ₹${values[formFeild.name]
                          ?.reduce(
                            (total, rec) =>
                              total + parseFloat(rec.expenseAmount || 0),
                            0
                          )
                          .toFixed(2)}`}
                        {values[formFeild.name]
                          ?.reduce(
                            (total, rec) =>
                              total + parseFloat(rec.expenseAmount || 0),
                            0
                          )
                          .toFixed(2) > 10000 && (
                          <p className="text-red-600">Warning: Limit Exceded</p>
                        )}
                      </label>

                      {!formFeild?.disabled &&
                        (values[formFeild.name]?.length < 10 ? (
                          <div className="flex-shrink-0 mt-4 sm:mt-0 sm:w-auto">
                            <button
                              className="bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform transition duration-300 hover:bg-red-800 hover:scale-105 active:scale-95"
                              type="button"
                              onClick={() => setShowMiniForm(true)}
                            >
                              Add Expense
                            </button>
                          </div>
                        ) : (
                          <h3 className="block text-lg font-medium text-gray-800 mb-3 sm:mb-0 sm:w-1/2">
                            Cannot add more than 10 expenses
                          </h3>
                        ))}
                    </div>

                    {/* Expense Form */}
                    {showMiniFrom && !formFeild?.disabled && (
                      <ExpenseForm
                        onClose={() => setShowMiniForm(false)}
                        setExpenses={(newExpenses) =>
                          setFieldValue(formFeild.name, [
                            ...values[formFeild.name],
                            newExpenses,
                          ])
                        }
                      />
                    )}

                    {/* Error Message */}
                    <p className="text-red-500 text-sm mt-2">
                      {errors[formFeild.name] &&
                        touched[formFeild.name] &&
                        errors[formFeild.name]}
                    </p>

                    {/* Display Expense Table */}
                    {values[formFeild.name]?.length > 0 && (
                      <div className="mt-6 w-full overflow-x-auto">
                        <ExpenseTable
                          expenses={values[formFeild.name]}
                          setPdfIsVisible={setPdfIsVisible}
                          setFileUrl={setFileUrl}
                          deleteExpense={(expense) =>
                            setFieldValue(
                              formFeild.name,
                              values[formFeild.name]?.filter(
                                (toDel) => toDel !== expense
                              )
                            )
                          }
                          disabled={formFeild?.disabled}
                        />
                      </div>
                    )}
                  </div>
                );

              default:
                return (
                  <div
                    key={formFeild.name}
                    className="space-y-1 bg-slate-50 p-3 rounded-md"
                  >
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-300 ease-in-out"
                      disabled={formFeild?.disabled}
                      max={formFeild?.max}
                      min={formFeild?.min}
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
      </div>
    );
  });
}

export default Input;
