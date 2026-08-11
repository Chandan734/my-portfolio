import React, { useEffect, useState } from 'react'
import myPhoto from './Image/Me.....jpeg'

const roles = [
  'Roblox Developer',
  'Game Developer',
  'Luau Scripter',
  'Frontend Developer'
]

const colors = [
  '#FF6B6B',
  '#4ECDC4',
  '#FFD93D',
  '#1A73E8',
  '#B794F4'
]

function About() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    let timeoutId

    const intervalId = setInterval(() => {
      // Fade out current role
      setFade(false)

      timeoutId = setTimeout(() => {
        // Change role
        setIndex((prevIndex) => (prevIndex + 1) % roles.length)

        // Fade new role in
        setFade(true)
      }, 500)
    }, 3000)

    // Cleanup when component is removed
    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="about-container">

      {/* About Heading */}
      <h1>
        About <span className="highlight">Me</span>
      </h1>

      <div className="landing">

        {/* Profile Image */}
        <div className="image">
          <img
            src={myPhoto}
            alt="Chandan - Roblox Developer"
          />
        </div>

        {/* About Content */}
        <div className="content">

          {/* Animated Role */}
          <h2
            style={{
              opacity: fade ? 1 : 0,
              color: colors[index % colors.length],
              transition: 'opacity 0.5s ease, color 0.5s ease'
            }}
          >
            {roles[index]}
          </h2>

          <p>
            Hi, I'm <strong>Chandan</strong>, a passionate Roblox Developer
            specializing in <strong> Luau scripting</strong> and
            <strong> Roblox Studio</strong>. I focus on building engaging,
            scalable, and optimized Roblox experiences.
          </p>

          <p>
            I have worked on projects including
            <strong> Math Puzzle Racing Game</strong>,
            <strong> Plots Tycoon</strong>,
            <strong> Obby Game</strong>, and
            <strong> Tower Defense</strong>, where I developed multiplayer
            gameplay systems, game mechanics, player progression, UI systems,
            and server-side functionality.
          </p>

          <p>
            My Roblox development skills include
            <strong> Luau</strong>,
            <strong> DataStore</strong>,
            <strong> RemoteEvents</strong>,
            <strong> RemoteFunctions</strong>,
            <strong> client-server architecture</strong>,
            <strong> matchmaking systems</strong>,
            <strong> ModuleScripts</strong>,
            <strong> UI development</strong>,
            <strong> MarketplaceService</strong>, and
            <strong> performance optimization</strong>.
          </p>

          <p>
           I also have around <strong>6 months of experience in Full-Stack Development </strong>
           and a good understanding of <strong>Frontend Development</strong>.
            My web development skills include
            <strong> HTML5</strong>,
            <strong> CSS3</strong>,
            <strong> JavaScript</strong>, and
            <strong> React.js</strong>. I have experience building responsive,
            interactive, and user-friendly web interfaces.
          </p>

          <p>
            I completed my
            <strong> B.Tech in Computer Science Engineering in 2024</strong>.
            I enjoy solving technical challenges, learning new technologies,
            and creating secure, responsive, and enjoyable experiences across
            both <strong>game development</strong> and
            <strong> web development</strong>.
          </p>

        </div>

      </div>

    </section>
  )
}

export default About