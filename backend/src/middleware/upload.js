import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadFields = upload.fields([
  { name: 'proofOfTravel', maxCount: 1 },
  { name: 'proofOfAccommodation', maxCount: 1 },
  { name: 'proofOfAttendance', maxCount: 1 },
]);

export default uploadFields;