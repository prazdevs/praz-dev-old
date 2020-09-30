import '../scss/main.scss';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
