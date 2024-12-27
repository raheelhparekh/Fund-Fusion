import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/auth.js';
import applicantRoute from './routes/applicant.js';
import validatorRoute from './routes/validator.js';
import generalRoute from './routes/general.js';
import { verifyApplicantToken, verifyToken, verifyValidatorToken } from './middleware/verifyJwt.js';

const app = express();

// Middleware setup
app.use(cookieParser()); 
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
app.use(cors({
    origin: true, 
    credentials: true  
}));

// Route-specific middleware and routes
app.use('/applicant', verifyApplicantToken, applicantRoute);
app.use('/validator', verifyValidatorToken, validatorRoute);
app.use('/general', verifyToken, generalRoute);

// Authentication routes
app.use(router);

export default app;