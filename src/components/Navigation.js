import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import '../assets/css/Navigation.css';




function Navigation() {
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

                <NavLink to="/event"> Create Event</NavLink>

                <NavLink to="/logout"> Logout</NavLink>
            </div>
        </div>

    );
}

export default Navigation;