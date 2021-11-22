import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import '../styles/Project.scss'



const ProjectCard = ({ project }) => {

   return(
     <div className="project-card-container">
        <div className="project-card-info">
           <label className="project-card-title">{project.title}</label>
           <div className="project-card-link-container">
               <a className="project-card-link" target="_blank" href={project.github}>
                  <div className="project-card-link-btn">
                     <i><AiFillGithub /></i> Github repo 
                  </div>
               </a>
           </div>
           <p>{project.about}</p>
           <div className="project-card-tag-container">
              {project.tags.map((tag) => {
                 return <div className="project-card-tag" key={project.id}>{tag}</div>
              })}
           </div>
        </div>
         <img className="project-card-image" src={project.image} alt={project.title}/>
     </div>
   )
}

export default ProjectCard


