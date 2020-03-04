import { graphql } from 'gatsby';
import React from 'react';

import About from '../components/about/about.component';
import CardList from '../components/card-list/card-list.component';
import Intro from '../components/intro/intro.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const posts = data.posts.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    link: node.fields.slug,
    date: node.frontmatter.date,
    tags: node.frontmatter.tags,
    read: node.fields.readingTime.text,
    thumbnail: node.frontmatter.thumbnail.childImageSharp.fixed,
  }));

  const photo = data.photo.childImageSharp.fluid;
  const aboutHtml = data.about.html;

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Intro photo={photo} />
        <About aboutHtml={aboutHtml} />
        <CardList posts={posts} title="Latest posts" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 157, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
    photo: file(relativePath: { eq: "photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150, maxHeight: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about: markdownRemark(frontmatter: { category: { eq: "about" } }) {
      html
    }
  }
`;
