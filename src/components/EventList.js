import '../assets/css/EventList.css';
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
    <div>
      <div className='list_img'></div>
      <section className='list_container'>
        <div className='list'>
          {events.map((event, key) => {
            return <EventListItem key={key} event={event} />;
          })}
        </div>
      </section>
    </div>
  )
}

export default EventList;