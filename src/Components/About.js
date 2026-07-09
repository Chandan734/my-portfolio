import React, { useState, useEffect } from 'react'
import myPhoto from'./Image/me.jpg'


function About() {

    const roles = [ 'Roblox Developer', 'Game Developer','Luau Scripter']
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#1A73E8', '#B794F4'] // 5 colors
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false) // Start fade out
        setTimeout(() => {
          setIndex(prev => (prev + 1) % roles.length)
          setFade(true) // Fade in new text
        }, 500)
      }, 3000)
  
      return () => clearInterval(interval)
    }, [])

  return (
    <div className='about-container'>
      <h1>About <span className='highlight'>Us</span></h1>
       <section class="landing">
           <div class="image">
          <img src={myPhoto} alt="Landing Illustration"/>
         </div>
      <div class="content">
       <h1
        id="role"
            style={{
              opacity: fade ? 1 : 0,
              color: colors[index % colors.length],
            }} >{roles[index]}
          </h1>
      <h4> 
        I'm Chandan, a passionate Roblox Developer specializing in Luau scripting and Roblox Studio. I have experience building engaging multiplayer experiences, 
        including Math Puzzle Racing Game, Plots Tycoon, and Tower Defense, with scalable and optimized gameplay systems.
          <br/>
          <br/>
        My expertise includes DataStore, RemoteEvents, RemoteFunctions, client-server architecture, matchmaking systems, UI development, and performance optimization.
        I enjoy creating secure, interactive, and high-performance Roblox games that deliver an excellent player experience.
          <br/>
          <br/>
        I completed my B.Tech in Computer Science Engineering in 2024 and have continued to strengthen my Roblox development skills through professional experience and hands-on projects. 
        I'm a quick learner, a problem solver, and always excited to build innovative Roblox experiences and collaborate on challenging game development projects.
      </h4>
    </div>
    </section>
 </div>
  )
}

export default About
