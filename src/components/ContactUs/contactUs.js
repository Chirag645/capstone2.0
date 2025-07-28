import React from 'react';
import './contactUs.css';

function ContactUs() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">We’d love to hear from you. Fill out the form below.</p>

      <div className="contact-container">
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="Your email" required />
          </label>

          <label>
            Message
            <textarea placeholder="Your message" rows="5" required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> hello@donedesk.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Newton School of Technology, India</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;