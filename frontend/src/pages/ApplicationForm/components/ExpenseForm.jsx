import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal"; // Ensure your Modal is correctly imported

// Validation function (manually written)
const validateForm = (values) => {
  const errors = {};

  // Validate Expense Category
  if (!values.expenseCategory) {
    errors.expenseCategory = "Expense Category is required";
  }

  // Validate Expense Name
  if (!values.expenseName) {
    errors.expenseName = "Expense Name is required";
  }

  // Validate Expense Amount
  if (!values.expenseAmount) {
    errors.expenseAmount = "Expense Amount is required";
  } else if (values.expenseAmount <= 0) {
    errors.expenseAmount = "Amount must be positive";
  } else if (values.expenseAmount < 1) {
    errors.expenseAmount = "Amount must be at least 1";
  }

  // Validate Expense Proof
  if (!values.expenseProof) {
    errors.expenseProof = "Expense Proof is required";
  } else {
    // Validate file size and type
    if (values.expenseProof.size > 1024 * 1024) {
      errors.expenseProof = "File size too large (max 1MB)";
    } else if (
      !["image/jpeg", "image/png", "application/pdf"].includes(values.expenseProof.type)
    ) {
      errors.expenseProof = "Invalid file type. Only JPEG, PNG, and PDF are allowed.";
    }
  }

  return errors;
};

const ExpenseForm = ({ onClose, setExpenses }) => {
  const [values, setValues] = useState({
    expenseCategory: "",
    expenseName: "",
    expenseAmount: "",
    expenseProof: null,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    expenseCategory: false,
    expenseName: false,
    expenseAmount: false,
    expenseProof: false,
  });

  // Handle form input changes with error checking on each keystroke
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };

      // Validate the field on every change
      const validationErrors = validateForm(updatedValues);
      setErrors(validationErrors);

      return updatedValues;
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, expenseProof: file };

      // Validate the file field on change
      const validationErrors = validateForm(updatedValues);
      setErrors(validationErrors);

      return updatedValues;
    });
  };

  // Handle blur (mark field as touched)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate form before submission
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    // If no errors, proceed with submission
    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted values:", values);
      setExpenses({
        expenseCategory: values.expenseCategory,
        expenseName: values.expenseName,
        expenseAmount: values.expenseAmount,
        expenseProof: values.expenseProof,
      });
      onClose(); // Close the modal after submission
    }
  };

  return (
    <Modal onClose={onClose} >
      <div className="space-y-4">
        {/* Expense Category */}
        <div className="space-y-1 bg-slate-50 p-3 rounded-md">
          <label htmlFor="expenseCategory" className="block font-medium">
            Expense Category
          </label>
          <select
            name="expenseCategory"
            id="expenseCategory"
            value={values.expenseCategory}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Category</option>
            <option value="TRAVEL">Travel</option>
            <option value="LODGING">Lodging</option>
            <option value="BOARDING">Boarding</option>
            <option value="LOCAL_CONVEYANCE">Local Conveyance</option>
            <option value="MISCELLANEOUS">Miscellaneous</option>
          </select>
          {errors.expenseCategory && (
            <p className="text-red-500 text-sm">{errors.expenseCategory}</p>
          )}
        </div>

        {/* Expense Name */}
        <div className="space-y-1 bg-slate-50 p-3 rounded-md">
          <label htmlFor="expenseName" className="block font-medium">
            Expense Name
          </label>
          <input
            type="text"
            name="expenseName"
            id="expenseName"
            value={values.expenseName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.expenseName && (
            <p className="text-red-500 text-sm">{errors.expenseName}</p>
          )}
        </div>

        {/* Expense Amount */}
        <div className="space-y-1 bg-slate-50 p-3 rounded-md">
          <label htmlFor="expenseAmount" className="block font-medium">
            Expense Amount
          </label>
          <input
            type="number"
            name="expenseAmount"
            id="expenseAmount"
            value={values.expenseAmount}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.expenseAmount && (
            <p className="text-red-500 text-sm">{errors.expenseAmount}</p>
          )}
        </div>

        {/* Expense Proof (File Upload) */}
        <div className="space-y-1 bg-slate-50 p-3 rounded-md">
          <label htmlFor="expenseProof" className="block font-medium">
            Expense Proof (Upload File)
          </label>
          <input
            type="file"
            name="expenseProof"
            id="expenseProof"
            accept="image/jpeg, image/png, application/pdf"
            onChange={handleFileChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.expenseProof && (
            <p className="text-red-500 text-sm">{errors.expenseProof}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={handleSubmit} // Call handleSubmit manually
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Add Expense
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ExpenseForm;
