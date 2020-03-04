import { graphql } from 'gatsby';
import React from 'react';

import About from '../components/about/about.component';
import Project from '../components/project/project.component';
import SEO from '../components/seo';
import Layout from '../layout/layout';

export default ({ data }) => {
  const projects = data.posts.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    tags: node.frontmatter.tags,
    link: node.frontmatter.link,
    thumbnail: node.frontmatter.thumbnail.childImageSharp.fixed,
    content: node.html,
    maintained: node.frontmatter.maintained,
  }));

  const aboutHtml = data.about.html;

  return (
    <Layout>
      <SEO title="Projects" />
      <About aboutHtml={aboutHtml} />
      <div className="projects">
        {projects.map(project => (
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
    posts: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "projects" } } }
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
