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
         title: 'Calculator',
         about: 'Is the convenience of your phone Calculator too much? Next time you need to triple check your own math just to make sure clone this repo, npm i & launch localhost3000',
         tags: ['React.js'],
         github: 'https://github.com/taine-rasmussen/Calc',
         image: 'calc.png',
      },
      {
         id: 3,
         title: 'Tic-Tac-Toe',
         about: 'A recreation of the classic Tic-Tac-Toe game',
         tags: ['React.js'],
         github: 'https://github.com/taine-rasmussen/Tic-Tac-Toe',
         image: 'tic-tac-toe.png',
      }
   ]

   return(
       <div className='projects-container'>
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