import React from 'react';
import '../styles/Social.scss'
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Social = () => {

   const socialData = [
      {
         platform: 'Instagram',
         icon: 'instagram.png',
         link: 'https://www.instagram.com/tainerasmussen/'
      },
      {
         platform: 'Github',
         icon: 'github-sign.png',
         link: 'https://github.com/taine-rasmussen'
      },
      {
         platform: 'Linkedin',
         icon: 'linkedin.png',
         link: 'https://www.linkedin.com/in/taine-rasmussen-a66a86184/'
      },
   ]

   const instagramIcon =  <BsInstagram className="social-icon"/>
   const githubIcon = <BsGithub className="social-icon"/>
   const linkedinIcon  = <BsLinkedin className="social-icon"/>            

   return(
      <>
      <div className='social-container'>
         {socialData.map((item) => {
            return (
               <a href={item.link} key={item.platform} target="_blank"> 
                  <div className='social-icon-container'>
                     { item.platform === 'Linkedin' ? linkedinIcon : null}
                     { item.platform === 'Github' ? githubIcon : null}
                     { item.platform === 'Instagram' ? instagramIcon : null}
                  </div>
               </a>
            )})}
      </div>
      </>
   )
}

export default Social