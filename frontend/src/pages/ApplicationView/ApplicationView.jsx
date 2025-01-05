import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import ValidationStatus from "./ValidationStatus";
import Form from "../ApplicationForm/Form";
import RejectionFeedback from "./RejectionFeedback";
import { TbLoader3 } from "react-icons/tb";
import AcceptChoice from "./AcceptChoice";

function ApplicationView() {
  const { role, user } =
    useRouteLoaderData("Applicant-Root")?.data ||
    useRouteLoaderData("Validator-Root")?.data;
  const submit = useSubmit();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [applicationDisplay, setApplicationDisplay] = useState(null);
  const [rejectionFeedbackPopUp, setRejectionFeedbackPopUp] = useState(false);
  const [acceptChoicePopUp, setAcceptChoicePopUp] = useState(false);

  const applicationId = useParams().applicationId;
  const statusParam = useParams().status;

  const getFullApplication = async (applicationId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }/general/getApplicationData/${applicationId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch application data: ${response.status} ${response.statusText}`
        );
      }
      const fullApplication = await response.json();
      setApplicationDisplay(fullApplication?.data);
    } catch (error) {
      console.error("Error fetching application data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (
    applicationId,
    action,
    rejectionFeedback = "",
    toVC = false
  ) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("applicationId", applicationId);
      formData.append("action", action);
      formData.append("rejectionFeedback", rejectionFeedback);
      formData.append("toVC", toVC);

      formData.forEach((value, key) => {
        console.log(key, value);
      });

      submit(formData, {
        method: "PUT",
        encType: "multipart/form-data", // Specify the encoding type
      });
    } catch (error) {
      console.error("Error during submit:", error);
    } finally {
      setLoading(false);
    }
  };

  // Navigation for status change
  let currentStatus = applicationDisplay?.currentStatus?.toLowerCase();

  useEffect(() => {
    getFullApplication(applicationId);
  }, [applicationId]);

  useEffect(() => {
    if (
      (statusParam !== currentStatus && currentStatus) ||
      (applicationId !== applicationDisplay?.applicationId &&
        applicationDisplay?.applicationId)
    ) {
      const location = window.location.pathname;
      const newPath = location.split("/").slice(0, -2).join("/");
      navigate(
        `${newPath}/${currentStatus}/${applicationDisplay?.applicationId}`
      );
    }
  }, [statusParam, currentStatus, applicationDisplay]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-full animate-pulse pb-[10%]">
        <TbLoader3 className="animate-spin text-xl size-24 text-red-700" />
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  let title = applicationDisplay?.formData?.eventName;

  if (!applicationDisplay) return null;

  return (
    <div className="min-w-min bg-white shadow rounded-lg p-2 sm:p-4 md:p-6 m-4">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">{title}</h1>

      <ValidationStatus
        validations={{
          facultyValidation: applicationDisplay?.facultyValidation,
          hodValidation: applicationDisplay?.hodValidation,
          hoiValidation: applicationDisplay?.hoiValidation,
          vcValidation: applicationDisplay?.vcValidation,
          accountsValidation: applicationDisplay?.accountsValidation,
        }}
        rejectionFeedback={applicationDisplay?.rejectionFeedback}
      />
      <Form
        prefilledData={applicationDisplay?.formData}
        applicantDesignation={applicationDisplay?.applicant?.designation}
      />

      {rejectionFeedbackPopUp && (
        <RejectionFeedback
          onClose={() => setRejectionFeedbackPopUp(false)}
          onSubmit={(rejectionFeedback) =>
            handleSubmit(
              applicationDisplay?.applicationId,
              "rejected",
              rejectionFeedback,
              false
            )
          }
        />
      )}

      {acceptChoicePopUp && (
        <AcceptChoice
          onClose={() => setAcceptChoicePopUp(false)}
          onSubmit={(toVC) =>
            handleSubmit(applicationDisplay?.applicationId, "accepted", "", toVC)
          }
          designation={user.designation}
          applicantDesignation={applicationDisplay?.applicant?.designation}
        />
      )}

      <div className="flex justify-between items-center my-4 gap-2 mx-2">
        {role === "Validator" && currentStatus === "pending" && (
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setAcceptChoicePopUp(true)}
              className="bg-green-700 text-white font-semibold text-sm sm:text-sm md:text-lg px-4 py-2 rounded-md hover:bg-green-800 focus:outline-double transition duration-200 hover:scale-110 hover:animate-spin"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => setRejectionFeedbackPopUp(true)}
              className="bg-red-700 text-white font-semibold text-sm sm:text-sm md:text-lg px-4 py-2 rounded-md hover:bg-red-800 focus:outline-double transition duration-200 hover:scale-110 hover:animate-spin"
            >
              Reject
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            const location = window.location.pathname;
            const newPath = location.split("/").slice(0, -1).join("/");
            navigate(newPath);
          }}
          className="bg-blue-700 text-white font-semibold text-sm sm:text-sm md:text-lg px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-double transition duration-200 hover:scale-110"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ApplicationView;
