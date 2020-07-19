import { graphql } from 'gatsby';
import React from 'react';

import About from '../components/about/about.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const about = data.about.html;
  const stack = data.about.frontmatter.stack;
  const timeline = data.about.frontmatter.timeline;
  const text = data.about.frontmatter.text;

  return (
    <Layout>
      <SEO title="About Me" />
      <About stack={stack} about={about} timeline={timeline} text={text} />
    </Layout>
  );
};

export const query = graphql`
  query {
    about: markdownRemark(frontmatter: { category: { eq: "about-me" } }) {
      html
      frontmatter {
        text
        stack {
          name
          techs {
            name
            link
          }
        }
        timeline {
          text
          events {
            text
            tag
            date
          }
        }
      }
    }
  }
`;
