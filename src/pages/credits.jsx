import { graphql } from 'gatsby';
import React from 'react';

import InfoBlock from '../components/info-block/info-block.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

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
