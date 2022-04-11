require('dotenv').config({ path: '../.env' });
const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded())
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendStatus(500)
})

const mailjet = require ('node-mailjet')
  .connect(process.env.MAILJET_KEY, process.env.MAILJET_SECRET)

app.post('/send', (req, res) => {
  const {
    body: {
      subject,
      text
    }
  } = req

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
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
