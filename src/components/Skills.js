"use client"

import { useState, useEffect } from "react"
import "../styles/Skills.css"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [visibleSkills, setVisibleSkills] = useState([])

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React.js", level: 70 },
        { name: "Bootstrap", level: 75 },
        {name: "Tailwind CSS" , level: 65},
      ],
    },
   
    backend: {
      title: "Backend",
      skills: [
        { name: "JavaScript(Node.js)", level: 75 },
        { name: "Express.js - for building RESTful APIs", level: 80 },
        { name: "Chrome DevTools", level: 80 },
        { name: "MongoDB", level: 70 },
      ],
    },

     tools: {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "Netlify", level: 60 },
        { name: "npm/yarn", level: 70 },
        { name: "Web Accessibility", level: 65 },
        { name: "VS Code", level: 85 },
      ],
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute("data-skill")
            if (skillName && !visibleSkills.includes(skillName)) {
              setVisibleSkills((prev) => [...prev, skillName])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillElements = document.querySelectorAll(".skill-item")
    skillElements.forEach((el) => observer.observe(el))

    return () => {
      skillElements.forEach((el) => observer.unobserve(el))
    }
  }, [activeCategory, visibleSkills])

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Here are the technologies and tools I've learned and worked with so far.</p>

        <div className="skills-tabs">
          <div className="tabs-container">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`tab-button ${activeCategory === key ? "active" : ""}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories[activeCategory].skills.map((skill) => (
            <div key={skill.name} className="skill-item" data-skill={skill.name}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: visibleSkills.includes(skill.name) ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
