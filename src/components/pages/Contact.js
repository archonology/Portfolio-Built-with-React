import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
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

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage(`
      Sorry, ${name}, 
      the email is missing something. 
      Please check it and try again, 
      thanks! 🪴
      `);
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    alert(`
    Thanks for your message, ${name}! 
    I'll be in touch soon. 🌿
    - Reed Meher
    `);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    // sendMail();
  };
  return (

    <div className="row d-flex justify-content-center">
      <div className="contact-card">
        <h2 className="page-title">Contact</h2>
        <p>Sample text. Reach out!</p>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <form className="form contact-form">

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
          <button type="button" className='link contact-btn' onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );

}

export default Contact;
