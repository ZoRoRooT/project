import React, { useState } from "react";
import "./navbar.css";
import weblog from "../assets/websitelogo.png"

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = (props) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  console.log(props.name);  
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
              <NavLink to="/journey" onClick={() => setShowMediaIcons(!showMediaIcons)}>The JOURNEY</NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={() => setShowMediaIcons(!showMediaIcons)}>TEAM</NavLink>
            </li>
            <li>
              <NavLink to="/store" onClick={() => setShowMediaIcons(!showMediaIcons)}>STORE</NavLink>
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
              <NavLink to="/login" onClick={!window.localStorage.getItem('token')?() => setShowMediaIcons(!showMediaIcons): {} }>👤{props.name}</NavLink>
            </li>
        </div>
      </nav>

     
    </>
  );
};

export default connect(store=>store) (Navigation);