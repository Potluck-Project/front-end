import '../assets/css/Event.css';
import React from 'react';

import EventListItem from './EventListItem';

const events = [
  {name: 'Event 1', details: 'Here are some details about event 1.'},
  {name: 'Event 2', details: 'Here are some details about event 2.'}, 
  {name: 'Event 3', details: 'Here are some details about event 3.'}, 
  {name: 'Event 4', details: 'Here are some details about event 4.'}
]

const EventList = () => {
  return (
    <div className='container'>
      <div className='inner_div'>
        {events.map((event, key) => {
          return <EventListItem key={key} event={event} />;
        })}
      </div>
    </div>
  )
}

export default EventList;