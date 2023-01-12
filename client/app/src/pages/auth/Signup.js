import React, { useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import "./Login.css";
import "./Signup.css";

function Signup(props) {
  
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    name:"",
    username:"",
    password:""
  });
  
  var navigate =useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    fetch("http://localhost:5000/addusers",{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(user)
    }).then(res=>res.json())
    .then(data=>{
      if(data.message){
        alert("Username already Exist")
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
          <label>Name </label>
          <input type="text" name="uname" onChange={(e) => setUser({...user,name:e.target.value})} required />
          
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" onChange={(e) => setUser({...user,username:e.target.value})} required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" onChange={(e) => setUser({...user,password:e.target.value})} required />
         
        </div>
        <div className="button-container">
          <input type="submit" value="Create"/>
        </div>
        <label>Login To  Account</label>
        <NavLink to="/login">{" "}Login?</NavLink>

      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default connect(store=>store) (Signup);