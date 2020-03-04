import { graphql } from 'gatsby';
import React, { useState } from 'react';

import About from '../components/about/about.component';
import CardList from '../components/card-list/card-list.component';
import SEO from '../components/seo';
import TagFilter from '../components/tag-filter/tag-filter.component';
import Layout from '../layout/layout';

export default ({ data }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const aboutHtml = data.about.html;

  const posts = data.posts.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    link: node.fields.slug,
    date: node.frontmatter.date,
    tags: node.frontmatter.tags,
    read: node.fields.readingTime.text,
    thumbnail: node.frontmatter.thumbnail.childImageSharp.fixed,
  }));

  const tags = data.tags.group;

  const filterTags = tags.map(tag => ({
    selected: selectedTags.includes(tag.fieldValue),
    ...tag,
  }));

  const filteredPosts = selectedTags.length
    ? posts.filter(post => selectedTags.every(tag => post.tags.includes(tag)))
    : posts;

  const handleTagClick = clickedTag => {
    if (selectedTags.includes(clickedTag)) {
      setSelectedTags(selectedTags.filter(tag => tag !== clickedTag));
    } else {
      setSelectedTags([clickedTag, ...selectedTags]);
    }
  };

  return (
    <Layout>
      <SEO title="Blog" />
      <About aboutHtml={aboutHtml} />
      <TagFilter tags={filterTags} handleTagClick={handleTagClick} />
      <CardList posts={filteredPosts} />
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
    tags: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
      }
    }
    about: markdownRemark(frontmatter: { category: { eq: "about-blog" } }) {
      html
    }
  }
`;
