import express from 'express';
import {applicationAction, validatorRoot} from '../controllers/validatorController.js'

const router = express.Router();

router.get("/root",validatorRoot);

router.put("/:applicationId/:action", applicationAction)

export default router;