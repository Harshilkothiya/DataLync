import React, { useEffect } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";


function Footer() {
  const location = useLocation();
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    // Reset previous reveals so animation replays when navigating between routes
    elements.forEach((el) => {
      el.classList.remove('is-revealed');
      el.style.transitionDelay = '0ms';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el, idx) => {
      const delayMs = Math.min(idx * 40, 200);
      el.style.transitionDelay = `${delayMs}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <>
      {/* Contact CTA above footer (separate from footer) */}
      <footer className="footer">
      <section className="contact-cta">
        <div className="cta-inner">
          <div className="cta-inner-title reveal-on-scroll">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-subtitle">Let's discuss how we can help you leverage AI and data science for growth</p>
          </div>
          <div className="cta-grid">
            <div className="card info-card reveal-on-scroll">
              <h3 className="card-title">Get In Touch</h3>
              <div className="info-row">
                <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div>
                  <div className="label">Email</div>
                  <div className="value">harshilkothiya5@gmail.com</div>
                </div>
              </div>
              <div className="info-row">
                <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                <div>
                  <div className="label">Phone</div>
                  <div className="value">+91 8469409852</div>
                </div>
              </div>
              <div className="info-row">
                <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                <div>
                  <div className="label">Location</div>
                  <div className="value">Surat, Gujarat</div>
                </div>
              </div>
            </div>

            <form className="card form-card reveal-on-scroll" action="https://formspree.io/f/xwpvjknp" method="POST">
              <h3 className="card-title">Send Message</h3>
              <div className="form-grid">
                <input className="input" type="text" name="name" placeholder="Your Name" required />
                <input className="input" type="email" name="email" placeholder="Your Email" required />
              </div>
              <input className="input" type="text" name="subject" placeholder="Subject" />
              <textarea className="textarea" name="message" placeholder="Your Message" rows={5} required />
              <button className="cta-submit" type="submit">
                <span>Send Message</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </section>
      
        <div className="footer-container">
          <div className="footer-brand reveal-on-scroll">
            <img src={logo} alt="DataAI Solutions" />
            <p className="tagline">AI/ML, data science and modern web development to unlock growth.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" aria-label="X/Twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            </div>

            <div className="badges">
              <div className="badge">
                <span className="star">★</span>
                <span>4.9</span>
                <span className="sep">|</span>
                <span>Clutch</span>
              </div>
              <div className="badge">
                <span className="star">★</span>
                <span>5.0</span>
                <span className="sep">|</span>
                <span>Google</span>
              </div>
            </div>
          </div>

          <div className="footer-col reveal-on-scroll">
            <h4>About</h4>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Why Us</Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Careers</Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact us</Link>
          </div>

          <div className="footer-col reveal-on-scroll">
            <h4>Services</h4>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Digital Product Engineering</Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Cloud & DevOps</Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Data Engineering</Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>AI/ML Engineering</Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Modern Web Development</Link>
          </div>

          <div className="footer-col reveal-on-scroll">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Ebooks</a>
            <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>Case Studies</Link>
          </div>
        </div>
        <div className="footer-bottom">Copyright © 2024 DataLync. All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
