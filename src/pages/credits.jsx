import React from 'react';

import About from '../components/about/about.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const aboutHtml = data.about.html;

  return (
    <Layout>
      <SEO title="Credits Page" />
      <About aboutHtml={aboutHtml} />
    </Layout>
  );
};

export const query = graphql`
  query {
    about: markdownRemark(frontmatter: { category: { eq: "about-credits" } }) {
      html
    }
  }
`;
