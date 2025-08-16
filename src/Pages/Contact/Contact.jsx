import React from 'react';
import "./Contact.css";
import contact from '../../assets/contact.jpg';

function Contact() {
  return (
    <>
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-image-box">
          <img src={contact} alt="Contact" className="contact-image" />
        </div>
        <div className="contact-card">
          <h2 className="contact-heading">
            <i className="fas fa-headset"></i> Get in <span>Touch</span>
          </h2>
          <form action="https://formspree.io/f/xwpvjknp" method="POST" className="contact-form">
            <div className="form-group">
              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="field">
                <input type="text" name="email" placeholder="Email" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="message">
                <textarea
                  placeholder="Message"
                  id="message"
                  name="message"
                  required
                ></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit" className="contact-btn">
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
          <div className="contact-social">
            <h3>Connect with us</h3>
            <div className="social-icons">
              <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fas fa-envelope"></i></a>
              <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-whatsapp"></i></a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;