import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { MdOutlineSettingsInputHdmi } from 'react-icons/md';

function RejectionFeedback({ onClose, onSubmit }) {
  const [reason, setReason] = useState('');

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = (e, resubmission = false) => {
    e.preventDefault();
    onSubmit(reason, resubmission);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="bg-white rounded-lg p-1 shadow-lg">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Confirm Application Rejection</h2>
        <p className="text-gray-600 mb-6">
          Please provide a reason for rejecting the application.<br/> This will help the applicant to improve future applications.
        </p>

        <form className="space-y-4">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="Enter the reason for rejection"
            rows="4"
            value={reason}
            onChange={handleChange}
            required
          />

          <div className="flex justify-end space-x-4">
            <button
              onClick={(e) => handleSubmit(e, false)}
              type="button"
              className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:outline-none"
            >
              Reject
            </button>
            <button
              onClick={(e) => handleSubmit(e, true)}
              type="button"
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none"
            >
              Allow Resubmission
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default RejectionFeedback;
