import React from 'react';
import '../styles/Project.scss'

// components
import ProjectCard from './ProjectCard'
import Separator from './Separator'

const Projects = () => {

   const projectData = [
      {
         id: 1,
         title: 'Bean Brawl',
         about: 'Experience up to 4 player local multiplayer action, with gamepad (xbox & playstation) support. Bean Brawl is a 2d action fighting game with simple rock-paper-scissors-like mechanics. Each bean brawler can change their stance, affecting their movement. Gameplay rewards quick reaction times and fast, controlled player movement.',
         tags: ['Phaser 3'],
         github: 'https://github.com/taine-rasmussen/dbb-ii',
         image: 'beanbrawl.png'
      },
      {
         id: 2,
         title: 'Chat App',
         about: 'Add contacts and create conversations with this simple messaging clone. Built using Socket.io and experimenting using custom react Hooks and Contexts',
         tags: ['React.js', 'React-bootstrap', 'Socket.io'],
         github: 'https://github.com/taine-rasmussen/not-fb-messenger',
         image: 'chat-app.png',
      },
      {
         id: 3,
         title: 'Oogle',
         about: 'A google clone built using React, Tailwindcss and RapidAPI. Users can search the web in dark or light mode viewing results and images',
         tags: ['React.js', 'RapidAPI', 'Taildwindcss'],
         github: 'https://github.com/taine-rasmussen/not-google',
         image: 'oogle.png',
      }
   ]

   return(
       <div className='projects-container' id='project'>
          <Separator />
         <label className='section-title'>Projects</label>
         <div>
            {projectData.map((project) => {
               return <ProjectCard project={project} key={project.id}/>
            })}
         </div>

      </div>
   )
}

export default Projects;