import React from 'react';

import About from '../components/about/about.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const photo = data.photo.childImageSharp.fluid;

  const stack = [
    {
      name: 'Back-end',
      techs: ['NodeJS', 'Express', 'NestJS', 'MongoDB', 'Redis'],
    },
    {
      name: 'Front-end',
      techs: ['React', 'Redux', 'Gatsby', 'Vue', 'Sass'],
    },
    {
      name: 'Other technologies',
      techs: ['GraphQL', 'Jest'],
    },
  ];

  const contactLinks = [
    {
      id: 'LinkedIn',
      link: 'https://github.com/prazdevs',
      description: 'Reach to me on LinkedIn',
    },
    {
      id: 'Mail',
      link: 'mailto:sachabouillez@gmail.com',
      description: 'Send me an email!',
    },
    {
      id: 'GitHub',
      link: 'https://github.com/prazdevs',
      description: 'Follow my projects on GitHub!',
    },
  ];
  return (
    <Layout>
      <SEO title="About Me" />
      <About photo={photo} stack={stack} contactLinks={contactLinks} />
    </Layout>
  );
};

export const query = graphql`
  query {
    photo: file(relativePath: { eq: "photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
