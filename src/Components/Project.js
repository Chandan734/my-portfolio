import React from 'react'
import Project1 from './Image/One.jpg'
import Project2 from './Image/Two.jpg'
import Project3 from './Image/Three.jpg'

function Project() {
  return (
    <div className='Project-container'>
    <section class="portfolio">
    <h1><span>My</span> Project</h1>
    <div class="projects-container">

      {/* <!-- Project 1 --> */}
      <div class="project-card">
        <img src={Project1} alt="Project Image" />
        <h2>Plots Tycoon</h2>
        <h4>
         A multiplayer Roblox tycoon game featuring plot ownership, DataStore persistence, 
         daily rewards, interactive UI, and engaging gameplay systems.

        </h4>
        <div class="stack">
          <span>Roblox Studio</span>
          <span>Lua</span>
          <span>Client-Server</span>
          <span>GUI</span>
        </div>
       <div class="buttons-project">
          <a href="https://www.roblox.com/users/9243573767" class="btn secondary" target='blank' >Play Game</a>
          </div>
      </div>

      {/* <!-- Project 2 --> */}
      <div class="project-card">
        <img src={Project2} alt="Project Image" />
        <h2>Tower Defense</h2>
        <h4>
         A Roblox tower defense game with strategic tower placement, enemy waves, 
         upgrade systems, and secure client-server gameplay mechanics.

        </h4>
        <div class="stack">
          <span>Luau</span>
          <span>Enemy AI</span>
          <span>Tower System</span>
          <span>UI System</span>
        </div>
       <div class="buttons-project">
          <a href="https://www.roblox.com/users/9243573767" class="btn secondary" target='blank' >Play Game</a>
          </div>
      </div>


      {/* <!-- Project 3 --> */}
      <div class="project-card">
        <img src={Project3} alt="Project Image" />
        <h2> Math Puzzle Racing </h2>
        <h4>
         A competitive 1v1 and 2v2 multiplayer game combining real-time math puzzles,
          cart racing, matchmaking, and synchronized gameplay.
        </h4>
        <div class="stack ">
          <span>Luau</span>
          <span>Multiplayer </span>
          <span>Matchmaking</span>
          <span>Data Store</span>
        </div>
        <div class="buttons-project">
          <a href="https://www.roblox.com/users/9243573767" class="btn secondary" target='blank' >In Progress</a>
          </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Project

