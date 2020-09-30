import { graphql } from 'gatsby';
import React from 'react';

import InfoBlock from '../components/info-block/InfoBlock';
import SEO from '../components/Seo';
import Layout from '../layout/Layout';

export default ({ data }) => {
  const aboutHtml = data.about.html;

  return (
    <Layout>
      <SEO title="Credits Page" />
      <InfoBlock aboutHtml={aboutHtml} />
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
