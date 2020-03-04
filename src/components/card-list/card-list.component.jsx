import React from 'react';

import Card from '../card/card.component';

const CardList = ({ posts, title }) => (
  <div className="card-list">
    {title ? (
      <h3 className="card-list-title">
        <i className="icon-bullet" />
        <span>{title}</span>
      </h3>
    ) : null}
    {posts.map(post => (
      <Card
        key={post.id}
        title={post.title}
        link={post.link}
        date={post.date}
        read={post.read}
        tags={post.tags ? post.tags : []}
        thumbnail={post.thumbnail}
      />
    ))}
  </div>
);

export default CardList;
