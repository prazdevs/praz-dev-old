import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-copyright">
      <span>© {new Date().getFullYear()} — PraZ</span>
      <div>
        <Link to="credits">Credits</Link>
        {`  •  `}
        <a
          href="https://praz.dev/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitemap
        </a>
      </div>
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
