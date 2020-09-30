import { graphql } from 'gatsby';
import React from 'react';

import PostHeader from '../components/post-header/PostHeader';
import SEO from '../components/Seo';
import Layout from '../layout/Layout';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <PostHeader
          title={post.frontmatter.title}
          read={post.fields.readingTime.text}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          thumbnail={post.frontmatter.thumbnail.childImageSharp.fluid}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
