import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-copyright">
      <span className="copyright">© {new Date().getFullYear()} — PraZ</span>
      <span className="separator">•</span>
      <Link to="/credits">Credits</Link>
    </div>
    <div className="links">
      <a
        className="link link-github"
        href="https://github.com/prazdevs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repos"
      >
        <i className="icon-github" />
      </a>
      <a
        className="link link-twitter"
        href="https://twitter.com/PrazDevs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Profile"
      >
        <i className="icon-twitter" />
      </a>
      <a
        className="link link-linkedin"
        href="https://www.linkedin.com/in/sacha-bouillez-8aa657165/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <i className="icon-linkedin" />
      </a>
    </div>
  </footer>
);

export default Footer;
