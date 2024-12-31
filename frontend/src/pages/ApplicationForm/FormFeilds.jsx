import * as yup from "yup";
import { institutes, instituteDepartmentMapping } from "../../components/BaseData";

const facultyFormFeilds = [
  {
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
        parent: "purposeOfTravel",
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
        parent: "modeOfTravel",
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
          .required("Start date is required")
          .test(
            "is-valid-start-date",
            "Start date cannot be later than end date",
            function (value) {
              const { travelEndDate } = this.parent;
              if (travelEndDate && value && new Date(value) > new Date(travelEndDate)) {
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
          .required("End date is required")
          .test(
            "is-valid-end-date",
            "End date cannot be earlier than start date",
            function (value) {
              const { travelStartDate } = this.parent;
              if (travelStartDate && value && new Date(value) < new Date(travelStartDate)) {
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
        parent: "accommodationOpted",
        label: "Select Type of Accommodation",
        name: "typeOfAccommodation",
        type: "dropdown",
        options: {
          "": [
            { label: "Hotel", value: "hotel" },
            { label: "Guest House", value: "guest_house" },
            { label: "Hostel", value: "hostel" },
            { label: "Own Arrangement (e.g., relative’s home)", value: "private" },
          ],
        },
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Type of Accommodation is notRequired"),
        }),
      },
      {
        parent: "accommodationOpted",
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
        parent: "accommodationOpted",
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
        parent: "accommodationOpted",
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
        label: "Enter Event Date",
        name: "eventDate",
        type: "date",
        validation: yup.date().notRequired("Event Date is notRequired"),
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
        label: "Select Department",
        name: "applicantDepartment",
        type: "dropdown",
        options: {
          "": [
            { label: "COMPS", value: "COMPS" },
            { label: "MECH", value: "MECH" },
            { label: "IT", value: "IT" },
            { label: "AI & DS", value: "AI_DS" },
            { label: "CCE", value: "CCE" },
            { label: "CSBS", value: "CSBS" },
            { label: "EE (VLSI)", value: "EE_VLSI" },
            { label: "ECE", value: "ECE" },
            { label: "ETE", value: "ETE" },
            { label: "RAI", value: "RAI" },
          ],
        },
        validation: yup
          .string()
          .notRequired("Department selection is notRequired"),
      },
      {
        label: "Enter Primary Supervisor Full Name",
        name: "primarySupervisorFullName",
        type: "text",
        validation: yup
          .string()
          .notRequired("Primary Supervisor Full Name is notRequired"),
      },
      {
        label: "Enter Primary Supervisor Email",
        name: "primarySupervisorEmail",
        type: "email",
        validation: yup
          .string()
          .email("Invalid email format")
          .notRequired("Primary Supervisor Email is notRequired"),
      },
      {
        label: "Enter Primary Supervisor Contact",
        name: "primarySupervisorContact",
        type: "tel",
        validation: yup
          .string()
          .notRequired("Primary Supervisor Contact is notRequired")
          .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
      },
      {
        label: "Enter Primary Supervisor Department",
        name: "primarySupervisorDepartment",
        type: "dropdown",
        options: {
          "": [
            { label: "COMPS", value: "COMPS" },
            { label: "MECH", value: "MECH" },
            { label: "IT", value: "IT" },
            { label: "AI & DS", value: "AI_DS" },
            { label: "CCE", value: "CCE" },
            { label: "CSBS", value: "CSBS" },
            { label: "EE (VLSI)", value: "EE_VLSI" },
            { label: "ECE", value: "ECE" },
            { label: "ETE", value: "ETE" },
            { label: "RAI", value: "RAI" },
          ],
        },
        validation: yup
          .string()
          .notRequired("Primary Supervisor Department is notRequired"),
      },
      {
        label: "Do you have another Supervisor?",
        name: "anotherSupervisor",
        type: "checkbox",
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Full Name",
        name: "anotherSupervisorFullName",
        type: "text",
        validation: yup.string().when("anotherSupervisor", {
          is: true,
          then: (schema) =>
            schema.notRequired("Another Supervisor Full Name is notRequired"),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Email",
        name: "anotherSupervisorEmail",
        type: "email",
        validation: yup.string().when("anotherSupervisor", {
          is: true,
          then: (schema) =>
            schema
              .notRequired("Another Supervisor Email is notRequired")
              .email("Invalid email format"),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Contact",
        name: "anotherSupervisorContact",
        type: "tel",
        validation: yup.string().when("anotherSupervisor", {
          is: true,
          then: (schema) =>
            schema
              .notRequired("Another Supervisor Contact is notRequired")
              .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Department",
        name: "anotherSupervisorDepartment",
        type: "dropdown",
        options: {
          "": [
            { label: "COMPS", value: "COMPS" },
            { label: "MECH", value: "MECH" },
            { label: "IT", value: "IT" },
            { label: "AI & DS", value: "AI_DS" },
            { label: "CCE", value: "CCE" },
            { label: "CSBS", value: "CSBS" },
            { label: "EE (VLSI)", value: "EE_VLSI" },
            { label: "ECE", value: "ECE" },
            { label: "ETE", value: "ETE" },
            { label: "RAI", value: "RAI" },
          ],
        },
        validation: yup.string().when("anotherSupervisor", {
          is: true,
          then: (schema) =>
            schema.notRequired("Another Supervisor Department is notRequired"),
        }),
      },
    ],
  },
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
        parent: "purposeOfTravel",
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
        parent: "modeOfTravel",
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
        label: "Accommodation Opted?",
        name: "accommodationOpted",
        type: "checkbox",
      },
      {
        parent: "accommodationOpted",
        label: "Select Type of Accommodation",
        name: "typeOfAccommodation",
        type: "dropdown",
        options: {
          "": [
            { label: "Hotel", value: "hotel" },
            { label: "Guest House", value: "guest_house" },
            { label: "Hostel", value: "hostel" },
          ],
        },
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Type of Accommodation is notRequired"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Enter Duration of Stay",
        name: "durationOfStay",
        type: "text",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Duration of Stay is notRequired"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Enter Accommodation Address",
        name: "accommodationAddress",
        type: "text",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: (schema) =>
            schema.notRequired("Accommodation Address is notRequired"),
        }),
      },
      {
        parent: "accommodationOpted",
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
        label: "Enter Event Date",
        name: "eventDate",
        type: "date",
        validation: yup.date().notRequired("Event Date is notRequired"),
      },
      {
        label: "Enter Event Venue",
        name: "eventVenue",
        type: "text",
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
    label: "Parental Consent",
    fields: [
      {
        label: "Parental Consent?",
        name: "parentalConsent",
        type: "checkbox",
        validation: yup.boolean().isFalse("Parent's Consent is notRequired"),
      },
      {
        parent: "parentalConsent",
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
        parent: "parentalConsent",
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
        parent: "parentalConsent",
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
        parent: "parentalConsent",
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
