import * as yup from "yup";
import {
  institutes,
  instituteDepartmentMapping,
} from "../../../components/BaseData";

const currentYear = new Date().getFullYear();
const yearOptions = [];
for (let year = 2018; year <= currentYear; year++) {
  yearOptions.push({ label: year.toString(), value: year.toString() });
}

const filterDataFormFeilds = [
  {
    label: "Travel Polciy Report",
    fields: [
      {
        label: "Select Institute",
        name: "applicantInstitute",
        type: "dropdown",
        options: {
          "": institutes,
        },
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        depend: "applicantInstitute",
        label: "Select Department",
        name: "applicantDepartment",
        type: "dropdown",
        options: instituteDepartmentMapping,
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        label: "Select Year",
        name: "year",
        type: "dropdown",
        options: {
          "": yearOptions,
        },
        validation: yup.string().notRequired("Year is required"),
      },
    ],
  },
];

export { filterDataFormFeilds };
