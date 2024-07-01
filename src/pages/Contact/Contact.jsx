import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, please don't hesitate to reach out to us.</p>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label for="message">Message:</label>
        <textarea id="message" name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;