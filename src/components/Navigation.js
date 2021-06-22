import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Navigation.css';




function Navigation() {
    return (
        <div className= "wraper">
           <div className="image-wrapper">
                <img 
                className="home-image"
                src="https://images-na.ssl-images-amazon.com/images/I/718y3eRyefL.jpg"
                alt=""
                />
           </div>
           <div className="link-wrapper">
                <NavLink to="/logout"> Logout</NavLink>

                <NavLink to="/event-list"> Event List</NavLink>

                <NavLink to="/event"> Create Event</NavLink>
            </div>
        </div>

    );
}

export default Navigation;