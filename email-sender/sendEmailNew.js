require('dotenv').config();

export default sendEmail

function sendEmail (subject, text) {
  const mailjet = require ('node-mailjet')
    .connect(process.env.MAILJET_KEY, process.env.MAILJET_SECRET)

  const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "applicant@myportfolio.com",
            "Name": "New Applicant"
          },
          "To": [
            {
              "Email": "bandicot160@gmail.com",
              "Name": "Albert"
            }
          ],
          "Subject": subject,
          "TextPart": text,
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })

  request
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })

}
