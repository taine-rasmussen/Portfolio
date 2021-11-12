import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import '../styles/Project.scss'



const ProjectCard = ({ project }) => {

   return(
      <div className="project-card-container">

         <div className="project-card-title">
            <h2>{project.title}</h2>
         </div>
         
         <div className="project-card-info-container">
            <div className="project-card-info">
               <p>{project.about}</p>
            </div>
            <div className="project-card-info">
               <img src={project.image} alt={project.title}/>
            </div>
         </div>

         <div className="project-card-footer-container">
            <div className="footer-tags">
               {project.tags.map((item, index) => {
                  return(
                     <div className="project-card-tag" key={index}>
                        {item}
                     </div>
                  )
               })}
            </div>
            <div className="footer-btn">
               <a href={project.github} target="_blank">
                  <button>
                     <AiFillGithub /> Github repo
                  </button>
               </a>
            </div>
         </div>

      </div>
   )
}

export default ProjectCard


