import React from 'react';

import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const aboutHtml = data.about.html;

  return (
    <Layout>
      <SEO title="About Me" />
      <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    about: markdownRemark(frontmatter: { category: { eq: "about-me" } }) {
      html
    }
  }
`;
