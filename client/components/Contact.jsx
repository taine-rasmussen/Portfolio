import React from 'react';
import '../styles/Contact.scss'


// Components
import Separator from './Separator'
import Social from './Social'

const Contact = () => {

   return (
      <div className="contact" id='contact'>
         <Separator />
         <label className="section-title">Contact</label>
         <div className="contact-container">
            <div className="contact-left">
               <p>Want to get in touch? Contact me on any of these platforms</p>
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
