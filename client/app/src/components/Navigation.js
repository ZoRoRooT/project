import React, { useState } from "react";
import "./navbar.css";
import weblog from "../assets/websitelogo.png"

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        
        <div className="logo">
                <img src={weblog} alt="" />
        </div>

       
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>The JOURNEY</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons(!showMediaIcons)}>TEAM</NavLink>
            </li>
            <li>
              <NavLink to="/service" onClick={() => setShowMediaIcons(!showMediaIcons)}>STORE</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowMediaIcons(!showMediaIcons)}>CONTACT</NavLink>
            </li>
          </ul>
        </div>      
        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}> <p>=</p>
            </a>
          </div>
        </div>
        <div className="login">
        <li>
              <NavLink to="/contact" onClick={() => setShowMediaIcons(!showMediaIcons)}>LOGIN/SIGNUP</NavLink>
            </li>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;