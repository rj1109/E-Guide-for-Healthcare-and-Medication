import React from 'react';
import './index.css';
import { NavLink } from "react-router-dom";

const Navbar_temp = () =>{
    return(
        <>
        <div className='logo-sitename'>
            <img src = "./images/logoimg.png" alt="my_pic"/>
            <p><u>BeingHealthy</u></p>
        </div>
        <div className='rem-navbar'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Navbar_temp;