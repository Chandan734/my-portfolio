import React, { useState, useEffect } from 'react'
import myPhoto from'./Image/me.jpg'


function About() {

    const roles = [ 'Software Developer', 'Frontend Developer','Full Stack Developer']
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
        I’m Chandan Kumar, a passionate and dedicated Full-Stack Web Developer with a solid foundation in both front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
          <br/>
          I completed my B.Tech in Computer Science Engineering in 2024, during which I developed dynamic, user-friendly web applications such as a restaurant website and an event management platform.
          <br/>
          I’m a quick learner, a team player, and always eager to take on new challenges and technologies. My goal is to contribute meaningfully to innovative projects and continuously grow as a developer.
      </h4>
    </div>
    </section>
 </div>
  )
}

export default About
