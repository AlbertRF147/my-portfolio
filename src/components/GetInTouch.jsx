import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ThankYou = props => (
  <div className='thank-you'>
    <div className='message'>
      Thank you, I'll be in touch shortly! 👌
    </div>
  </div>
)

const Form = props => {
  const { recaptchaRef } = props

  return (
    <form onSubmit={props.sendEmail} className='pure-form'>
      <input className='pure-input-1' onChange={e => props.setEmail(e.currentTarget.value)} type='email' id='email' name='email' placeholder='Email' required />
      <input className='pure-input-1' onChange={e => props.setSubject(e.currentTarget.value)} type='text' id='subject' name='subject' placeholder='Subject' required />
      <textarea className='pure-input-1' onChange={e => props.setText(e.currentTarget.value)} type='text' id='text' name='text' placeholder='Text' required />

      <button type='submit' className='pure-button pure-button-primary'>Submit</button>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey='6LeGWmkfAAAAAGy-M2d24dHqRXu6M6WqTr9fiWh-'
      />
    </form> 
  )
}

export default function GetInTouch (props) {
  const recaptchaRef = React.createRef()
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    const recaptchaValue = recaptchaRef.current.getValue()
    if (recaptchaValue) {
      fetch(`http://localhost:3000/send`, {
        method: 'POST',
        body: JSON.stringify({ email, subject, text }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          setSent(true)
        })
    }
  }

  return (
    <div className='get-in-touch'>
      { 
        sent
          ? <ThankYou />
        : (
          <>
            <h2 className='header'>Drop me a line 🙋</h2>
            <Form
                setEmail={setEmail}
                setSubject={setSubject}
                setText={setText}
                sendEmail={sendEmail}
                recaptchaRef={recaptchaRef}
              />
          </>
        )
      }
    </div>
  )
}
