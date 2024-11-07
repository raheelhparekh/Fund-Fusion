import React from "react";
import FormDisplay from "./FormDisplay";
import { useRouteLoaderData, useSubmit } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import ValidationStatus from "./ValidationStatus";

function ApplicationView({ applicationDisplay, closeModal }) {
  const { role } =
    useRouteLoaderData("Applicant-Root")?.data ||
    useRouteLoaderData("Validator-Root")?.data;
  const submit = useSubmit();

  const handleSubmit = (applicationId, action) => {
    const formData = new FormData();
    formData.append("applicationId", applicationId);
    formData.append("action", action);

    // Use the submit function to send a PUT request with the form data
    submit(formData, { method: "POST" });
  };

  console.log(applicationDisplay);

  return (
    <Modal onClose={closeModal} title={applicationDisplay.formData.eventName}>
      <ValidationStatus
        validations={{
          fdccoordinatorValidation: applicationDisplay.fdccoordinatorValidation,
          supervisorValidation: applicationDisplay.supervisorValidation,
          hodValidation: applicationDisplay.hodValidation,
          hoiValidation: applicationDisplay.hoiValidation,
        }}
      />

      <FormDisplay
        applicationId={applicationDisplay.applicationId}
        formData={applicationDisplay.formData}
      />
      <div className="flex justify-between mt-4">
        {role === "Validator" &&
          applicationDisplay.currentStatus === "Pending" && (
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  handleSubmit(applicationDisplay.applicationId, "accepted")
                }
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Accept
              </button>
              <button
                onClick={() =>
                  handleSubmit(applicationDisplay.applicationId, "rejected")
                }
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          )}
        <button
          onClick={() => closeModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ApplicationView;
