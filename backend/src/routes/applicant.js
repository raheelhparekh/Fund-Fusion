import express from 'express';
import uploadFields from '../middleware/upload.js';
import { createApplication, updateApplication } from '../controllers/applicantControllers.js';

const router = express.Router();

router.post("/create-application", 
  uploadFields,
  createApplication
);

router.put("/resubmit-application",
  uploadFields,
  updateApplication
);


export default router;
