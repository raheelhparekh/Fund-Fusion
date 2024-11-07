import express from 'express';
import {applicationAction, getApplicantNames} from '../controllers/validatorController.js'

const router = express.Router();


router.put("/:applicationId/:action", applicationAction)

router.get("/getApplicantNames", getApplicantNames)

export default router;