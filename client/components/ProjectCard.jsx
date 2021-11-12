import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import '../styles/Project.scss'



const ProjectCard = ({ project }) => {

   return(
      <div className="project-card-container">
         <div className="project-card-title">
            <h2>{project.title}</h2>
         </div>
         <div className="project-card-info">

         </div>
      </div>
   )
}

export default ProjectCard


