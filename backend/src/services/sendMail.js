import nodeMailer from 'nodemailer';

export default async function sendMail(emailId, linkToApplication, toValidator, status) {

  //dev purpose
  if (!process.env.TravelPolicyEmail || !process.env.TravelPolicyEmailPass) {
    return
  }
    console.log(process.env.TravelPolicyEmail);
    console.log(process.env.TravelPolicyEmailPass);

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
            user: process.env.TravelPolicyEmail,
            pass: process.env.TravelPolicyEmailPass
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    let mailOptions;

    if (toValidator) {
        mailOptions = {
            from: process.env.TravelPolicyEmail,
            to: emailId,
            subject: 'You have a new travel policy application to review',
            html: `
                <p>You have a new travel policy application to review. Please click on the link below to review the application:</p>
                <a href=${linkToApplication}>Review Application</a>
                <p>Thank you.</p>
            `
        };
    } else {
        mailOptions = {
            from: process.env.TravelPolicyEmail,
            to: emailId,
            subject: 'Your travel policy application status',
            html: `
                <p>Your travel policy application has been ${status}. Please click on the link below to view the status of your application:</p>
                <a href=${linkToApplication}>View Application</a>
                <p>Thank you.</p>
            `
        };
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