import React from 'react';


// Components
import Separator from './Separator'
import Social from './Social'

const Contact = () => {

   return (
      <div className="contact">
         <Separator />
         <div className="contact-container">
            <div className="contact-left">
               <p>What to get in touch? Contact me on any of these platforms</p>
               <Social />
            </div>
            <div className="contact-right">
               <a download href='Taine-Rasmussen-CV.pdf'>
                  <i className="fi-rr-cloud-download download-icon"/>
                  Download resume
               </a>
            </div>
         </div>

      </div>
   )
}

export default Contact;
