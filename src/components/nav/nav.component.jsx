import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const navOnScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navOnScroll);
    return () => {
      window.removeEventListener('scroll', navOnScroll);
    };
  }, []);

  const navLinks = [
    {
      id: 'about me',
      link: '/me',
    },
    {
      id: 'posts',
      link: '/blog',
    },
    {
      id: 'projects',
      link: '/projects',
    },
  ];

  return (
    <nav className={scrolled ? 'nav scroll' : 'nav'}>
      <div className="nav-container">
        <div className="brand">
          <Link to="/">
            <i className="icon-mononoke" />
            <div className="text">praz.dev</div>
          </Link>
        </div>
        <div className="links">
          {navLinks.map(link => (
            <Link key={link.id} to={link.link} activeClassName="active">
              {link.id}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
