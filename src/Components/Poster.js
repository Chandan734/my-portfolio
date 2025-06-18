// import React,{useEffect} from 'react'
import React, { useState, useEffect } from 'react'
import myPhoto from'./Image/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Poster() {

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
   <div>
    <div class="hero">
        <div class="hero-text">
          <h1 class="multi-color-text">Hi,
  <span class="animated-name">
    <span>I</span><span>'</span><span>m</span> <span>C</span><span>h</span><span>a</span><span>n</span><span>d</span><span>a</span><span>n</span>
  </span>
</h1>
     <h2
        id="role"
            style={{
              opacity: fade ? 1 : 0,
              color: colors[index % colors.length],
            }} >{roles[index]}
          </h2>

          <h4>A dedicated and aspiring Software Development Engineer with an objective of working in an organization that provides opportunities for technical and personal advancement.</h4>
          <div class="buttons">
            <a href="mailto:cp028443@gmail.com?subject=Let's%20Talk&body=Hi%20Chandan%2C%0AI'd%20like%20to%20connect%20with%20you" class="btn primary">Let's Talk</a>
            <a href="https://docs.google.com/document/d/1dcK82TEwb1jqMOGdb3lXrUahK54dmFBe/edit?usp=drivesdk&ouid=114056573075144787504&rtpof=true&sd=true" 
            class="btn secondary" download target="_blank">Download CV</a>

          </div>
          <div class="social-icons">
            {/* github */}
            <a href="https://github.com/Chandan734" target='_blanck' >
            <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/chandan-prajapati-819521222" target='_blanck' >
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
            {/* facebook */}
            <a href="https://m.facebook.com/chandansahab.sahab/" target='_blanck' >
            <FontAwesomeIcon icon={faFacebook} className='icon' />
            </a>
            {/* instagram */}
            <a href="https://www.instagram.com/Chandan_734" target='_blanck' >
            <FontAwesomeIcon icon={faInstagram} className='icon' />
            </a>

          </div>
        </div>
        <div class="hero-img">
          <img src={myPhoto} alt="Chandan"/>
        </div>
        </div>
   </div>
  )
}
