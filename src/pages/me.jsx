import React from 'react';

import About from '../components/about/about.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const about = data.about.html;

  const stack = [
    {
      name: 'Back-end',
      techs: ['NodeJS', 'Express', 'NestJS', 'Redis', 'MongoDB'],
    },
    {
      name: 'Front-end',
      techs: ['React', 'Redux', 'Gatsby', 'Vue', 'Sass'],
    },
    {
      name: 'Other technologies',
      techs: ['GraphQL', 'Jest', 'ESLint', 'Yarn'],
    },
  ];

  return (
    <Layout>
      <SEO title="About Me" />
      <About stack={stack} about={about} />
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
