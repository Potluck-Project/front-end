import '../assets/css/Event.css';
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import EventListItem from './EventListItem';

const EventList = () => {
  const [ events, setEvents ] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('api/event')
      .then(res => {
        console.log(res.data);
        setEvents(res.data)
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }, [])
  return (
    <div className='container'>
      <div className='event_list_div'>
        {events.map((event, key) => {
          return <EventListItem key={key} event={event} />;
        })}
      </div>
    </div>
  )
}

export default EventList;