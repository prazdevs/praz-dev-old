import React from 'react';

const Tag = ({ name, hovered, selected, clickable }) => {
  let iconClasses = `icon icon-${name.toLowerCase()}`;
  iconClasses += ` ${hovered || selected ? 'colored' : ''}`;

  let tagClasses = 'tag-container';
  tagClasses += ` ${selected ? 'selected' : ''}`;
  tagClasses += ` ${clickable ? 'clickable' : ''}`;

  return (
    <div className={tagClasses}>
      <i className={iconClasses} />
      <span>{name}</span>
    </div>
  );
};

export default Tag;
