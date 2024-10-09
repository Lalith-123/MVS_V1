import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import classes from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your EmailJS service ID, template ID, and user ID here
    emailjs.send(
      'service_fqfpl45', // Replace with your EmailJS service ID
      'template_fl95yyo', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'sjyH_6cTVbpsnkvxx' // Replace with your EmailJS user ID
    )
    .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert('Thank you for your message!');
    }, (error) => {
        console.log('Failed to send email', error.text);
        alert('Oops! Something went wrong.');
    });
  };

  return (
    <div className={classes.ContactPage}>
      <h1 className={classes.ContactHeading}>Contact Me</h1>
      <div className={classes.ContactFormContainer}>
        <form onSubmit={handleSubmit} className={classes.ContactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={classes.InputField}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={classes.InputField}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={classes.TextArea}
            rows="5"
            required
          ></textarea>
          <button type="submit" className={classes.SubmitButton}>
            Send Message
          </button>
        </form>
        <div className={classes.ContactInfo}>
          <p>Feel free to reach out through any of the platforms below:</p>
          <div className={classes.SocialMedia}>
            <a href="tel:9347310299" target="_blank" rel="noopener noreferrer" className={classes.SocialLink}>Call me</a>
            <a href="https://wa.me/9347310299" target="_blank" rel="noopener noreferrer" className={classes.SocialLink}>WhatsApp</a>
            <a href="https://www.instagram.com/up2u_india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={classes.SocialLink}>Instagram</a>
          </div>
          <div className={classes.Map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.8980381941!2d144.9630580154741!3d-37.81421797975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1604996535219!5m2!1sen!2sin"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
