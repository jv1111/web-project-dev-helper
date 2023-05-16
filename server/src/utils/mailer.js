const nodemailer = require("nodemailer");

const sendEmail = (sender, receiver, subject, text, html) => {
    let mailOptions;
    console.log("rec");
    console.log(receiver);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    mailOptions = {
        from: sender,
        to: receiver,
        subject: subject,
        text: text
    }
    if (html) mailOptions.html = html;
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) reject(error)
            else resolve({
                success: true,
                message: info.response
            });
        });
    });
}

module.exports = sendEmail;