require('dotenv').config({ path: './.env' });
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

  return transporter;
};

// send mail with defined transport object
const createEmailOptions = (email, subject, text) => ({
  from: '"MyPortfolio" <applicant@myportfolio.com>', // sender address
  to: "bandicot160@gmail.com", // list of receivers
  subject: `[${email}] - ${subject}`, // Subject line
  text
})

const sendEmail = async (email, subject, text) => {
  try {
    let emailTransporter = await createTransporter();
    const emailOptions = createEmailOptions(email, subject, text)
    await emailTransporter.sendMail(emailOptions);
    return true
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
};

module.exports = sendEmail
