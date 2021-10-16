import React from 'react';
import '../styles/Body.scss'

// Components
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'



const Body = () => {

  return(
      <div className="body-container">
        <section id='About'>
          <About />
        </section>
         <section id='Projects'>
          <Projects />
        </section>
         <section id='Skills'>
          <Skills />
        </section>
         <section id='Contact'>
          <Contact />
        </section>
      </div>
  )
}

export default Body