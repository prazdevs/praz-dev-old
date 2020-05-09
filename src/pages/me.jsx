import { graphql } from 'gatsby';
import React from 'react';

import About from '../components/about/about.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const about = data.about.html;

  const stack = [
    {
      name: 'Back-end',
      techs: [
        { name: 'NodeJS', link: 'https://nodejs.org/en/' },
        { name: 'Express', link: 'https://expressjs.com/' },
        { name: 'NestJS', link: 'https://nestjs.com/' },
        { name: 'Redis', link: 'https://redis.io/' },
        { name: 'MongoDB', link: 'https://www.mongodb.com/' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
      ],
    },
    {
      name: 'Front-end',
      techs: [
        { name: 'React', link: 'https://reactjs.org/' },
        { name: 'Redux', link: 'https://redux.js.org/' },
        { name: 'Gatsby', link: 'https://www.gatsbyjs.org/' },
        { name: 'Vue', link: 'https://vuejs.org/' },
        { name: 'Svelte', link: 'https://svelte.dev/' },
        { name: 'Sass', link: 'https://sass-lang.com/' },
      ],
    },
    {
      name: 'Other technologies',
      techs: [
        { name: 'GraphQL', link: 'https://graphql.org/' },
        { name: 'Apollo', link: 'https://www.apollographql.com/' },
        { name: 'Jest', link: 'https://jestjs.io/' },
        { name: 'ESLint', link: 'https://eslint.org/' },
        { name: 'Yarn', link: 'https://yarnpkg.com/' },
        { name: 'Reason', link: 'https://reasonml.github.io/' },
      ],
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
