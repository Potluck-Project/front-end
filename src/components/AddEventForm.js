import React, { useState } from 'react'
import '../assets/css/AddEvent.css';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
    event_name: '',
    event_date: '', 
    event_time: '',
    event_city: '',
    event_state: '',
    event_street_address: '',
    event_zip: '',
    event_organizer: '2'
}

const AddEventForm = () => {

    const [newEvent, setNewEvent] = useState(initialValues);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(newEvent);
        axiosWithAuth()
            .post('api/event/', newEvent)
            .then(res => {
                window.location.pathname = `event/${res.data.event_id}`;
            })
            .catch(err => {
                console.log('err: ', err.response)
            })
     
       
    }
    const changeHandler= (e) => {
        // e.preventDefault()
        setNewEvent({...newEvent, [e.target.name]: e.target.value})
    }

    
    return (
        <div className='container'>
            <div className='list_div'>
                <h2>Please Add Event</h2>
                <form className='form' onSubmit={submitHandler}>
                <label htmlFor="name" />Event Name
                    <input
                        id="name"
                        type="text"
                        name="event_name"
                        placeholder="name"
                        value={newEvent.event_name}
                        onChange={changeHandler}
                    />
                    <label htmlFor="date" /> Date
                    <input
                        id="date"
                        type="text"
                        name="event_date"
                        placeholder="date"
                        value={newEvent.event_date}
                        onChange={changeHandler}
                    />
                    <label htmlFor='time' />Time
                    <input
                        id="time"
                        type="text"
                        name="event_time"
                        placeholder="time"
                        value={newEvent.event_time}
                        onChange={changeHandler}
                    />
                    <label htmlFor="state" />State
                    <input
                        id="state"
                        type="text"
                        name="event_state"
                        placeholder="state"
                        value={newEvent.event_state}
                        onChange={changeHandler}
                    />
                    <label htmlFor="city" />City
                    <input
                        id="city"
                        type="text"
                        name="event_city"
                        placeholder="city"
                        value={newEvent.event_city}
                        onChange={changeHandler}
                    />
                    <label htmlFor="zip" />Zip
                    <input
                        id="zip"
                        type="text"
                        name="event_zip"
                        placeholder="zip"
                        value={newEvent.event_zip}
                        onChange={changeHandler}
                    />
                    <label htmlFor="street" />Street
                    <input
                        id="street"
                        type="text"
                        name="event_street_address"
                        placeholder="street"
                        value={newEvent.event_street_address}
                        onChange={changeHandler}
                    />
                    {/* <label htmlFor="organizer" />Organizer
                    <input
                        id="organizer"
                        type="number"
                        name="organizer"
                        placeholder="organizer"
                        value={newEvent.organizer}
                        onChange={changeHandler}
                    /> */}
                    <button type='submit'>Submit changes</button>
                </form>
            </div>
        </div>
    )
}


export default AddEventForm