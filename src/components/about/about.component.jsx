import React from 'react';

const About = ({ aboutHtml }) => (
  <div>
    <hr className="separator" />
    <div
      className="about-container"
      dangerouslySetInnerHTML={{ __html: aboutHtml }}
    />
    <hr className="separator" />
  </div>
);

export default About;
