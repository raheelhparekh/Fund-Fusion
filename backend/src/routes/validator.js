import express from 'express';
import {applicationAction, getApplicantNames} from '../controllers/validatorController.js'
import multer from 'multer';

const router = express.Router();
const upload = multer(); 

router.put("/statusAction", upload.none(), applicationAction)

router.get("/getApplicantNames", getApplicantNames)

export default router;