import Img from 'gatsby-image';
import React, { useState } from 'react';

import Tag from '../tag/tag.component';

const Project = ({ title, tags, thumbnail, link, content, maintained }) => {
  const [hovered, setHovered] = useState(false);

  const maintenance = maintained ? (
    <div className="state maintained">
      <i className="icon icon-thumbs-up" />
      <span>maintained</span>
    </div>
  ) : (
    <div className="state discontinued">
      <i className="icon icon-thumbs-down" />
      <span>discontinued</span>
    </div>
  );

  return (
    <div
      className="project-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="presentation"
    >
      <div className="project-meta">
        <div className="project-thumbnail">
          <Img
            className={` ${hovered ? '' : 'grayscale'}`}
            fixed={thumbnail}
            alt=""
          />
        </div>
        <div className="project-data">
          <h3 className="project-title">{title}</h3>
          <div className="tags">
            {tags.map(tag => (
              <Tag key={tag} name={tag} hovered={hovered} />
            ))}
          </div>
          <div className="project-maintenance uppercase">{maintenance}</div>
        </div>
      </div>
      <div className="project-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <a
        href={link}
        className="github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="icon icon-github" />
        See on GitHub
      </a>
    </div>
  );
};

export default Project;
