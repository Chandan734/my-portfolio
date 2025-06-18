import React from 'react'
import Project1 from './Image/Project 1.jpg'
import Project2 from './Image/Project 2.avif'

function Project() {
  return (
    <div className='Project-container'>
    <section class="portfolio">
    <h1><span>My</span> Project</h1>
    <div class="projects-container">

      {/* <!-- Project 1 --> */}
      <div class="project-card">
        <img src={Project1} alt="Project Image" />
        <h2>Burger Licious</h2>
        <h4>
          A lightweight restaurant website template featuring a responsive layout with menu, reviews, and contact sections.
        </h4>
        <div class="stack">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJs</span>
        </div>
       <div class="buttons-project">
          <a href="https://github.com/Chandan734" class="btn secondary" target='blank' >Source Code</a>
          </div>
      </div>

      {/* <!-- Project 2 --> */}
      <div class="project-card">
        <img src={Project2} alt="Project Image" />
        <h2>Dream Event Planners </h2>
        <h4>
          A simple full-stack web application for event planning, allowing easy management and display of services through a clean and user-friendly interface.
        </h4>
        <div class="stack ">
          <span>NodeJs</span>
          <span>ExpressJs</span>
          <span>MongoDB</span>
        </div>
        <div class="buttons-project">
          <a href="https://github.com/Chandan734" class="btn secondary" target='blank' >Source Code</a>
          </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Project

