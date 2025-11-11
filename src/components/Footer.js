import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p>Built with React ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;