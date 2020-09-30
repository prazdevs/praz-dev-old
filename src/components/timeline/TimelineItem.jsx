import React from 'react';

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag">{data.tag}</span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
