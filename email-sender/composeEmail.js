const sendMail = require('./sendMail.js');

const composeEmail = async (email, subject, text) => {
  const options = {
    to: email,
    subject,
    text,
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Applicant' },
      { key: 'X-Application-Version', value: 'v1.0.0.2' },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

const main = async (email, subject, text) => {
  return composeEmail(email, subject, text)
    .then((messageId) => {
      console.log('Message sent successfully:', messageId)
      return true
    })
    .catch((err) => {
      console.error(err)
      return false
    })
}

module.exports = main
