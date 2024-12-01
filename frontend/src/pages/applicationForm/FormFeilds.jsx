import * as yup from 'yup';
const studentFormFeilds = [
  {
    label: "Personal and Academic Information",
    fields: [
      {
        label: "Enter Full Name",
        name: "applicantFullName",
        type: "text",
        validation: yup.string().required("Full Name is required"),
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
        validation: yup.number().required("Age is required").min(18, "Age must be at least 18"),
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
        validation: yup.string().required("Contact Number is required").matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "text",
        validation: yup.string().required("Address is required"),
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
        validation: yup.string().required("Course selection is required"),
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
        validation: yup.string().required("Year of Study is required"),
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
        validation: yup.string().email("Invalid email format").required("Email is required"),
      },
      {
        label: "Enter Roll No",
        name: "applicantRollNo",
        type: "text",
        validation: yup.string().required("Roll No is required").matches(/^\d{11}$/, "Roll No must be exactly 11 digits"),
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
        validation: yup.string().required("Department selection is required"),
      },
      {
        label: "Enter Primary Supervisor Full Name",
        name: "primarySupervisorFullName",
        type: "text",
        validation: yup.string().required("Primary Supervisor Full Name is required"),
      },
      {
        label: "Enter Primary Supervisor Email",
        name: "primarySupervisorEmail",
        type: "email",
        validation: yup.string().email("Invalid email format").required("Primary Supervisor Email is required"),
      },
      {
        label: "Enter Primary Supervisor Contact",
        name: "primarySupervisorContact",
        type: "tel",
        validation: yup.string().required("Primary Supervisor Contact is required").matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
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
        validation: yup.string().required("Primary Supervisor Department is required"),
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
          then: yup.string().required("Another Supervisor Full Name is required"),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Email",
        name: "anotherSupervisorEmail",
        type: "email",
        validation: yup.string().email("Invalid email format").when("anotherSupervisor", {
          is: true,
          then: yup.string().required("Another Supervisor Email is required"),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Contact",
        name: "anotherSupervisorContact",
        type: "tel",
        validation: yup.string().matches(/^[0-9]{10}$/, "Contact Number must be 10 digits").when("anotherSupervisor", {
          is: true,
          then: yup.string().required("Another Supervisor Contact is required"),
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
          then: yup.string().required("Another Supervisor Department is required"),
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
        validation: yup.string().required("Purpose of Travel is required"),
      },
      {
        parent: "purposeOfTravel",
        label: "Enter Purpose of Travel (Other)",
        name: "purposeOfTravelOther",
        type: "text",
        validation: yup.string().when("purposeOfTravel", {
          is: "Other",
          then: yup.string().required("Purpose of Travel (Other) is required"),
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
        validation: yup.string().required("Mode of Travel is required"),
      },
      {
        parent: "modeOfTravel",
        label: "Enter Mode of Travel (Other)",
        name: "modeOfTravelOther",
        type: "text",
        validation: yup.string().when("modeOfTravel", {
          is: "Other",
          then: yup.string().required("Mode of Travel (Other) is required"),
        }),
      },
      {
        label: "Upload Proof of Travel",
        name: "proofOfTravel",
        type: "file",
        validation: yup.mixed().required("Proof of Travel is required"),
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
          then: yup.string().required("Type of Accommodation is required"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Enter Duration of Stay",
        name: "durationOfStay",
        type: "text",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: yup.string().required("Duration of Stay is required"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Enter Accommodation Address",
        name: "accommodationAddress",
        type: "text",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: yup.string().required("Accommodation Address is required"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Upload Proof of Accommodation",
        name: "proofOfAccommodation",
        type: "file",
        validation: yup.mixed().when("accommodationOpted", {
          is: true,
          then: yup.mixed().required("Proof of Accommodation is required"),
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
        validation: yup.string().required("Event Name is required"),
      },
      {
        label: "Enter Event Date",
        name: "eventDate",
        type: "date",
        validation: yup.date().required("Event Date is required"),
      },
      {
        label: "Enter Event Venue",
        name: "eventVenue",
        type: "text",
        validation: yup.string().required("Event Venue is required"),
      },
      {
        label: "Enter Event Website",
        name: "eventWebsite",
        type: "text",
        validation: yup.string().url("Invalid URL format").required("Event Website is required"),
      },
      {
        label: "Upload Proof of Attendance",
        name: "proofOfAttendance",
        type: "file",
        validation: yup.mixed().required("Proof of Attendance is required"),
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
      },
      {
        parent: "parentalConsent",
        label: "Enter Father's Full Name",
        name: "fatherFullName",
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: yup.string().required("Father's Full Name is required"),
        }),
      },
      {
        parent: "parentalConsent",
        label: "Enter Father's Contact",
        name: "fatherContact",
        type: "tel",
        validation: yup.string().matches(/^[0-9]{10}$/, "Contact Number must be 10 digits").when("parentalConsent", {
          is: true,
          then: yup.string().required("Father's Contact is required"),
        }),
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Full Name",
        name: "motherFullName",
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: yup.string().required("Mother's Full Name is required"),
        }),
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Contact",
        name: "motherContact",
        type: "tel",
        validation: yup.string().matches(/^[0-9]{10}$/, "Contact Number must be 10 digits").when("parentalConsent", {
          is: true,
          then: yup.string().required("Mother's Contact is required"),
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
];

const facultyFormFeilds = [
  {
    label: "Personal and Academic Information",
    fields: [
      {
        label: "Enter Full Name",
        name: "applicantFullName",
        type: "text",
        validation: yup.string().required("Full Name is required"),
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
        validation: yup.number().required("Age is required").min(18, "Age must be at least 18"),
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
        validation: yup.string().required("Contact Number is required").matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "text",
        validation: yup.string().required("Address is required"),
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
        validation: yup.string().required("Course selection is required"),
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
        validation: yup.string().required("Year of Study is required"),
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
        validation: yup.string().email("Invalid email format").required("Email is required"),
      },
      {
        label: "Enter Roll No",
        name: "applicantRollNo",
        type: "text",
        validation: yup.string().required("Roll No is required"),
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
        validation: yup.string().required("Department selection is required"),
      },
      {
        label: "Do you have a Supervisor?",
        name: "primarySupervisor",
        type: "checkbox",
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Full Name",
        name: "primarySupervisorFullName",
        type: "text",
        validation: yup.string().when("primarySupervisor", {
          is: true,
          then: yup.string().required("Primary Supervisor Full Name is required"),
        }),
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Email",
        name: "primarySupervisorEmail",
        type: "email",
        validation: yup.string().email("Invalid email format").when("primarySupervisor", {
          is: true,
          then: yup.string().required("Primary Supervisor Email is required"),
        }),
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Contact",
        name: "primarySupervisorContact",
        type: "tel",
        validation: yup.string().matches(/^[0-9]{10}$/, "Contact Number must be 10 digits").when("primarySupervisor", {
          is: true,
          then: yup.string().required("Primary Supervisor Contact is required"),
        }),
      },
      {
        parent: "primarySupervisor",
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
        validation: yup.string().when("primarySupervisor", {
          is: true,
          then: yup.string().required("Primary Supervisor Department is required"),
        }),
      },
      {
        parent: "primarySupervisor",
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
          then: yup.string().required("Another Supervisor Full Name is required"),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Email",
        name: "anotherSupervisorEmail",
        type: "email",
        validation: yup.string().email("Invalid email format").when("anotherSupervisor", {
          is: true,
          then: yup.string().required("Another Supervisor Email is required"),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Contact",
        name: "anotherSupervisorContact",
        type: "tel",
        validation: yup.string().matches(/^[0-9]{10}$/, "Contact Number must be 10 digits").when("anotherSupervisor", {
          is: true,
          then: yup.string().required("Another Supervisor Contact is required"),
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
          then: yup.string().required("Another Supervisor Department is required"),
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
        validation: yup.string().required("Purpose of Travel is required"),
      },
      {
        parent: "purposeOfTravel",
        label: "Enter Purpose of Travel (Other)",
        name: "purposeOfTravelOther",
        type: "text",
        validation: yup.string().when("purposeOfTravel", {
          is: "Other",
          then: yup.string().required("Purpose of Travel (Other) is required"),
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
        validation: yup.string().required("Mode of Travel is required"),
      },
      {
        parent: "modeOfTravel",
        label: "Enter Mode of Travel (Other)",
        name: "modeOfTravelOther",
        type: "text",
        validation: yup.string().when("modeOfTravel", {
          is: "Other",
          then: yup.string().required("Mode of Travel (Other) is required"),
        }),
      },
      {
        label: "Upload Proof of Travel",
        name: "proofOfTravel",
        type: "file",
        validation: yup.mixed().required("Proof of Travel is required"),
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
          then: yup.string().required("Type of Accommodation is required"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Enter Duration of Stay",
        name: "durationOfStay",
        type: "text",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: yup.string().required("Duration of Stay is required"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Enter Accommodation Address",
        name: "accommodationAddress",
        type: "text",
        validation: yup.string().when("accommodationOpted", {
          is: true,
          then: yup.string().required("Accommodation Address is required"),
        }),
      },
      {
        parent: "accommodationOpted",
        label: "Upload Proof of Accommodation",
        name: "proofOfAccommodation",
        type: "file",
        validation: yup.mixed().when("accommodationOpted", {
          is: true,
          then: yup.mixed().required("Proof of Accommodation is required"),
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
        validation: yup.string().required("Event Name is required"),
      },
      {
        label: "Enter Event Date",
        name: "eventDate",
        type: "date",
        validation: yup.date().required("Event Date is required"),
      },
      {
        label: "Enter Event Venue",
        name: "eventVenue",
        type: "text",
        validation: yup.string().required("Event Venue is required"),
      },
      {
        label: "Enter Event Website",
        name: "eventWebsite",
        type: "text",
        validation: yup.string().url("Invalid URL format").required("Event Website is required"),
      },
      {
        label: "Upload Proof of Attendance",
        name: "proofOfAttendance",
        type: "file",
        validation: yup.mixed().required("Proof of Attendance is required"),
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
      },
      {
        parent: "parentalConsent",
        label: "Enter Father's Full Name",
        name: "fatherFullName",
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: yup.string().required("Father's Full Name is required"),
        }),
      },
      {
        parent: "parentalConsent",
        label: "Enter Father's Contact",
        name: "fatherContact",
        type: "tel",
        validation: yup.string().matches(/^[0-9]{10}$/, "Contact Number must be 10 digits").when("parentalConsent", {
          is: true,
          then: yup.string().required("Father's Contact is required"),
        }),
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Full Name",
        name: "motherFullName",
        type: "text",
        validation: yup.string().when("parentalConsent", {
          is: true,
          then: yup.string().required("Mother's Full Name is required"),
        }),
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Contact",
        name: "motherContact",
        type: "tel",
        validation: yup.string().matches(/^[0-9]{10}$/, "Contact Number must be 10 digits").when("parentalConsent", {
          is: true,
          then: yup.string().required("Mother's Contact is required"),
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
];

export { studentFormFeilds, facultyFormFeilds };
