import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://yt3.googleusercontent.com/rXRlLWPFMc6wVRBsJrKWVraS4HLMmXppPp4LEgdVTapimMnmx0mj8PczPB--l32E_BfQzrDT=s160-c-k-c0x00ffffff-no-rj" alt="CodeLearn Logo" className="logo-image" />
        <h1 className="logo-name">SR-Coder</h1>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" activeclassname="active-link">Home</NavLink></li>
        <li><NavLink to="/notes" activeclassname="active-link">Notes</NavLink></li>
        <li><NavLink to="/videos" activeclassname="active-link">Videos</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active-link">Contact Us</NavLink></li>
        {!isLoggedIn && <li><NavLink to="/login" activeclassname="active-link">Login</NavLink></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
