import React from 'react';

import TimelineItem from './TimelineItem';

const Timeline = ({ timeline }) =>
  timeline.length && (
    <div className="timeline-container">
      <div className="timeline-arrow-head" />
      {timeline.map((data, index) => (
        <TimelineItem data={data} key={index} />
      ))}
    </div>
  );

export default Timeline;
