import React from 'react';

const EventListItem = (props) => {
  const { event } = props;
  return (
    <div className='event_list_item'>
      <h1>{event.name}</h1>
      <p>{event.details}</p>
    </div>
  )
}

export default EventListItem;