import * as Yup from 'yup';

const studentFormFeilds = [
  {
    label: "Personal and Academic Information",
    fields: [
      {
        label: "Enter Full Name",
        name: "applicantFullName",
        type: "text",
        validation: Yup.string().required('Full Name is required'),
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
        validation: Yup.number().required('Age is required').positive().integer(),
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
        validation: Yup.string().required('Contact Number is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "text",
        validation: Yup.string().required('Address is required'),
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
        validation: Yup.string().required('Course selection is required'),
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
        validation: Yup.string().when('applicantCourse', {
          is: (val) => val && val.length > 0,
          then: Yup.string().required('Year of Study is required'),
        }),
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
        validation: Yup.string().email('Invalid email format').required('Email is required'),
      },
      {
        label: "Enter Roll No",
        name: "applicantRollNo",
        type: "text",
        validation: Yup.string().required('Roll No is required'),
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
        validation: Yup.string().required('Department selection is required'),
      },
      {
        label: "Enter Primary Supervisor Full Name",
        name: "primarySupervisorFullName",
        type: "text",
        validation: Yup.string().required('Primary Supervisor Full Name is required'),
      },
      {
        label: "Enter Primary Supervisor Email",
        name: "primarySupervisorEmail",
        type: "email",
        validation: Yup.string().email('Invalid email format').required('Primary Supervisor Email is required'),
      },
      {
        label: "Enter Primary Supervisor Contact",
        name: "primarySupervisorContact",
        type: "tel",
        validation: Yup.string().required('Primary Supervisor Contact is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
      },
      {
        label: "Enter Primary Supervisor Department",
        name: "primarySupervisorDepartment",
        type: "text",
        validation: Yup.string().required('Primary Supervisor Department is required'),
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
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().required('Another Supervisor Full Name is required'),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Email",
        name: "anotherSupervisorEmail",
        type: "email",
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().email('Invalid email format').required('Another Supervisor Email is required'),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Contact",
        name: "anotherSupervisorContact",
        type: "tel",
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().required('Another Supervisor Contact is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Department",
        name: "anotherSupervisorDepartment",
        type: "text",
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().required('Another Supervisor Department is required'),
        }),
      },
    ],
  },
  // Add validation to other sections similarly...
];

const facultyFormFeilds = [
  {
    label: "Personal and Academic Information",
    fields: [
      {
        label: "Enter Full Name",
        name: "applicantFullName",
        type: "text",
        validation: Yup.string().required('Full Name is required'),
      },
      {
        label: "Enter Age",
        name: "applicantAge",
        type: "number",
        validation: Yup.number().required('Age is required').positive().integer(),
      },
      {
        label: "Enter Contact Number",
        name: "applicantContact",
        type: "tel",
        validation: Yup.string().required('Contact Number is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
      },
      {
        label: "Enter Address",
        name: "applicantAddress",
        type: "text",
        validation: Yup.string().required('Address is required'),
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
        validation: Yup.string().required('Course selection is required'),
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
        validation: Yup.string().when('applicantCourse', {
          is: (val) => val && val.length > 0,
          then: Yup.string().required('Year of Study is required'),
        }),
      },
      {
        label: "Enter Email",
        name: "applicantEmail",
        type: "email",
        validation: Yup.string().email('Invalid email format').required('Email is required'),
      },
      {
        label: "Enter Roll No",
        name: "applicantRollNo",
        type: "text",
        validation: Yup.string().required('Roll No is required'),
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
        validation: Yup.string().required('Department selection is required'),
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
        validation: Yup.string().when('primarySupervisor', {
          is: true,
          then: Yup.string().required('Primary Supervisor Full Name is required'),
        }),
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Email",
        name: "primarySupervisorEmail",
        type: "email",
        validation: Yup.string().when('primarySupervisor', {
          is: true,
          then: Yup.string().email('Invalid email format').required('Primary Supervisor Email is required'),
        }),
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Contact",
        name: "primarySupervisorContact",
        type: "tel",
        validation: Yup.string().when('primarySupervisor', {
          is: true,
          then: Yup.string().required('Primary Supervisor Contact is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
        }),
      },
      {
        parent: "primarySupervisor",
        label: "Enter Primary Supervisor Department",
        name: "primarySupervisorDepartment",
        type: "text",
        validation: Yup.string().when('primarySupervisor', {
          is: true,
          then: Yup.string().required('Primary Supervisor Department is required'),
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
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().required('Another Supervisor Full Name is required'),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Email",
        name: "anotherSupervisorEmail",
        type: "email",
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().email('Invalid email format').required('Another Supervisor Email is required'),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Contact",
        name: "anotherSupervisorContact",
        type: "tel",
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().required('Another Supervisor Contact is required').matches(/^[0-9]{10}$/, 'Contact Number must be 10 digits'),
        }),
      },
      {
        parent: "anotherSupervisor",
        label: "Enter Another Supervisor Department",
        name: "anotherSupervisorDepartment",
        type: "text",
        validation: Yup.string().when('anotherSupervisor', {
          is: true,
          then: Yup.string().required('Another Supervisor Department is required'),
        }),
      },
    ],
  },
  // Add validation to other sections similarly...
];

export { studentFormFeilds, facultyFormFeilds };
