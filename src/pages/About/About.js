import React from 'react'
import './About.css'
import Education from './Education'
import Skills from './Skills'
import Hobbies from './Hobbies'
const About = () => {
  return (
    <section className='about-section'>
         <center><div><h1><span>A</span>BOUT <span>M</span>E</h1></div></center>
         <div className='about-education '>
             <h1>Education</h1>
             <div className="edu-details">
                    <Education />
             </div>
         </div>
         <div className='about-skills'>
          <h1>Skills</h1>
          <Skills/>
         </div>
         <div className='about-hobbies'>
          
          <Hobbies/>
         </div>
         {/* <div className='about-languages'>
          <h1>Languages</h1>
         </div>
         <div className='about-weblinks'>
           <h1>Other Profiles</h1>
         </div> */}


    </section>
  )
}

export default About