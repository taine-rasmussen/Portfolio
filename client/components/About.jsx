import React from 'react';
import '../styles/About.scss'

// Components
import Social from './Social'

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
               <img className="about-image" src='aboutImage.png' alt='people working'/>
            </div>
         </div>
         <div className="about-bottom">
            <Social />
         </div>
      </div>
   )
}

export default About; 