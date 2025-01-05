import React from "react";
import Modal from "../../components/Modal/Modal";

function AcceptChoice({
  onClose,
  onSubmit,
  designation,
  applicantDesignation,
}) {
  const handleSubmit = (toVC = false) => {
    onSubmit(toVC);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="bg-white rounded-lg p-6 shadow-lg mx-auto">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">
          Confirm Application Approval
        </h2>
        <p className="text-gray-600 mb-6">
          {(() => {
            switch (designation) {
              case "FACULTY":
                return "By approving, you will forward this application to the Head of Department (HOD).";
              case "HOD":
                return "By approving, you will forward this application to the Head of Institute (HOI).";
              case "HOI":
                if (applicantDesignation === "STUDENT") {
                  return "By approving, you will forward this application to Accounts.";
                } else {
                  return "By approving, you can forward this application to either the Vice Chancellor (VC) or Accounts.";
                }
              case "VC":
                return "By approving, you will forward this application to Accounts.";
              case "ACCOUNTS":
                return "By approving, you confirm that the given expenses will be paid by the institute.";
              default:
                return "";
            }
          })()}
        </p>

        <div className="flex flex-col gap-4 justify-center">
          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            Cancel
          </button>

          {(() => {
            switch (designation) {
              case "FACULTY":
                return (
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none"
                  >
                    Approve
                  </button>
                );
              case "HOD":
                return (
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none"
                  >
                    Approve
                  </button>
                );
              case "HOI":
                return (
                  <div className="flex flex-col gap-2">
                    {applicantDesignation !== "STUDENT" && (
                      <button
                        onClick={() => handleSubmit(true)}
                        type="button"
                        className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
                      >
                        Forward to VC
                      </button>
                    )}
                    <button
                      onClick={() => handleSubmit(false)}
                      type="button"
                      className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none"
                    >
                      Forward to Accounts
                    </button>
                  </div>
                );
              case "VC":
                return (
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none"
                  >
                    Forward to Accounts
                  </button>
                );
              case "ACCOUNTS":
                return (
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-700 focus:outline-none"
                  >
                    Approve
                  </button>
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </Modal>
  );
}

export default AcceptChoice;
