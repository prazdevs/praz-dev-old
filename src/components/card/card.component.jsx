import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';

import Tag from '../tag/tag.component';

const Card = ({ title, thumbnail, date, read, tags, link }) => {
  const [hovered, setHovered] = useState(false);

  const formattedDate = new Date(date).toDateString();

  return (
    <div
      className="card-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="presentation"
    >
      <Link to={link}>
        <div className="card">
          <div className="image">
            <Img
              className={`card-thumbnail ${hovered ? '' : 'grayscale'}`}
              fixed={thumbnail}
              alt=""
            />
          </div>
          <div className="card-text">
            <h5 className="card-title">{title}</h5>
            <div className="tags">
              {tags.map(tag => (
                <Tag key={tag} name={tag} hovered={hovered} />
              ))}
            </div>
            <div className={`card-footer ${hovered ? 'hovered' : ''}`}>
              <div className="footer-element date">
                <i className="icon icon-calendar" />
                <span>{formattedDate}</span>
              </div>
              <div className="footer-element read">
                <i className="icon icon-watch" />
                <span>{read}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
