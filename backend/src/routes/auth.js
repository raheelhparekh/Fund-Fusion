import express from 'express';
import { applicantLogin, logout, validatorLogin } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/applicant-login', applicantLogin);
router.post('/validator-login', validatorLogin);

router.get('/logout', logout)

export default router;