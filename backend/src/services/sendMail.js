import nodeMailer from 'nodemailer';

export default async function sendMail({ emailId, link, type, status, designation }) {
    if (!process.env.TravelPolicyEmail || !process.env.TravelPolicyEmailPass) {
        return;
    }

    console.log("parametrs", emailId, link, type, status, designation);

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
            user: process.env.TravelPolicyEmail,
            pass: process.env.TravelPolicyEmailPass,
        },
        tls: {
            rejectUnauthorized: true,
        },
    });

    let mailOptions;

    switch (type) {
        case 'validator':
            mailOptions = {
                from: process.env.TravelPolicyEmail,
                to: emailId,
                subject: 'You have a new travel policy application to review',
                html: `
          <p>You have a new travel policy application to review. Please click on the link below to review the application:</p>
          <a href=${link}>Review Application</a>
          <p>Thank you.</p>
        `,
            };
            break;
        case 'applicant':
            mailOptions = {
                from: process.env.TravelPolicyEmail,
                to: emailId,
                subject: `Your travel policy application status: ${status}`,
                html: `
          <p>Your travel policy application has been ${status} by ${designation}. Please click on the link below to view the status of your application:</p>
          <a href=${link}>View Application</a>
          <p>Thank you.</p>
        `,
            };
            break;
        case 'accounts':
            mailOptions = {
                from: process.env.TravelPolicyEmail,
                to: emailId,
                subject: 'Transfer money to the applicant',
                html: `
                <p>Please transfer the travel policy amount to the applicant's account. Click on the link below to view the application:</p>`
            }
            break;
        default:
            throw new Error('Invalid email type');
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return { status: 'error', message: 'Verification code not sent' };
    }
}