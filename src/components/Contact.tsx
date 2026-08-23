import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';

import contactGirl from '../assets/images/contact-girl.png';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      console.log({
        name,
        email,
        message,
      });

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">

          {/* ================= HEADING ================= */}

          <div className="contact-heading">
            <h1>Contact Me</h1>

            <p>
              Have a question, opportunity, or just want to connect?
              <br />
              <span>I'd love to hear from you.</span>
            </p>
          </div>

          {/* ================= CONTACT CONTENT ================= */}

          <div className="contact-content">

            {/* Girl */}
            <div className="contact-character">
              <img
                src={contactGirl}
                alt="Contact illustration"
              />
            </div>

            {/* Form */}
            <Box
              ref={form}
              component="form"
              noValidate
              autoComplete="off"
              className="contact-form"
              onSubmit={sendEmail}
            >

              <div className="form-flex">

                <TextField
                  required
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={
                    nameError ? 'Please enter your name' : ''
                  }
                />

                <TextField
                  required
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={
                    emailError
                      ? 'Please enter your email or phone number'
                      : ''
                  }
                />

              </div>

              <TextField
                required
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={7}
                className="body-form"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={
                  messageError ? 'Please enter the message' : ''
                }
              />

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                className="send-button"
              >
                Send Message
              </Button>

            </Box>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;