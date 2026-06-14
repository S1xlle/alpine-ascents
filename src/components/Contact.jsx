import React from "react";
import "./Contact.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          Get in touch with the Global Mountaineering Network for any questions,
          support, or collaboration requests.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Global Mountaineering Network</h3>

          <p>
            <FaEnvelope className="icon" />
            Alpine Ascents Headquarters
          </p>

          <p>🏔 International Climbing Community</p>
          <p>🌍 Chamonix, France</p>

          <div className="social-links">

            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaWhatsapp />
              <div>
                <strong>WhatsApp</strong>
                <span>Quick Support</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaInstagram />
              <div>
                <strong>Instagram</strong>
                <span>Latest Expeditions</span>
              </div>
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaFacebookF />
              <div>
                <strong>Facebook</strong>
                <span>Community Updates</span>
              </div>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea rows="6" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;