const studentFormFeilds = [
  {
    label: "Personal and Academic Information",
    fields: [
      {
        label: "Enter Full Name",
        name: "applicantFullName",
        type: "text",
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "text",
      },
      {
        label: "Select Course",
        name: "applicantCourse",
        type: "dropdown",
        options: {
          "": [
            { label: "BTECH", value: "BTECH" },
            { label: "MTECH", value: "MTECH" },
            { label: "PHD", value: "PHD" },
          ],
        },
      },
      {
        depend: "applicantCourse",
        label: "Enter Year of Study",
        name: "applicantYearOfStudy",
        type: "dropdown",
        options: {
          BTECH: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
            { label: "TY", value: "TY" },
            { label: "LY", value: "LY" },
          ],
          MTECH: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
          ],
          PHD: [],
          "": [],
        },
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
      },
      {
        label: "Enter Roll No",
        name: "applicantRollNo",
        type: "text",
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
          ],
        },
      },
      {
        label: "Enter Primary Supervisor Full Name",
        name: "primarySupervisorFullName",
        type: "text",
      },
      {
        label: "Enter Primary Supervisor Email",
        name: "primarySupervisorEmail",
        type: "email",
      },
      {
        label: "Enter Primary Supervisor Contact",
        name: "primarySupervisorContact",
        type: "tel",
      },
      {
        label: "Enter Primary Supervisor Department",
        name: "primarySupervisorDepartment",
        type: "text",
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
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Email",
        name: "anotherSupervisorEmail",
        type: "email",
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Contact",
        name: "anotherSupervisorContact",
        type: "tel",
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Department",
        name: "anotherSupervisorDepartment",
        type: "text",
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
      },
      {
        parent: "purposeOfTravel",
        label: "Enter Purpose of Travel (Other)",
        name: "purposeOfTravelOther",
        type: "text",
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
      },
      {
        parent: "modeOfTravel",
        label: "Enter Mode of Travel (Other)",
        name: "modeOfTravelOther",
        type: "text",
      },
      {
        label: "Upload Proof of Travel",
        name: "proofOfTravel",
        type: "file",
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
      },
      {
        parent: "accommodationOpted",
        label: "Enter Duration of Stay",
        name: "durationOfStay",
        type: "text",
      },
      {
        parent: "accommodationOpted",
        label: "Enter Accommodation Address",
        name: "accommodationAddress",
        type: "text",
      },
      {
        parent: "accommodationOpted",
        label: "Upload Proof of Accommodation",
        name: "proofOfAccommodation",
        type: "file",
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
      },
      {
        label: "Enter Event Date",
        name: "eventDate",
        type: "date",
      },
      {
        label: "Enter Event Venue",
        name: "eventVenue",
        type: "text",
      },
      {
        label: "Enter Event Website",
        name: "eventWebsite",
        type: "text",
      },
      {
        label: "Upload Proof of Attendance",
        name: "proofOfAttendance",
        type: "file",
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
      },
      {
        parent: "parentalConsent",
        label: "Enter Father's Contact",
        name: "fatherContact",
        type: "tel",
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Full Name",
        name: "motherFullName",
        type: "text",
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Contact",
        name: "motherContact",
        type: "tel",
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
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "text",
      },
      {
        label: "Select Course",
        name: "applicantCourse",
        type: "dropdown",
        options: {
          "": [
            { label: "BTECH", value: "BTECH" },
            { label: "MTECH", value: "MTECH" },
            { label: "PHD", value: "PHD" },
          ],
        },
      },
      {
        depend: "applicantCourse",
        label: "Enter Year of Study",
        name: "applicantYearOfStudy",
        type: "dropdown",
        options: {
          BTECH: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
            { label: "TY", value: "TY" },
            { label: "LY", value: "LY" },
          ],
          MTECH: [
            { label: "FY", value: "FY" },
            { label: "SY", value: "SY" },
          ],
          PHD: [],
          "": [],
        },
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
      },
      {
        label: "Enter Roll No",
        name: "applicantRollNo",
        type: "text",
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
          ],
        },
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
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Email",
        name: "primarySupervisorEmail",
        type: "email",
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Contact",
        name: "primarySupervisorContact",
        type: "tel",
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Department",
        name: "primarySupervisorDepartment",
        type: "text",
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
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Email",
        name: "anotherSupervisorEmail",
        type: "email",
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Contact",
        name: "anotherSupervisorContact",
        type: "tel",
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Department",
        name: "anotherSupervisorDepartment",
        type: "text",
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
      },
      {
        parent: "purposeOfTravel",
        label: "Enter Purpose of Travel (Other)",
        name: "purposeOfTravelOther",
        type: "text",
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
      },
      {
        parent: "modeOfTravel",
        label: "Enter Mode of Travel (Other)",
        name: "modeOfTravelOther",
        type: "text",
      },
      {
        label: "Upload Proof of Travel",
        name: "proofOfTravel",
        type: "file",
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
      },
      {
        parent: "accommodationOpted",
        label: "Enter Duration of Stay",
        name: "durationOfStay",
        type: "text",
      },
      {
        parent: "accommodationOpted",
        label: "Enter Accommodation Address",
        name: "accommodationAddress",
        type: "text",
      },
      {
        parent: "accommodationOpted",
        label: "Upload Proof of Accommodation",
        name: "proofOfAccommodation",
        type: "file",
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
      },
      {
        label: "Enter Event Date",
        name: "eventDate",
        type: "date",
      },
      {
        label: "Enter Event Venue",
        name: "eventVenue",
        type: "text",
      },
      {
        label: "Enter Event Website",
        name: "eventWebsite",
        type: "text",
      },
      {
        label: "Upload Proof of Attendance",
        name: "proofOfAttendance",
        type: "file",
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
      },
      {
        parent: "parentalConsent",
        label: "Enter Father's Contact",
        name: "fatherContact",
        type: "tel",
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Full Name",
        name: "motherFullName",
        type: "text",
      },
      {
        parent: "parentalConsent",
        label: "Enter Mother's Contact",
        name: "motherContact",
        type: "tel",
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
      },
    ],
  },
];

export { studentFormFeilds, facultyFormFeilds };
