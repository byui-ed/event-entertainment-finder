import React from 'react';

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      {/* Add other event details as needed */}
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      {/* ... other details */}
    </div>
  );
}

export default EventCard;