import React from 'react';

import InfoBlock from '../info-block/info-block.component';
import TechIcon from '../tech-icon/tech-icon.component';

const About = ({ about, stack }) => {
  return (
    <div className="about-container">
      <InfoBlock aboutHtml={about} />
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
          {stack.map((techs) => (
            <div className="techs">
              <h4 className="techs-name">{techs.name}</h4>
              <div className="techs-list">
                {techs.techs.map((tech) => (
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.name}
                    key={tech.name}
                  >
                    <TechIcon className="tech" name={tech.name} />
                  </a>
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
