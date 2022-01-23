import React from 'react';
import profilepic from "../images/brucc.png"


export default function About() {
  return (
    <section id="about">

    <div className="row">
       <div className="three columns">
        <img className="profile-pic" src={profilepic} alt="Luis Barbosa profile pic" />
       </div> 
       <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>BIO INFO here</p>
          <div className="row">
             <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                         <span>name here</span><br />
                         <span>Street name<br />
                               city, state, zip
                 </span><br />
                         <span>phone</span><br />
                   <span>email</span>
                     </p>
             </div>
             <div className="columns download">
                <p>
                   <a href='youtube.com' className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
             </div>
          </div>
       </div>
    </div>

 </section>
  )
}
