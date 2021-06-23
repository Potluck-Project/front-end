import '../assets/css/Event.css';
import React from 'react';

const event = {
  name: 'This is an Event Name',
  date: 'January 1, 2021',
  time: '7:00pm',
  state: 'AZ',
  city: 'Somewhere',
  zip: '12345',
  street_address: '123 Ave Ln',
  attendees: [
    'Jim',
    'Michael',
    'Pam',
    'Toby'
  ],
  items: [
    'Chips',
    'Queso',
    'Salsa',
    'Dr. Pepper'
  ]
}

const EventPage = (props) => {
  // const { event } = props;
  return (
    <div className='container'>
      <div className='event_wrapper'>
        <h1>{event.name}</h1>
        <div className='event_details'>
          <div className='div_details'>
            <h2>Date:</h2><h3>{event.date}<br/>{event.time}</h3>
            <h2>Location:</h2><h3>{event.street_address}<br/>{event.city}, {event.state}<br/>{event.zip}</h3>
          </div>
          <div className='div_list'>
          <h2>Attendees:</h2>
          {
            event.attendees.map(person => {
              return <h3>{person}</h3>
            })
          }
          </div>
          <div className='div_list'>
          <h2>Items:</h2>
          {
            event.items.map(item => {
              return <h3>{item}</h3>
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