import React from 'react';

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag">{data.tag}</span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        )}
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
