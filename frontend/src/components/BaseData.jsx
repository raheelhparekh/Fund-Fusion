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

export { institutes, instituteDepartmentMapping };