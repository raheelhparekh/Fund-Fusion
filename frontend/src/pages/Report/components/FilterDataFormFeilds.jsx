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
        name: "institute",
        type: "dropdown",
        options: {
          "": institutes,
        },
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        depend: "institute",
        label: "Select Department",
        name: "department",
        type: "dropdown",
        options: instituteDepartmentMapping,
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        label: "Select Application Type",
        name: "applicationType",
        type: "dropdown",
        options: {
          "": [
            { label: "Student Applications", value: "STUDENT" },
            { label: "Faculty Applications", value: "FACULTY" },
          ],
        },
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
