import '../assets/css/Event.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

const EventPage = (props) => {
  const [ event, setEvent ] = useState({});
  const [ attendees, setAttendees ] = useState([]);
  const [ items, setItems ] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`api/event/${id}`)
      .then(res => {
        setEvent(res.data);
        setAttendees(res.data.attendees);
        setItems(res.data.items);
        console.log('res: ', res);
      })
      .catch(err => {
        console.log('err: ', err);
      })

  }, [])
  return (
    <div className='container'>
      <div className='event_wrapper'>
        <h1>{event.event_name}</h1>
        <div className='event_details'>
          <div className='div_details'>
            <h2>Date:</h2><h3>{event.event_date}<br/>{event.event_time}</h3>
            <h2>Location:</h2><h3>{event.event_street_address}<br/>{event.event_city}, {event.event_state}<br/>{event.event_zip}</h3>
          </div>
          <div className='div_list'>
          <h2>Attendees:</h2>
          {
            attendees.map(person => {
              return <h3>{person}</h3>
            })
          }
          </div>
          <div className='div_list'>
          <h2>Items:</h2>
          {
            items.map(item => {

              return <h3>{item.name}</h3>
            })
          }
          </div>
          <div className='div_buttons'>
          <button>Edit Event</button>
          &nbsp;
          <button>Delete Event</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage;