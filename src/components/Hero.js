"use client"

import { useState, useEffect } from "react"
import "../styles/Hero.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";  // For social icons
import myPhoto from '../assets/my-photo.jpg'; // Adjust path as needed



const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Full-Stack Web Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">

            <img src={myPhoto}
            className="profile-image"
            alt="Profile"
            />

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Vivek Kumar Soni</span>
          </h1>

          <h2 className="hero-subtitle">
            {displayText}
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-description">
            Passionate Full Stack Web Developer skilled in building dynamic, responsive, and user-friendly web applications using technologies like HTML, CSS, JavaScript, ReactJS, Node.js, Express, and MongoDB. Proficient in styling with Tailwind CSS and Bootstrap to deliver modern, clean interfaces.
          </p>

          <div className="social-links">
            <a
            //Github
            href="https://github.com/codewithvivek98"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub">
            <FaGithub size={24} />
            </a>

            <a
            //Linkedin
            href="https://www.linkedin.com/in/vivek-kumar-soni-81177824a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn">
            <FaLinkedin size={24} />
            </a>


             <a
             //Gmail
            href="mailto:vivek.soni9891@gmail.com"
            className="social-link"
            aria-label="Email">
            <FaEnvelope size={24} />
            </a>
          </div>

          {/* Showing the scroll bar */}
        <div className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll Down">
            <FaArrowDown size={20} />
        </div> 

        </div>
      </div>
    </section>
  )
}

export default Hero
