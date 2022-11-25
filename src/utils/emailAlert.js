export const contactAlertEmail = ({ name, email, message }) => ({
    subject: `You got a message from ${name}!`,
    body: (
      <div>
        <p>{message}</p>
        <br/>
        <a href='mailto:{email}'> Reach {name} at {email}.</a>
      </div>
    ),
  })