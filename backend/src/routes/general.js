import express from 'express';
import { dataRoot, getApplicationData, getApplicationsByStatus, getFile } from '../controllers/generalControllers.js';

const router = express.Router();

router.get("/dataRoot", dataRoot );

router.get('/getApplications/:status', getApplicationsByStatus);

router.get("/getApplicationData/:applicationId", getApplicationData);

router.get("/getFile/:applicationId/:fileName", getFile)



export default router;