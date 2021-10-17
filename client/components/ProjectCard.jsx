import React from 'react';
import { AiFillGithub } from "react-icons/ai";


const ProjectCard = ({ project }) => {


   return(
     <div className="project-card-container">
        <div className="project-card-info">
           <label className="project-card-title">{project.title}</label>
           <div className="project-card-link-container">
               <a className="project-card-link" href={project.github}>
                  <div className="project-card-link-btn">
                     <AiFillGithub />
                  </div>
               </a>
           </div>
        </div>
         <img className="project-card-image" src={project.image} alt={project.title}/>
     </div>
   )
}

export default ProjectCard