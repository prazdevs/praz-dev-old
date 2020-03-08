import React from 'react';

const InfoBlock = ({ aboutHtml }) => (
  <div>
    <hr className="separator" />
    <div
      className="info-block"
      dangerouslySetInnerHTML={{ __html: aboutHtml }}
    />
    <hr className="separator" />
  </div>
);

export default InfoBlock;
