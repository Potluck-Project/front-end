import React, { useEffect, useState } from 'react'
import '../assets/css/AddEvent.css'




const AddEventForm = (props) => {

    const [addEvent, setAddEvent] = useState({})


    useEffect(() => {
        setAddEvent(props.details);
    }, [props])
 

    const submitHandler= (e)=>{
        e.preventDefault()
        // axiosWithAuth()
        // .put(`/${props.details.id}`, )
        // .then(res=>{console.log(res)})
        // .catch(err=>{console.log(err)})
     
       
    }
    const changeHandler= (e)=>{
        e.preventDefault()
        setAddEvent({...addEvent, [e.target.name]: e.target.value})
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
                        name="name"
                        placeholder="name"
                        // value={addEvent.name}
                        onChange={changeHandler}
                    />
                    <label htmlFor="date" /> Date
                    <input
                        id="date"
                        type="text"
                        name="date"
                        placeholder="date"
                        // value={addEvent.date}
                        onChange={changeHandler}
                    />
                    <label htmlFor='time' />Time
                    <input
                        id="time"
                        type="text"
                        name="time"
                        placeholder="time"
                        // value={addEvent.time}
                        onChange={changeHandler}
                    />
                    <label htmlFor="state" />State
                    <input
                        id="state"
                        type="text"
                        name="state"
                        placeholder="state"
                        // value={addEvent.state}
                        onChange={changeHandler}
                    />
                    <label htmlFor="city" />City
                    <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="city"
                        // value={addEvent.city}
                        onChange={changeHandler}
                    />
                    <label htmlFor="zip" />Zip
                    <input
                        id="zip"
                        type="text"
                        name="zip"
                        placeholder="zip"
                        // value={addEvent.zip}
                        onChange={changeHandler}
                    />
                    <label htmlFor="street" />Street
                    <input
                        id="street"
                        type="text"
                        name="street"
                        placeholder="street"
                        // value={addEvent.street}
                        onChange={changeHandler}
                    />
                    <label htmlFor="organizer" />Organizer
                    <input
                        id="organizer"
                        type="number"
                        name="organizer"
                        placeholder="organizer"
                        // value={addEvent.organizer}
                        onChange={changeHandler}
                    />
                    <button type='submit'>Submit changes</button>
                </form>
            </div>
        </div>
    )
}


export default AddEventForm