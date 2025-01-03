import * as yup from "yup";

const institutes = [
  { label: "K J Somaiya Institute of Dharma Studies", value: "KJSIDS" },
  { label: "S K Somaiya College", value: "SKSC" },
  { label: "K J Somaiya College of Engineering", value: "KJSCE" },
  { label: "Somaiya Institute for Research and Consultancy", value: "SIRC" },
  { label: "K J Somaiya Institute of Management", value: "KJSIM" },
  { label: "Somaiya Sports Academy", value: "SSA" },
  { label: "K J Somaiya College of Education", value: "KJSCEd" },
  { label: "Department of Library and Information Science", value: "DLIS" },
  {
    label: "Maya Somaiya School of Music and Performing Arts",
    value: "MSSMPA",
  },
];

const instituteDepartmentMapping = {
  KJSIDS: [
    { label: "Academics", value: "Academics" },
    {
      label: "Bharatiya Sanskriti Peetham",
      value: "Bharatiya Sanskriti Peetham",
    },
    {
      label: "Center for Studies in Jainism",
      value: "Center for Studies in Jainism",
    },
    {
      label: "Department of Ancient Indian History Culture and Archaeology",
      value: "Department of Ancient Indian History Culture and Archaeology",
    },
    {
      label: "Centre For Buddhist Studies",
      value: "Centre For Buddhist Studies",
    },
  ],
  SKSC: [
    {
      label: "Information Technology & Computer Science",
      value: "Information Technology & Computer Science",
    },
    { label: "Mathematics & Statistics", value: "Mathematics & Statistics" },
    { label: "Mass Communication", value: "Mass Communication" },
    { label: "Life Science", value: "Life Science" },
    { label: "Business Studies", value: "Business Studies" },
    { label: "Polymer Science", value: "Polymer Science" },
    {
      label: "Commerce & Business Studies",
      value: "Commerce & Business Studies",
    },
    { label: "Accounting & Finance", value: "Accounting & Finance" },
    { label: "Commerce", value: "Commerce" },
    { label: "Economics", value: "Economics" },
    { label: "ENVIRONMENTAL SCIENCES", value: "ENVIRONMENTAL SCIENCES" },
    { label: "Language & Literature", value: "Language & Literature" },
    { label: "Computer Science & IT", value: "Computer Science & IT" },
    { label: "SciSER", value: "SciSER" },
    { label: "STATISTICS", value: "STATISTICS" },
    { label: "International Studies", value: "International Studies" },
    { label: "Banking & Finance", value: "Banking & Finance" },
    { label: "Psychology", value: "Psychology" },
    { label: "Financial Market", value: "Financial Market" },
    { label: "NEUTRACEUTICALS", value: "NEUTRACEUTICALS" },
    { label: "Faculty of Science - SVU", value: "Faculty of Science - SVU" },
  ],
  KJSCE: [
    { label: "Mechanical", value: "Mechanical" },
    { label: "Electronics", value: "Electronics" },
    { label: "CBE", value: "CBE" },
    {
      label: "Electronics & Telecommunication",
      value: "Electronics & Telecommunication",
    },
    { label: "Computer", value: "Computer" },
    { label: "Information Technology", value: "Information Technology" },
    { label: "Science & Humanities", value: "Science & Humanities" },
    { label: "Admin", value: "Admin" },
    { label: "Library", value: "Library" },
  ],
  SIRC: [
    {
      label: "Somaiya Institute for Research & Consultancy",
      value: "Somaiya Institute for Research & Consultancy",
    },
  ],
  KJSIM: [
    {
      label: "Marketing and International Business",
      value: "Marketing and International Business",
    },
    {
      label:
        "General Management (Entrepreneurship, Business Communication, Strategy)",
      value:
        "General Management (Entrepreneurship, Business Communication, Strategy)",
    },
    { label: "IT", value: "IT" },
    {
      label: "Data Science and Technology",
      value: "Data Science and Technology",
    },
    {
      label: "HUMAN RESOURCES MANAGEMENT",
      value: "HUMAN RESOURCES MANAGEMENT",
    },
    { label: "MBA-Sports Management", value: "MBA-Sports Management" },
    { label: "HCM", value: "HCM" },
    { label: "FINANCE AND LAW", value: "FINANCE AND LAW" },
    { label: "Business Analytics", value: "Business Analytics" },
    {
      label: "PR, Social Media & Data Mining",
      value: "PR, Social Media & Data Mining",
    },
    { label: "Economics", value: "Economics" },
    {
      label: "Operations and Supply Chain Management",
      value: "Operations and Supply Chain Management",
    },
    { label: "Community Medicine", value: "Community Medicine" },
    { label: "Accreditation", value: "Accreditation" },
    { label: "Accounts & Finance", value: "Accounts & Finance" },
    { label: "GENERAL ADMINISTRATION", value: "GENERAL ADMINISTRATION" },
    { label: "Human Resource", value: "Human Resource" },
  ],
  SSA: [{ label: "Sports", value: "Sports" }],
  KJSCEd: [{ label: "Education", value: "Education" }],
  DLIS: [
    {
      label: "Department of Library & Information Science",
      value: "Department of Library & Information Science",
    },
  ],
  MSSMPA: [
    {
      label: "Maya Somaiya School of Music & Performing Art",
      value: "Maya Somaiya School of Music & Performing Art",
    },
  ],
  "": [],
};

const facultyFormFeilds = [
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
      }
    ]
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
    parent: { name: "cadreSize", values: Array.from({ length: 10 }, (_, j) => Math.min(j + i + 1, 10))},
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
        parent: {name: "modeOfTravel", values: ["Other"]},
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
        parent: {name: "accommodationOpted" , values: [true]},
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
        parent: {name: "accommodationOpted", values: [true]},
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
        parent: {name: "accommodationOpted", values: [true]},
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
        parent: {name: "accommodationOpted", values: [true]},
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
