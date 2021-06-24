import '../assets/css/Event.css';
import React from 'react';

const EventListItem = (props) => {
  const { event } = props;

  const handleClick = () => {
    window.location.pathname = `event/${event.event_id}`
  }

  return (
    <div className='event_list_item' onClick={handleClick}>
      <h1>{event.event_name}</h1>
      <p>{event.event_date} at {event.event_time}<br/>{event.event_city}, {event.event_state}</p>
    </div>
  )
}

export default EventListItem;