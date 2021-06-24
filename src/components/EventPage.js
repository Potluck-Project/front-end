import '../assets/css/Event.css';
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

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
        console.log(res.data);
        setEvent(res.data);
        setAttendees(res.data.attendees);
        setItems(res.data.items);
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }, [])

  const toEdit = () => {
    window.location.pathname = `edit-event/${id}`;
  }

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`api/event/${id}`)
      .then(res => {
        window.location.pathname = `event-list/`;
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }
  return (
    <div className='container'>
      <div className='event_wrapper'>
        <h1>{event.event_name}</h1>
        <div className='event_details'>
          <div className='div_details'>
            <h3>Date:</h3><h4>{event.event_date}<br/>{event.event_time}</h4>
            <h4>Location:</h4><h4>{event.event_street_address}<br/>{event.event_city}, {event.event_state}<br/>{event.event_zip}</h4>
          </div>
          <div className='div_attendees'>
          <h2>Attendees:</h2>
          {
            attendees.map(person => {
              return <h3 key={person.attendees_id}>{person.username}</h3>
            })
          }
          </div>
          <div className='div_items'>
          <h2>Items:</h2>
          <ul>
          {
            items.map(item => {
              return <li key={item.event_item_id}>{item.quantity} - {item.item_name}</li>
            })
          }
          </ul>
          </div>
          <div className='div_buttons'>
          <button onClick={toEdit} >Edit Event</button>
          &nbsp;
          <button className='delete-button' onClick={handleDelete}>Delete Event</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage;