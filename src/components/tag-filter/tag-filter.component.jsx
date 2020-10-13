import React from 'react';

import Tag from '../tag/tag.component';

const TagFilter = ({ tags, handleTagClick }) => {
  const handleTagKeyPress = (e, tag) => {
    e.preventDefault();
    if (e.key === ' ') {
      handleTagClick(tag);
    }
  };

  return (
    <div className="tag-filter-container">
      <span>Only looking for specific content ?</span>
      <div className="tag-filter">
        {tags.map((tag) => (
          <a
            href="#"
            role="button"
            className="tag-button"
            key={tag.fieldValue}
            onKeyPress={(e) => handleTagKeyPress(e, tag.fieldValue)}
            onClick={() => handleTagClick(tag.fieldValue)}
          >
            <Tag name={tag.fieldValue} clickable selected={tag.selected} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
