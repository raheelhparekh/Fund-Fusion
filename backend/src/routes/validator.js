import express from 'express';
import {applicationAction, expenseAction, getApplicantNames, getReportData} from '../controllers/validatorController.js'
import multer from 'multer';

const router = express.Router();
const upload = multer(); 

router.put("/statusAction", upload.none(), applicationAction)

router.put("/expenseAction", expenseAction)

router.get("/getApplicantNames", getApplicantNames)

router.get("/getReportData", getReportData)

export default router;