import React, { useEffect, useState } from 'react'
import '../assets/css/AddEvent.css'




const EditEventForm = (props) => {
  
    const [editEventForm, setEditEventForm] = useState({})


    useEffect(() => {
        setEditEventForm(props.details);
    }, [props])
 

    const submitHandler= (e)=>{
        e.preventDefault()
        // axiosWithAuth()
        // .put(`/${props.details.id}`, colorToEdit)
        // .then(res=>{console.log(res)})
        // .catch(err=>{console.log(err)})
     
       
    }
    const changeHandler= (e)=>{
        e.preventDefault()
        setEditEventForm({...editEventForm, [e.target.name]: e.target.value})
    }



    
    return (
        <div className='container'>
            <div className='list_div'>
                <h2>Please Edit Event</h2>
                <form className='form' onSubmit={submitHandler}>
                <label htmlFor="name" />Event Name
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="name"
                        // value={editEventForm.name}
                        onChange={changeHandler}
                    />
                    <label htmlFor="date" /> Date
                    <input
                        id="date"
                        type="text"
                        name="date"
                        placeholder="date"
                        // value={editEventForm.date}
                        onChange={changeHandler}
                    />
                    <label htmlFor='time' />Time
                    <input
                        id="time"
                        type="text"
                        name="time"
                        placeholder="time"
                        // value={editEventForm.time}
                        onChange={changeHandler}
                    />
                    <label htmlFor="state" />State
                    <input
                        id="state"
                        type="text"
                        name="state"
                        placeholder="state"
                        // value={editEventForm.state}
                        onChange={changeHandler}
                    />
                    <label htmlFor="city" />City
                    <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="city"
                        // value={editEventForm.city}
                        onChange={changeHandler}
                    />
                    <label htmlFor="zip" />Zip
                    <input
                        id="zip"
                        type="text"
                        name="zip"
                        placeholder="zip"
                        // value={editEventForm.zip}
                        onChange={changeHandler}
                    />
                    <label htmlFor="street" />Street
                    <input
                        id="street"
                        type="text"
                        name="street"
                        placeholder="street"
                        // value={editEventForm.street}
                        onChange={changeHandler}
                    />
                    <label htmlFor="organizer" />Organizer
                    <input
                        id="organizer"
                        type="number"
                        name="organizer"
                        placeholder="organizer"
                        // value={editEventForm.organizer}
                        onChange={changeHandler}
                    />
                    <button type='submit'>Submit changes</button>
                </form>
            </div>
        </div>
    )
}


export default EditEventForm