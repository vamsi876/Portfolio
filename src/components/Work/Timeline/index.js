import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'August 2023 - Present',
      title: 'Indiana State University',
      description: [
        'Developed, trained, and tested a fully functional chatbot for integration into the university website.',
        'Successfully completed numerous projects under the guidance of Professor McLeod Alister, contributing to department objectives.',
        'Enhanced communication and technical skills while working as a Graduate Assistant in the ECET department.',
      ],
      expanded: false,
    },
    {
      date: 'June 2022- July 2023',
      title: 'Cognizant Technology Solutions.',
      description: [
        'Developed and optimized ETL processes, enhancing data integration speed and accuracy by 30%.',
        'Implemented data management solutions, resulting in a 40% increase in efficiency and a 15% reduction in project delivery times.',
        'Utilized JavaScript and Python for various projects, improving system reliability and workflow efficiency.',
      ],
      expanded: false,
    },
    {
      date: 'December 2021- May 2022',
      title: 'Cognizant Technology Solutions.',
      description: [
        'Developed and optimized ETL processes, enhancing data integration speed and accuracy by 30%.',
        'Implemented data management solutions, resulting in a 40% increase in efficiency and a 15% reduction in project delivery times.',
        'Utilized JavaScript and Python for various projects, improving system reliability and workflow efficiency.',
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
