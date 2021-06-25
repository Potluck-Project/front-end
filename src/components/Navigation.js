import React from 'react'
import { NavLink } from "react-router-dom";
import '../assets/css/Navigation.css';

function Navigation() {
    const logout = () => {
        localStorage.removeItem('token');
    }
    return (
        <div className= "wrapper">
           <div className="image-wrapper">
                <img 
                className="home-image"
                src="https://images-na.ssl-images-amazon.com/images/I/718y3eRyefL.jpg"
                alt=""
                />
           </div>
           <div className="link-wrapper">
                <NavLink to="/event-list"> Event List</NavLink>

                <NavLink to="/add-event/"> Create Event</NavLink>

                <NavLink to="/logout" onClick={logout}> Logout</NavLink>
            </div>
        </div>

    );
}

export default Navigation;