import React from 'react';
import '../styles/Skills.scss'


// Components
import Separator from './Separator'

const Skills = () => {

   const skillsData = [
      {
         type: 'Frontend',
         list: [
            {
               name: 'JavaScript',
               icon: <i className="devicon-javascript-plain colored"></i>
            },
            {
               name: 'React.js',
               icon: <i className="devicon-react-original colored"></i>
            },
            {
               name: 'Redux',
               icon: <i className="devicon-redux-original colored"></i>
            },
            {
               name: 'Jest',
               icon: <i className="devicon-jest-plain colored"></i>
            },
            {
               name: 'CSS',
               icon: <i className="devicon-css3-plain colored"></i>
            }
         ]
      },
      {
         type: 'Backend',
         list: [
            {
               name: 'Node.js',
               icon: <i className="devicon-nodejs-plain colored"></i> 
            },
            {
               name: 'Express',
               icon: <i className="devicon-express-original colored"></i>
            }
         ]
      }
   ]

   return(
      <div className="skills-container">
         <Separator />
         <label className="section-title">Skills</label>
            <div className='skills-list-container'>
               {skillsData.map((item) => {
                  return (
                     <div className='skills-section' key={item.type}>
                        <label className='skills-section-title'>{item.type}</label> 
                           <div className='skills-list'>
                              {item.list.map((skill) => {
                                 return(
                                    <div className="skill-card" key={skill.name}> 
                                       <div className="skill-icon">{skill.icon}</div>
                                       <label className='skill-name'>{skill.name}</label>
                                    </div>
                                 )})}
                           </div>
                     </div>
                  )})}
            </div>
      </div>
   )
}

export default Skills;