import Img from 'gatsby-image';
import React from 'react';
import Typed from 'react-typed';

const Intro = ({ photo }) => {
  const strings = [
    'I am a passionate developer',
    'I am a Javascript enthusiast',
    'I am always learning',
    'I am constantly looking to improve',
  ];

  return (
    <div className="container intro">
      <Img className="photo" fixed={photo} alt="Sacha" />

      <div className="resume">
        <h2 className="title">Hi, I&apos;m Sacha</h2>
        <h4 className="subtitle">
          <Typed
            strings={strings}
            loop
            typeSpeed={40}
            backSpeed={20}
            backDelay={1000}
            smartBackspace
          />
        </h4>
      </div>
    </div>
  );
};

export default Intro;
