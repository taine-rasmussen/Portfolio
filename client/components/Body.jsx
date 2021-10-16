import React from 'react';
import '../styles/Body.scss'

// Components
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'



const Body = () => {

  return(
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
  )
}

export default Body