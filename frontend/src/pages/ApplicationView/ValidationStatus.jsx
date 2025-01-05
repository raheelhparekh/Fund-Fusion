import React from "react";
import { MdWarning } from "react-icons/md";

function ValidationStatus({ validations, rejectionFeedback }) {

  console.log(validations)
  const roles = [
    { name: "FACULTY", status: validations.facultyValidation },
    { name: "HOD", status: validations.hodValidation },
    { name: "HOI", status: validations.hoiValidation },
    { name: "VC", status: validations.vcValidation },
    { name: "ACCOUNTS", status: validations.accountsValidation },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "ACCEPTED":
        return "bg-green-300";
      case "REJECTED":
        return "bg-red-300";
      default:
        return "bg-yellow-300";
    }
  };

  return (
    <div className="m-3">
      <div className="flex flex-row justify-evenly">
        {roles
          .filter((role) => role.status !== null) // Exclude roles with null status
          .map((role, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 justify-center items-center"
            >
              <div
                className={`rounded-full w-10 h-10 ${getStatusColor(
                  role.status
                )}`}
              ></div>
              <p>{role.name}</p>
            </div>
          ))}
      </div>

      {rejectionFeedback && (
        <div
          className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg shadow-md w-fit min-w-[30%]"
        >
          <div className="flex justify-start items-center gap-2">
            <MdWarning className="w-6 h-6 text-red-500" />
            <p className="font-semibold">Rejection Reason:</p>
          </div>
          <p>{rejectionFeedback}</p>
        </div>
      )}
    </div>
  );
}

export default ValidationStatus;
