import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function Contact() {
  // Create state variables for the fields in the form
  // also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, sets the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First check to see if the email is not valid or if the name is empty. If so, set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage(`
      Sorry, ${name}, 
      the email is missing something. 
      Please check it and try again, 
      thanks! 🪴
      `);
      //  exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then check to see if the message is not valid. If so, set an error message regarding the message.
    }

    setName('');
    setMessage('');
    setEmail('');
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vauvgr', 'template_favgkfg', form.current, '5oouP9wFVBIv7Jaue')
      .then((result) => {
        alert(`
        Thanks for your message, ${name}! 
        I'll be in touch soon. 🌿
        - Reed Meher
        `);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div>
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
      </script>
      <script type="text/javascript">
        (function() {
          emailjs.init("5oouP9wFVBIv7Jaue")
        })();
      </script>
      <div className="contact-card">
        <h2 className="page-title">Contact</h2>
        <hr></hr>
        <div className='col col-md-6'>
          <p className='m'>Have a web application you would like built? Interested in collaborating on a project?  Reach out! I would love to hear from you and answer any quesitons.</p>

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <form className="form contact-form" ref={form}>

            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
              className='input'
            />
            <br>
            </br>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="email"
              className='input'
            />
            <br>
            </br>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="textArea"
              placeholder="message"
              className='textarea'
            />
            <br>
            </br>
            <button type="button" className='link contact-btn' onClick={handleFormSubmit && sendEmail}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Contact;
