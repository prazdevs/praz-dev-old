import { graphql } from 'gatsby';
import React from 'react';

import CardList from '../components/card-list/CardList';
import InfoBlock from '../components/info-block/InfoBlock';
import Intro from '../components/intro/Intro';
import SEO from '../components/Seo';
import Layout from '../layout/Layout';

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

  const photo = data.photo.childImageSharp.fixed;
  const aboutHtml = data.about.html;

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Intro photo={photo} />
        <InfoBlock aboutHtml={aboutHtml} />
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
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 100) {
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
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    about: markdownRemark(frontmatter: { category: { eq: "about" } }) {
      html
    }
  }
`;
