import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/auth.js';
import applicantRoute from './routes/applicant.js'
import validatorRoute from './routes/validator.js'
import generalRoute from './routes/general.js'
import { verifyApplicantToken, verifyToken, verifyValidatorToken } from './middleware/verifyJwt.js';


const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true              // Allows cookies to be sent
}));

app.use('/applicant', verifyApplicantToken ,applicantRoute);
app.use('/validator', verifyValidatorToken ,validatorRoute);
app.use('/general', verifyToken ,generalRoute);

app.use(router);

export default app;