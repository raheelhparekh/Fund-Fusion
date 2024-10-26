import express from 'express';
import { dataRoot, getApplicationData, getFile } from '../controllers/generalControllers.js';

const router = express.Router();

router.get("/getApplicationData/:applicationId", getApplicationData);

router.get("/getFile/:applicationId/:fileName", getFile)

router.get("/dataRoot", dataRoot );

export default router;