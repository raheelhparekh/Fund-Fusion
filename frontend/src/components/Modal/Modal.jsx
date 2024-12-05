import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg relative w-11/12 md:w-3/5 lg:w-2/5 h-5/6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-start p-2">
          <button
            className="absolute top-3 right-3 text-xl font-bold text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
