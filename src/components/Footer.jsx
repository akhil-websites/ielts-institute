import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-section about">
          <h3>IELTS Institute</h3>
          <p>
            Guiding students worldwide to achieve their dream IELTS band score with expert mentorship, 
            AI-powered tools, and personalized learning.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Courses</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: info@ieltsinstitute.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Hyderabad, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IELTS Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
