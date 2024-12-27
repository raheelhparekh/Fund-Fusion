import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadExpenses = (req, res, next) => {

  const expenseProofFields = Array.from({ length: 10 }, (_, index) => ({
    name: `expenses[${index}].expenseProof`,
    maxCount: 1,
  }));  

  const fields = [
    { name: 'proofOfTravel', maxCount: 1 },
    { name: 'proofOfAccommodation', maxCount: 1 },
    { name: 'proofOfAttendance', maxCount: 1 },
    ...expenseProofFields,
  ];

  upload.fields(fields)(req, res, next);
};


export default uploadExpenses;
