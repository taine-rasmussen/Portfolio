import React from 'react';
import '../styles/About.scss'


const About = () => {

   return(
      <div className="about-container">
         <div className="about-top-container">
            <div className="about-info">
               Hello there 👋, I am 
               <br /><span className="info-name">Taine Rasmussen</span>
               <br /> I love experimenting with the web.
            </div>
            <div className="about-image-container">
               <img className="about-image" src='typing.gif' alt='people working'/>
            </div>
         </div>
      </div>




   )
}

export default About; 