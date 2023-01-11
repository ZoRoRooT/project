import React from 'react'
import fimg from "../assets/ikercasillas.jpg"
import li from "../assets/linkedin.png"
import m from "../assets/medium.png"
import facebook from "../assets/facebook.png"
import twt from "../assets/twitter.png"
import nba from "../assets/nba.png"
import james from "../assets/james.jpg"
import tonikroos from "../assets/tonikroos.jpg"
import zidane from "../assets/zidane.jpg"
import christiano from "../assets/christiano.jpg"
import "./team.css"
function Team() {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src={fimg} alt="" />
          </div>
          <h2>ikercasillas</h2>
          <p>Leadership & Management</p>
          <div className="icon">

          <div><a href="/"> <img src={m} alt="" /></a></div>
          <div> <a href=""><img src={facebook} alt="" /></a></div>
          <div><a href=""><img src={li} alt="" /></a></div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={james} alt="" />
          </div>
          <h2>James</h2>
          <p>Products Developer</p>
          <div className="icon">

          <div><a href="/"> <img src={m} alt="" /></a></div>
          
          <div><a href=""><img src={li} alt="" /></a></div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={tonikroos} alt="" />
          </div>
          <h2>Tonikroos</h2>
          <p>Marketing Strategy</p>
          <div className="icon">

          <div><a href="/"> <img src={m} alt="" /></a></div>
          <div><a href="/"> <img src={twt} alt="" /></a></div>
         
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={zidane} alt="" />
          </div>
          <h2>Zidane</h2>
          <p>Product Designer</p>
          <div className="icon">

          <div><a href="/"> <img src={m} alt="" /></a></div>
          <div> <a href=""><img src={nba} alt="" /></a></div>
          <div><a href=""><img src={li} alt="" /></a></div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={christiano} alt="" />
          </div>
          <h2>Christiano</h2>
          <p>Financial operations</p>
          <div className="icon">

         
          <div> <a href=""><img src={facebook} alt="" /></a></div>
          <div><a href=""><img src={li} alt="" /></a></div>
          </div>
        </div>
        
        

      </div>
    </div>
  )
}

export default Team
