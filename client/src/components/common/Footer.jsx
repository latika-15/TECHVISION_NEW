import React from 'react';
import './Common.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>TechVision</h4>
          <p>Empowering students to achieve more.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: techvision@gmail.com</p>
          <p>Phone: +xxx xxx xxxx</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TechVision. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;