import React, { useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login(props) {
  
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    username:"",
    password:""
  });
  
  var navigate =useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    fetch("http://localhost:5000/login",{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(user)
    }).then(res=>res.json())
    .then(data=>{
      if(data.message){
        alert("Invalid Credentials")
      }else {
        window.localStorage.setItem('token',data.token)
        props.dispatch({type:'LOGGEDIN',message:user.username})
        navigate("/store")
      }
    })


  }
   

 
  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" onChange={(e) => setUser({...user,username:e.target.value})} required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" onChange={(e) => setUser({...user,password:e.target.value})} required />
         
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <label>Create New Account</label>
        <NavLink to="/signup">{" "}Signup?</NavLink>

      </form>
    </div>
  );

  return ( 
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default connect(store=>store)(Login);