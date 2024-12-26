import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import classes from "./Contact.module.css";
import be from "../Assets/be_logo.png";
import facebook from "../Assets/facebook_logo.png";
import instagram from "../Assets/instagram_logo.png";
import linkedin from "../Assets/linkedin_logo.png";
import mail from "../Assets/mail_logo.png";
import whatsapp from "../Assets/whatsapp_logo.png";
import x from "../Assets/x_logo.png";
import youtube from "../Assets/youtube_logo.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your EmailJS service ID, template ID, and user ID here
    emailjs
      .send(
        "service_fqfpl45", // Replace with your EmailJS service ID
        "template_fl95yyo", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "sjyH_6cTVbpsnkvxx" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Thank you for your message!");
        },
        (error) => {
          console.log("Failed to send email", error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className={classes.ContactPage}>
      <div className={classes.ContactPage_main}>
        <div className={classes.area}>
          <ul className={classes.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={classes.absolute}>
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
                <b>Send Message</b>
              </button>
            </form>
            <div className={classes.ContactInfo}>
              <p>Feel free to reach out through any of the platforms below:</p>
              <div className={classes.SocialMedia}>
                <a
                  href="https://wa.me/9392894805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={whatsapp} className={classes.contact_logos} />
                </a>
                <a
                  href="https://www.instagram.com/up2u_india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={instagram} className={classes.contact_logos} />
                </a>
                <a
                  href="uptouandhra@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={mail} className={classes.contact_logos} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={linkedin} className={classes.contact_logos} />
                </a>
                {/* </div>
              <div className={classes.SocialMedia}> */}
                <a
                  href="https://youtube.com/@up2uvideoproduction?si=s66XuisNgbafThMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={youtube} className={classes.contact_logos} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={be} className={classes.contact_logos} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={facebook} className={classes.contact_logos} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={x} className={classes.contact_logos} />
                </a>
              </div>
              <div className={classes.Map}>
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/place/15%C2%B050'07.6%22N+78%C2%B001'30.3%22E/@15.8354504,78.0224997,17z/data=!3m1!4b1!4m4!3m3!8m2!3d15.8354504!4d78.0250746?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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
      </div>
    </div>
  );
}

export default Contact;
