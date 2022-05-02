const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const sendEmail = require('./composeEmail')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
  origin: '*'
}))
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendStatus(500)
})

app.post('/send', async (req, res) => {
  const {
    body: {
      email,
      subject,
      text
    }
  } = req


  const emailRes = await sendEmail(email, subject, text)
  emailRes
    ? res.sendStatus(200)
    : res.sendStatus(400)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
