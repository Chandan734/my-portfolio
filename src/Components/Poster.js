// import React,{useEffect} from 'react'
import React, { useState, useEffect } from 'react'
import myPhoto from'./Image/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RobloxLogo from './Image/Roblox.png'
import { Link } from 'react-router-dom'
import { faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Poster() {

   const roles = [ 'Roblox Developer', 'Game Developer','Luau Scripter','Frontend Development' ] // 4 roles
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
    <div className="hero">
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

          <h4>A passionate Roblox Developer specializing in Luau scripting and Roblox Studio.
             I build scalable multiplayer systems, gameplay mechanics, DataStore solutions, UI systems, and optimized client-server architectures.
              I also have around 6 months of Full-Stack Development experience with good knowledge of Frontend Development, including HTML5, CSS3, JavaScript, and React.js. 
            My goal is to create secure, engaging, and high-performance game and web experiences..</h4>
            <br/>
          <div class="buttons">
<div className="buttons">
  <a
    href="mailto:cp028443@gmail.com?subject=Let's%20Talk&body=Hi%20Chandan%2C%0AI'd%20like%20to%20connect%20with%20you"
    className="btn primary"
  >
    Let's Talk
  </a>

  {/* <a
    href="/projects"
    className="btn secondary"
    target="_blank"
    rel="noopener noreferrer"
  >
     View Projects
  </a> */}

  <Link to="/Project" className="btn secondary"
    rel="noopener noreferrer">
  View Projects </Link>
</div>
          </div>
          <div class="social-icons">
            {/* Roblox */}
            <a href="https://www.roblox.com/users/9243573767" target='_blanck' >
              <img src={RobloxLogo} alt="Roblox"className="icon roblox-icon" />
            </a>
            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/chandan-kumar-819521222/" target='_blanck' >
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
            {/* facebook */}
            {/* <a href="https://m.facebook.com/chandansahab.sahab/" target='_blanck' >
            <FontAwesomeIcon icon={faFacebook} className='icon' />
            </a> */}
            {/* instagram */}
            {/* <a href="https://www.instagram.com/Chandan_734" target='_blanck' >
            <FontAwesomeIcon icon={faInstagram} className='icon' />
            </a> */}

          </div>
        </div>
        <div class="hero-img">
          <img src={myPhoto} alt="Chandan"/>
        </div>
        </div>
   </div>
  )
}
