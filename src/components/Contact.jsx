import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="contact-profile">
        <img
          src="https://yt3.googleusercontent.com/rXRlLWPFMc6wVRBsJrKWVraS4HLMmXppPp4LEgdVTapimMnmx0mj8PczPB--l32E_BfQzrDT=s160-c-k-c0x00ffffff-no-rj" // Replace with your image URL
          alt="Profile"
          className="profile-image"
        />
        <p className="contact-text">
          Have any queries or suggestions? Feel free to reach out at <strong>rupnarswapnil9@gmail.com</strong> or contact us directly at:
        </p>
        <div className="phone-list">
          <div>
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <span className="phone-text">+91 9527248245 (Main)</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <span className="phone-text">+91 9527584281 (May)</span>
          </div>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/swapnil-rupnar-a2a8b1304/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/swapnil-rupnar-a2a8b1304/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/Swapnil252383" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/swapnil-rupnar-a2a8b1304/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
