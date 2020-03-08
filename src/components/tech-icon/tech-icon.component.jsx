import React from 'react';
import { useState } from 'react';

export const TechIcon = ({ name }) => {
  const [colored, setColored] = useState(false);

  let iconClasses = `icon icon-${name.toLowerCase()}`;
  iconClasses += ` ${colored ? 'colored' : ''}`;

  return (
    <div
      className="tech-icon"
      onMouseEnter={() => setColored(true)}
      onMouseLeave={() => setColored(false)}
      role="presentation"
      title={name}
    >
      <i className={iconClasses}></i>
    </div>
  );
};
