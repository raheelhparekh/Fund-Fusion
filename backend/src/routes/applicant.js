import express from 'express';
import uploadFields from '../middleware/upload.js';
import { createApplication, applicantRoot } from '../controllers/applicantControllers.js';

const router = express.Router();

router.get("/root", applicantRoot);

router.post("/create-application",
  uploadFields,
  createApplication
);

export default router;
