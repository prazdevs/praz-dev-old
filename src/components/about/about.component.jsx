import Img from 'gatsby-image';
import React from 'react';

import { TechIcon } from '../tech-icon/tech-icon.component';

const About = ({ stack, photo, contactLinks }) => {
  return (
    <div className="about-container">
      <div className="about-me-container">
        <div className="about-me-photo">
          <Img className="photo" fluid={photo} />
        </div>
        <div className="about-me-text">
          I'm Sacha 'PraZ' Bouillez, a 24 year-old developer based in Lille, FR.
          I aim to share my love and passion for beautiful code and good
          practices. I always keep a positive and pragmatic mindset, leading me
          to remain curious and constantly learning.
        </div>
      </div>
      <hr />
      <div className="about-stack-container">
        <h3>Stack &amp; skills</h3>
        <div className="about-stack">
          I used to work with different technologies and languages such as Java
          &amp; C#. I eventually settled with JavaScript/Typescript and made my
          current stack revolve around its ecosystem. Having a single language
          allows me to switch from one project to the other, and from the back
          to the front easily.
        </div>
        <div className="stack">
          {stack.map(techs => (
            <div className="techs">
              <h4 className="techs-name">{techs.name}</h4>
              <div className="techs-list">
                {techs.techs.map(tech => (
                  <TechIcon className="tech" name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
