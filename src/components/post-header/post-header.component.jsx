import Img from 'gatsby-image';
import React from 'react';

import Tag from '../tag/tag.component';

const PostHeader = ({ title, read, date, tags, thumbnail }) => {
  return (
    <div className="post-header">
      <h1 className="post-title">{title}</h1>
      <div className="tags">
        {tags.map(tag => (
          <Tag name={tag} key={tag} hovered />
        ))}
      </div>
      <div className="header-container">
        <div className="post-meta">
          <div className="meta-element">
            <i className="icon icon-calendar" />
            <span>{date}</span>
          </div>
          <div className="meta-element">
            <i className="icon icon-watch" />
            <span>{read}</span>
          </div>
        </div>
        <Img className="post-thumbnail" fluid={thumbnail} />
      </div>
    </div>
  );
};

export default PostHeader;
