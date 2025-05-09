import * as yup from "yup";
import {
  institutes,
  instituteDepartmentMapping,
} from "../../components/BaseData";

const facultyFormFeilds = [
  {
    label: "Application Type",
    fields: [
      {
        label: "Select Application Type",
        name: "formName",
        type: "dropdown",
        options: {
          "": [
            {
              label: "Travel Intimation Form",
              value: "Travel Intimation Form",
            },
            { label: "Post Travel Form", 
              value: "Post Travel Form" 
            },
          ],
        },
        validation: yup.string().notRequired("Application Type is notRequired"),
      },
      {
        parent: { name: "formName", values: ["Travel Intimation Form"] },
        label: "Advance Required",
        name: "advanceRequired",
        type: "checkbox",
      },
      {
        parent: { name: "formName", values: ["Post Travel Form"] },
        label: "Intimation Application ID",
        name: "intimationApplicationID",
        type: "text",
        validation: yup.string().when("formName", {
          is: "Post Travel Form",
          then: (schema) => schema.required("Application ID is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
      },
    ],
  },
  {
    label: "Cadre Or Individual Application",
    fields: [
      {
        label: "You are applying as Individual or Cadre?",
        name: "applicationType",
        type: "dropdown",
        options: {
          "": [
            { label: "Individual", value: "Individual" },
            { label: "Cadre", value: "Cadre" },
          ],
        },
        validation: yup.string().notRequired("Application Type is notRequired"),
      },
      {
        parent: { name: "applicationType", values: ["Cadre"] },
        label: "How many members are there in your cadre?",
        name: "cadreSize",
        type: "number",
        max: 10,
        min: 2,
        validation: yup
          .number()
          .notRequired("Cadre Size is notRequired")
          .min(2, "Cadre Size must be at least 2")
          .max(10, "Cadre Size must be at most 10"),
      },
    ],
  },
  {
    parent: { name: "applicationType", values: ["Individual"] },
    label: "Personal and Academic Information",
    fields: [
      {
        label: "Enter Full Name",
        name: "applicantFullName",
        type: "text",
        validation: yup.string().notRequired("Full Name is notRequired"),
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
        validation: yup
          .number()
          .notRequired("Age is notRequired")
          .min(18, "Age must be at least 18"),
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
        validation: yup
          .string()
          .notRequired("Contact Number is notRequired")
          .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "textarea",
        validation: yup.string().notRequired("Address is notRequired"),
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
        validation: yup
          .string()
          .email("Invalid email format")
          .notRequired("Email is notRequired"),
      },
      {
        label: "Enter Faculty ID No",
        name: "applicantIDNo",
        type: "text",
        validation: yup.string().notRequired("Roll No is notRequired"),
      },
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
    ],
  },
  ...Array.from({ length: 10 }, (_, i) => ({
    parent: {
      name: "cadreSize",
      values: Array.from({ length: 10 }, (_, j) => Math.min(j + i + 1, 10)),
    },
    label: `Cadre Member ${i + 1} Personal and Academic Information`,
    fields: [
      {
        label: `Enter Cadre Member ${i + 1} Full Name`,
        name: `cadreMember${i + 1}FullName`,
        type: "text",
        validation: yup.string().notRequired("Full Name is notRequired"),
      },
      {
        label: `Enter Cadre Member ${i + 1} Age`,
        name: `cadreMember${i + 1}Age`,
        type: "number",
        validation: yup
          .number()
          .notRequired("Age is notRequired")
          .min(18, "Age must be at least 18"),
      },
      {
        label: `Enter Cadre Member ${i + 1} Contact Number`,
        name: `cadreMember${i + 1}Contact`,
        type: "tel",
        validation: yup
          .string()
          .notRequired("Contact Number is notRequired")
          .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
      },
      {
        label: `Enter Cadre Member ${i + 1} Address`,
        name: `cadreMember${i + 1}Address`,
        type: "textarea",
        validation: yup.string().notRequired("Address is notRequired"),
      },
      {
        label: `Enter Cadre Member ${i + 1} Email`,
        name: `cadreMember${i + 1}Email`,
        type: "email",
        validation: yup
          .string()
          .email("Invalid email format")
          .notRequired("Email is notRequired"),
      },
      {
        label: `Enter Cadre Member ${i + 1} Faculty ID No`,
        name: `cadreMember${i + 1}IDNo`,
        type: "text",
        validation: yup.string().notRequired("Roll No is notRequired"),
      },
      {
        label: `Select Cadre Member ${i + 1} Institute`,
        name: `cadreMember${i + 1}Institute`,
        type: "dropdown",
        options: {
          "": institutes,
        },
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        depend: `cadreMember${i + 1}Institute`,
        label: `Select Cadre Member ${i + 1} Department`,
        name: `cadreMember${i + 1}Department`,
        type: "dropdown",
        options: instituteDepartmentMapping,
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
    ],
  })),
  {
    label: "Travel Information",
    fields: [
      {
        label: "Type of Travel",
        name: "typeOfTravel",
        type: "dropdown",
        options: {
          "": [
            { label: "Local", value: "Local" },
            { label: "Domestic", value: "Domestic" },
            { label: "International", value: "International" },
          ],
        },
        validation: yup.string().notRequired("Type of Travel is not required"),
      },
      {
        label: "Enter Purpose of Travel",
        name: "purposeOfTravel",
        type: "dropdown",
        options: {
          "": [
            { label: "Academic", value: "Academic" },
            { label: "Conference", value: "Conference" },
            { label: "Workshop", value: "Workshop" },
            { label: "Research", value: "Research" },
            { label: "Other", value: "Other" },
          ],
        },
        validation: yup
          .string()
          .notRequired("Purpose of Travel is notRequired"),
      },
      {
        parent: { name: "purposeOfTravel", values: ["Other"] },
        label: "Enter Purpose of Travel (Other)",
        name: "purposeOfTravelOther",
        type: "text",
        validation: yup.string().when("purposeOfTravel", {
          is: "Other",
          then: (schema) =>
            schema.notRequired("Purpose of Travel (Other) is notRequired"),
        }),
      },
      {
        label: "Select Mode of Travel",
        name: "modeOfTravel",
        type: "dropdown",
        options: {
          "": [
            { label: "Air", value: "air" },
            { label: "Train", value: "train" },
            { label: "Bus", value: "bus" },
            { label: "Car", value: "car" },
            { label: "Other", value: "Other" },
          ],
        },
        validation: yup.string().notRequired("Mode of Travel is notRequired"),
      },
      {
        parent: { name: "modeOfTravel", values: ["Other"] },
        label: "Enter Mode of Travel (Other)",
        name: "modeOfTravelOther",
        type: "text",
        validation: yup.string().when("modeOfTravel", {
          is: "Other",
          then: (schema) =>
            schema.notRequired("Mode of Travel (Other) is notRequired"),
        }),
      },
      {
        label: "Upload Proof of Travel",
        name: "proofOfTravel",
        type: "file",
        validation: yup.mixed().notRequired("Proof of Travel is notRequired"),
        // .test("fileType", "Only PDF files are allowed", (value) => {
        //   return value && value.type === "application/pdf";
        // }),
      },
      {
        label: "Travel Start Date",
        name: "travelStartDate",
        type: "date",
        validation: yup
          .date()
          .notRequired("Start date is required")
          .test(
            "is-valid-start-date",
            "Start date cannot be later than end date",
            function (value) {
              const { travelEndDate } = this.parent;
              if (
                travelEndDate &&
                value &&
                new Date(value) > new Date(travelEndDate)
              ) {
                return false;
              }
              return true;
            }
          ),
      },
      {
        label: "Travel End Date",
        name: "travelEndDate",
        type: "date",
        validation: yup
          .date()
          .notRequired("End date is required")
          .test(
            "is-valid-end-date",
            "End date cannot be earlier than start date",
            function (value) {
              const { travelStartDate } = this.parent;
              if (
                travelStartDate &&
                value &&
                new Date(value) < new Date(travelStartDate)
              ) {
                return false;
              }
              return true;
            }
          ),
      },
    ],
  },
  {
    label: "Accommodation Details",
    fields: [
      {
        label: "Accommodation Opted?",
        name: "accommodationOpted",
        type: "checkbox",
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Select Type of Accommodation",
        name: "typeOfAccommodation",
        type: "dropdown",
        options: {
          "": [
            { label: "Hotel", value: "hotel" },
            { label: "Guest House", value: "guest_house" },
            { label: "Hostel", value: "hostel" },
            {
              label: "Own Arrangement (e.g., relative’s home)",
              value: "private",
            },
          ],
        },
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Type of Accommodation is notRequired"),
        }),
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Enter Duration of Stay (In Days)",
        name: "durationOfStay",
        type: "number",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Duration of Stay is notRequired"),
        }),
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Enter Accommodation Address",
        name: "accommodationAddress",
        type: "textarea",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Accommodation Address is notRequired"),
        }),
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Upload Proof of Accommodation",
        name: "proofOfAccommodation",
        type: "file",
        validation: yup.mixed().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Proof of Accommodation is notRequired"),
          // .test("fileType", "Only PDF files are allowed", (value) => {
          //   return value && value.type === "application/pdf";
          // }),
        }),
      },
    ],
  },
  {
    label: "Event/Conference Information",
    fields: [
      {
        label: "Enter Event Name",
        name: "eventName",
        type: "text",
        validation: yup.string().notRequired("Event Name is notRequired"),
      },
      {
        label: "Enter Event Start Date",
        name: "eventStartDate",
        type: "date",
        validation: yup.date().notRequired("Event Start Date is notRequired"),
      },
      {
        label: "Enter Event End Date",
        name: "eventEndDate",
        type: "date",
        validation: yup.date().notRequired("Event End Date is notRequired"),
      },
      {
        label: "Enter Event Venue Address",
        name: "eventVenue",
        type: "textarea",
        validation: yup.string().notRequired("Event Venue is notRequired"),
      },
      {
        label: "Enter Event Website",
        name: "eventWebsite",
        type: "text",
        validation: yup.string().notRequired("Event Website is notRequired"),
      },
      {
        label: "Upload Proof of Attendance",
        name: "proofOfAttendance",
        type: "file",
        validation: yup
          .mixed()
          .notRequired("Proof of Attendance is notRequired"),
        // .test("fileType", "Only PDF files are allowed", (value) => {
        //   return value && value.type === "application/pdf";
        // }),
      },
    ],
  },
  {
    label: "Additional Information",
    fields: [
      {
        label: "Enter Any Other Requirements",
        name: "anyOtherRequirements",
        type: "text",
        validation: yup.string(),
      },
    ],
  },
  {
    label: "Expense Details",
    fields: [
      {
        label: "Total Expenses Incurred",
        name: "expenses",
        type: "miniForm",
        validation: yup.array(),
      },
    ],
  },
];

const studentFormFeilds = [
  {
    label: "Team Or Individual Application",
    fields: [
      {
        label: "You are applying as Individual or Team?",
        name: "applicationType",
        type: "dropdown",
        options: {
          "": [
            { label: "Individual", value: "Individual" },
            { label: "Team", value: "Team" },
          ],
        },
        validation: yup.string().notRequired("Application Type is notRequired"),
      },
      {
        parent: { name: "applicationType", values: ["Team"] },
        label: "How many members are there in your team?",
        name: "teamSize",
        type: "number",
        max: 10,
        min: 2,
        validation: yup
          .number()
          .notRequired("Team Size is notRequired")
          .min(2, "Team Size must be at least 2")
          .max(10, "Team Size must be at most 10"),
      },
    ],
  },
  {
    parent: { name: "applicationType", values: ["Individual"] },
    label: "Personal and Academic Information",
    fields: [
      {
        label: "Enter Full Name",
        name: "applicantFullName",
        type: "text",
        validation: yup.string().notRequired("Full Name is notRequired"),
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
        validation: yup
          .number()
          .notRequired("Age is notRequired")
          .min(0, "Age must be positive"),
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
        validation: yup
          .string()
          .notRequired("Contact Number is notRequired")
          .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "text",
        validation: yup.string().notRequired("Address is notRequired"),
      },
      {
        label: "Select Course",
        name: "applicantCourse",
        type: "dropdown",
        options: {
          "": [
            { label: "BTech", value: "BTech" },
            { label: "MTech", value: "MTech" },
            { label: "PHD", value: "PHD" },
          ],
        },
        validation: yup.string().notRequired("Course selection is notRequired"),
      },
      {
        depend: "applicantCourse",
        label: "Enter Year of Study",
        name: "applicantYearOfStudy",
        type: "dropdown",
        options: {
          BTech: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
            { label: "TY", value: "TY" },
            { label: "LY", value: "LY" },
          ],
          MTech: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
          ],
          PHD: [],
          "": [],
        },
        validation: yup.string().when("applicantCourse", {
          is: "PHD",
          then: (schema) => schema.notnotRequired(),
          otherwise: (schema) =>
            schema.notRequired("Year of Study is notRequired"),
        }),
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
        validation: yup
          .string()
          .email("Invalid email format")
          .notRequired("Email is notRequired"),
      },
      {
        label: "Enter Roll No",
        name: "applicantRollNo",
        type: "text",
        validation: yup
          .string()
          .notRequired("Roll No is notRequired")
          .matches(/^\d{11}$/, "Roll No must be exactly 11 digits"),
      },
      {
        label: "Select Institute",
        name: "applicantInstitute",
        type: "dropdown",
        options: {
          "": institutes.filter((institute) => institute?.value === "KJSCE"),
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
        label: "Parental Consent?",
        name: "parentalConsent",
        type: "checkbox",
        validation: yup.boolean().isFalse("Parent's Consent is notRequired"),
      },
      {
        parent: { name: "parentalConsent", values: [true] },
        label: "Enter Father's Full Name",
        name: "fatherFullName",
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema.notRequired("Father's Full Name is notRequired"),
        }),
      },
      {
        parent: { name: "parentalConsent", values: [true] },
        label: "Enter Father's Contact",
        name: "fatherContact",
        type: "tel",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema
              .notRequired("Father's Contact is notRequired")
              .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
        }),
      },
      {
        parent: { name: "parentalConsent", values: [true] },
        label: "Enter Mother's Full Name",
        name: "motherFullName",
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema.notRequired("Mother's Full Name is notRequired"),
        }),
      },
      {
        parent: { name: "parentalConsent", values: [true] },
        label: "Enter Mother's Contact",
        name: "motherContact",
        type: "tel",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema
              .notRequired("Mother's Contact is notRequired")
              .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
        }),
      },
    ],
  },
  ...Array.from({ length: 10 }, (_, i) => ({
    parent: {
      name: "teamSize",
      values: Array.from({ length: 10 }, (_, j) => Math.min(j + i + 1, 10)),
    },
    label: `Team Member ${i + 1} Personal and Academic Information`,
    fields: [
      {
        label: `Enter Team Member ${i + 1} Full Name`,
        name: `teamMember${i + 1}FullName`,
        type: "text",
        validation: yup.string().notRequired("Full Name is notRequired"),
      },
      {
        label: `Enter Team Member ${i + 1} Age`,
        name: `teamMember${i + 1}Age`,
        type: "number",
        validation: yup
          .number()
          .notRequired("Age is notRequired")
          .min(0, "Age must be positive"),
      },
      {
        label: `Enter Team Member ${i + 1} Contact Number`,
        name: `teamMember${i + 1}Contact`,
        type: "tel",
        validation: yup
          .string()
          .notRequired("Contact Number is notRequired")
          .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
      },
      {
        label: `Enter Team Member ${i + 1} Address`,
        name: `teamMember${i + 1}Address`,
        type: "text",
        validation: yup.string().notRequired("Address is notRequired"),
      },
      {
        label: `Select Team Member ${i + 1} Course`,
        name: `teamMember${i + 1}Course`,
        type: "dropdown",
        options: {
          "": [
            { label: "BTech", value: "BTech" },
            { label: "MTech", value: "MTech" },
            { label: "PHD", value: "PHD" },
          ],
        },
        validation: yup.string().notRequired("Course selection is notRequired"),
      },
      {
        depend: `teamMember${i + 1}Course`,
        label: `Enter Team Member ${i + 1} Year of Study`,
        name: `teamMember${i + 1}YearOfStudy`,
        type: "dropdown",
        options: {
          BTech: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
            { label: "TY", value: "TY" },
            { label: "LY", value: "LY" },
          ],
          MTech: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
          ],
          PHD: [],
          "": [],
        },
        validation: yup.string().when(`teamMember${i + 1}Course`, {
          is: "PHD",
          then: (schema) => schema.notnotRequired(),
          otherwise: (schema) =>
            schema.notRequired("Year of Study is notRequired"),
        }),
      },
      {
        label: `Enter Team Member ${i + 1} Email`,
        name: `teamMember${i + 1}Email`,
        type: "email",
        validation: yup
          .string()
          .email("Invalid email format")
          .notRequired("Email is notRequired"),
      },
      {
        label: `Enter Team Member ${i + 1} Roll No`,
        name: `teamMember${i + 1}RollNo`,
        type: "text",
        validation: yup
          .string()
          .notRequired("Roll No is notRequired")
          .matches(/^\d{11}$/, "Roll No must be exactly 11 digits"),
      },
      {
        label: `Select Team Member ${i + 1} Institute`,
        name: `teamMember${i + 1}Institute`,
        type: "dropdown",
        options: {
          "": institutes.filter((institute) => institute?.value === "KJSCE"),
        },
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        depend: `teamMember${i + 1}Institute`,
        label: `Select Team Member ${i + 1} Department`,
        name: `teamMember${i + 1}Department`,
        type: "dropdown",
        options: instituteDepartmentMapping,
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        label: `Parental Consent?`,
        name: `parentalConsent${i + 1}`,
        type: "checkbox",
        validation: yup.boolean().isFalse("Parent's Consent is notRequired"),
      },
      {
        parent: { name: `parentalConsent${i + 1}`, values: [true] },
        label: `Enter Team Member ${i + 1} Father's Full Name`,
        name: `teamMember${i + 1}FatherFullName`,
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema.notRequired("Father's Full Name is notRequired"),
        }),
      },
      {
        parent: { name: `parentalConsent${i + 1}`, values: [true] },
        label: `Enter Team Member ${i + 1} Father's Contact`,
        name: `teamMember${i + 1}FatherContact`,
        type: "tel",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema
              .notRequired("Father's Contact is notRequired")
              .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
        }),
      },
      {
        parent: { name: `parentalConsent${i + 1}`, values: [true] },
        label: `Enter Team Member ${i + 1} Mother's Full Name`,
        name: `teamMember${i + 1}MotherFullName`,
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema.notRequired("Mother's Full Name is notRequired"),
        }),
      },
      {
        parent: { name: `parentalConsent${i + 1}`, values: [true] },
        label: `Enter Team Member ${i + 1} Mother's Contact`,
        name: `teamMember${i + 1}MotherContact`,
        type: "tel",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: (schema) =>
            schema
              .notRequired("Mother's Contact is notRequired")
              .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
        }),
      },
    ],
  })),
  {
    label: "Travel Information",
    fields: [
      {
        label: "Enter Purpose of Travel",
        name: "purposeOfTravel",
        type: "dropdown",
        options: {
          "": [
            { label: "Academic", value: "Academic" },
            { label: "Personal", value: "Personal" },
            { label: "Research", value: "Research" },
            { label: "Other", value: "Other" },
          ],
        },
        validation: yup
          .string()
          .notRequired("Purpose of Travel is notRequired"),
      },
      {
        parent: { name: "purposeOfTravel", values: ["Other"] },
        label: "Enter Purpose of Travel (Other)",
        name: "purposeOfTravelOther",
        type: "text",
        validation: yup.string().when("purposeOfTravel", {
          is: "Other",
          then: (schema) =>
            schema.notRequired("Purpose of Travel (Other) is notRequired"),
        }),
      },
      {
        label: "Select Mode of Travel",
        name: "modeOfTravel",
        type: "dropdown",
        options: {
          "": [
            { label: "Air", value: "air" },
            { label: "Train", value: "train" },
            { label: "Bus", value: "bus" },
            { label: "Car", value: "car" },
            { label: "Other", value: "Other" },
          ],
        },
        validation: yup.string().notRequired("Mode of Travel is notRequired"),
      },
      {
        parent: { name: "modeOfTravel", values: ["Other"] },
        label: "Enter Mode of Travel (Other)",
        name: "modeOfTravelOther",
        type: "text",
        validation: yup.string().when("modeOfTravel", {
          is: "Other",
          then: (schema) =>
            schema.notRequired("Mode of Travel (Other) is notRequired"),
        }),
      },
      {
        label: "Upload Proof of Travel",
        name: "proofOfTravel",
        type: "file",
        validation: yup.mixed().notRequired("Proof of Travel is notRequired"),
      },
      {
        label: "Travel Start Date",
        name: "travelStartDate",
        type: "date",
        validation: yup
          .date()
          .notRequired("Start date is required")
          .test(
            "is-valid-start-date",
            "Start date cannot be later than end date",
            function (value) {
              const { travelEndDate } = this.parent;
              if (
                travelEndDate &&
                value &&
                new Date(value) > new Date(travelEndDate)
              ) {
                return false;
              }
              return true;
            }
          ),
      },
      {
        label: "Travel End Date",
        name: "travelEndDate",
        type: "date",
        validation: yup
          .date()
          .notRequired("End date is required")
          .test(
            "is-valid-end-date",
            "End date cannot be earlier than start date",
            function (value) {
              const { travelStartDate } = this.parent;
              if (
                travelStartDate &&
                value &&
                new Date(value) < new Date(travelStartDate)
              ) {
                return false;
              }
              return true;
            }
          ),
      },
    ],
  },
  {
    label: "Accommodation Details",
    fields: [
      {
        label: "Accommodation Opted?",
        name: "accommodationOpted",
        type: "checkbox",
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Select Type of Accommodation",
        name: "typeOfAccommodation",
        type: "dropdown",
        options: {
          "": [
            { label: "Hotel", value: "hotel" },
            { label: "Guest House", value: "guest_house" },
            { label: "Hostel", value: "hostel" },
            {
              label: "Own Arrangement (e.g., relative’s home)",
              value: "private",
            },
          ],
        },
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Type of Accommodation is notRequired"),
        }),
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Enter Duration of Stay (In Days)",
        name: "durationOfStay",
        type: "number",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Duration of Stay is notRequired"),
        }),
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Enter Accommodation Address",
        name: "accommodationAddress",
        type: "textarea",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Accommodation Address is notRequired"),
        }),
      },
      {
        parent: { name: "accommodationOpted", values: [true] },
        label: "Upload Proof of Accommodation",
        name: "proofOfAccommodation",
        type: "file",
        validation: yup.mixed().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Proof of Accommodation is notRequired"),
          // .test("fileType", "Only PDF files are allowed", (value) => {
          //   return value && value.type === "application/pdf";
          // }),
        }),
      },
    ],
  },
  {
    label: "Event/Conference Information",
    fields: [
      {
        label: "Enter Event Name",
        name: "eventName",
        type: "text",
        validation: yup.string().notRequired("Event Name is notRequired"),
      },
      {
        label: "Enter Event Start Date",
        name: "eventStartDate",
        type: "date",
        validation: yup.date().notRequired("Event Start Date is notRequired"),
      },
      {
        label: "Enter Event End Date",
        name: "eventEndDate",
        type: "date",
        validation: yup.date().notRequired("Event End Date is notRequired"),
      },
      {
        label: "Enter Event Venue Address",
        name: "eventVenue",
        type: "textarea",
        validation: yup.string().notRequired("Event Venue is notRequired"),
      },
      {
        label: "Enter Event Website",
        name: "eventWebsite",
        type: "text",
        validation: yup.string().notRequired("Event Website is notRequired"),
      },
      {
        label: "Upload Proof of Attendance",
        name: "proofOfAttendance",
        type: "file",
        validation: yup
          .mixed()
          .notRequired("Proof of Attendance is notRequired"),
        // .test("fileType", "Only PDF files are allowed", (value) => {
        //   return value && value.type === "application/pdf";
        // }),
      },
    ],
  },
  {
    label: "Additional Information",
    fields: [
      {
        label: "Enter Any Other Requirements",
        name: "anyOtherRequirements",
        type: "text",
        validation: yup.string(),
      },
    ],
  },
  {
    label: "Expense Details",
    fields: [
      {
        label: "Total Expenses Incurred",
        name: "expenses",
        type: "miniForm",
        validation: yup.array(),
      },
    ],
  },
];

export { studentFormFeilds, facultyFormFeilds };
