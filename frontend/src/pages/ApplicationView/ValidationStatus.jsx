import React from "react";

function ValidationStatus({ validations }) {
  const roles = [
    { name: 'Supervisor', status: validations.supervisorValidation },
    { name: 'FDC', status: validations.fdccoordinatorValidation },
    { name: 'HOD', status: validations.hodValidation },
    { name: 'HOI', status: validations.hoiValidation },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACCEPTED':
        return 'bg-green-300';
      case 'REJECTED':
        return 'bg-red-300';
      default:
        return 'bg-yellow-300';
    }
  };

  return (
    <div className="m-3">
      <div className="flex flex-row justify-evenly">
        {roles
          .filter((role) => role.status !== null)  // Exclude roles with null status
          .map((role, index) => (
            <div key={index} className="flex flex-col gap-1 justify-center items-center">
              <div className={`rounded-full w-10 h-10 ${getStatusColor(role.status)}`}></div>
              <p>{role.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ValidationStatus;
