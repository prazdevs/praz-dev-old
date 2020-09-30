import { graphql } from 'gatsby';
import React from 'react';

import InfoBlock from '../components/info-block/InfoBlock';
import Project from '../components/project/Project';
import SEO from '../components/Seo';
import Layout from '../layout/Layout';

export default ({ data }) => {
  const maintainedProjects = data.maintainedProjects.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    tags: node.frontmatter.tags,
    link: node.frontmatter.link,
    thumbnail: node.frontmatter.thumbnail.childImageSharp.fixed,
    content: node.html,
    maintained: node.frontmatter.maintained,
  }));

  const discontinuedProjects = data.discontinuedProjects.edges.map(
    ({ node }) => ({
      id: node.id,
      title: node.frontmatter.title,
      tags: node.frontmatter.tags,
      link: node.frontmatter.link,
      thumbnail: node.frontmatter.thumbnail.childImageSharp.fixed,
      content: node.html,
      maintained: node.frontmatter.maintained,
    })
  );

  const aboutHtml = data.about.html;

  return (
    <Layout>
      <SEO title="Projects" />
      <InfoBlock aboutHtml={aboutHtml} />
      <div className="projects">
        {maintainedProjects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            tags={project.tags}
            link={project.link}
            thumbnail={project.thumbnail}
            content={project.content}
            maintained={project.maintained}
          />
        ))}
        {discontinuedProjects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            tags={project.tags}
            link={project.link}
            thumbnail={project.thumbnail}
            content={project.content}
            maintained={project.maintained}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    maintainedProjects: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "projects" }, maintained: { eq: true } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
            link
            maintained
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    discontinuedProjects: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "projects" }, maintained: { eq: false } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
            link
            maintained
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    about: markdownRemark(frontmatter: { category: { eq: "about-projects" } }) {
      html
    }
  }
`;
