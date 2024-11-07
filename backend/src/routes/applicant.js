import express from 'express';
import uploadFields from '../middleware/upload.js';
import { createApplication } from '../controllers/applicantControllers.js';

const router = express.Router();

router.post("/create-application",
  uploadFields,
  createApplication
);

export default router;
