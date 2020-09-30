import React from 'react';

import Tag from '../tag/Tag';

const TagFilter = ({ tags, handleTagClick }) => {
  return (
    <div className="tag-filter-container">
      <span>Only looking for specific content ?</span>
      <div className="tag-filter">
        {tags.map(tag => (
          <div
            key={tag.fieldValue}
            onClick={() => handleTagClick(tag.fieldValue)}
            role="presentation"
          >
            <Tag name={tag.fieldValue} clickable selected={tag.selected} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
