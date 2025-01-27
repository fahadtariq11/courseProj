import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p>SplitFusion brings you the latest trends in clothing and accessories.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
           
            <Link to="/shipping" className="footer-link">
              Shipping
            </Link>
            <Link to="/shipping" className="footer-link">
              Returns
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} SplitFusion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
