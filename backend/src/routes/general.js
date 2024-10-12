import express from 'express';
import { getApplicationData } from '../controllers/generalControllers.js';

const router = express.Router();

router.get("/getApplicationData/:applicationId", getApplicationData);

export default router;