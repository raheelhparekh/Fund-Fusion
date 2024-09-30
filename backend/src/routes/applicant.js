import express from 'express';
import {createApplication,applicantRoot} from '../controllers/applicantControllers.js'
const router = express.Router();

router.get("/root", applicantRoot);

router.post("/create-application", createApplication);

export default router;
