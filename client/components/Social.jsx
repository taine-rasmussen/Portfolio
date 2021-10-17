import React from 'react';
import '../styles/Social.scss'


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

   return(
      <div className='social-container'>
         {socialData.map((item) => {
            return (
               <a href={item.link}> 
                  <div className='social-icon-container'>
                     <img  className='social-icon' src={item.icon} alt='soical icon'/>
                  </div>
               </a>
            )})}
      </div>
   )
}

export default Social