import React from 'react';

import InfoBlock from '../info-block/info-block.component';
import TechIcon from '../tech-icon/tech-icon.component';
import Timeline from '../timeline/timeline.component';

const About = ({ about, stack, timeline }) => {
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
          {stack.map((techs, ind) => (
            <div className="techs" key={ind}>
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
      <div className="about-education-timeline-container">
        <h3>Timeline</h3>
        <div>
          In thie following timeline, I try to keep track of impactful events
          that made me the developer I am today.
        </div>
        <Timeline timeline={timeline} />
      </div>

      <hr />
    </div>
  );
};

export default About;
