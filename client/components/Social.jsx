import React from 'react';
import '../styles/Social.scss'
import { BsInstagram as Instagram } from 'react-icons/Bs';
import { BsGithub as Github } from 'react-icons/Bs'
import { BsLinkedin as Linkedin } from 'react-icons/Bs'

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

   const instagramIcon =  <Instagram className="social-icon"/>
   const githubIcon = <Github className="social-icon"/>
   const linkedinIcon  = <Linkedin className="social-icon"/>            

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