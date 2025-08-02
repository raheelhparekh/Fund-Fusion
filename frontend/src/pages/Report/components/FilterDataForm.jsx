import React, { useEffect } from "react";
import { Formik } from "formik";
import { useSubmit, useRouteLoaderData, useNavigation } from "react-router-dom";
import { filterDataFormFeilds } from "./FilterDataFormFeilds";
import * as yup from "yup";
import Input from "../../ApplicationForm/Input";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function FilterDataForm({ setReportData, setLoading }) {
  const { role, user } = useRouteLoaderData("Validator-Root")?.data;

  const navigation = useNavigation();
  const isSubmittingNav = navigation.state === "submitting";

  const prefilledData =
    user?.institute || user?.department
      ? {
          institute: user?.institute,
          department: user?.department,
        }
      : null;

  const formFields = prefilledData
    ? filterDataFormFeilds.map((section) => ({
        ...section,
        fields: section.fields.map((field) => ({
          ...field,
          disabled: prefilledData[field.name],
        })),
      }))
    : filterDataFormFeilds;

  const createInitialValuesScheme = (formFields) => {
    const schema = {};

    formFields?.forEach((section) => {
      section?.fields?.forEach((field) => {
        if (prefilledData) {
          if (field.type === "miniForm" || field.type === "checkbox") {
            schema[field.name] = JSON.parse(prefilledData[field.name]);
          } else {
            schema[field.name] = prefilledData[field.name];
          }
        } else if (field.type === "checkbox") {
          schema[field.name] = false;
        } else if (field.type === "miniForm") {
          schema[field.name] = [];
        } else {
          schema[field.name] = "";
        }
      });
    });

    return schema;
  };

  const initialValuesSchema = createInitialValuesScheme(formFields);

  const createValidationSchema = (formFields) => {
    const schema = {};

    formFields?.forEach((section) => {
      section.fields?.forEach((field) => {
        if (field.validation) {
          schema[field.name] = field.validation;
        }
      });
    });

    return yup.object().shape(schema);
  };

  const validationSchema = createValidationSchema(formFields);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    const { institute, department, year, applicationType } = values;
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      if (institute) queryParams.append("institute", institute);
      if (department) queryParams.append("department", department);
      if (year) queryParams.append("year", year);
      if (applicationType) queryParams.append("applicationType", applicationType);

      const res = await axios.get(
        `${BASE_URL}/validator/getReportData?${queryParams.toString()}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setReportData({data: res.data, query: values});
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ submit: error.response.data.message });
      } else {
        setErrors({ submit: "An unexpected error occurred" });
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  useEffect(() => {
    // Trigger form submission on first render
    handleSubmit(initialValuesSchema, { setSubmitting: () => {}, setErrors: () => {} });
  }, []);

  return (
    <Formik
      initialValues={initialValuesSchema}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue, // Use setFieldValue for file handling
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="bg-transparent">
          <Input
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue} // Pass setFieldValue for file handling
            formFeilds={formFields}
          />

          <button
            type="submit"
            disabled={isSubmitting || isSubmittingNav}
            className="w-full flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out disabled:bg-gray-400"
          >
            {isSubmitting || isSubmittingNav ? "Gettting Data" : "Get Data"}
          </button>
        </form>
      )}
    </Formik>
  );
}

export default FilterDataForm;
