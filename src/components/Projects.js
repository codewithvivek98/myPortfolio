import "../styles/Projects.css"

// Importing images from assetes folder 
import portfolio from "../assets/portfolio.jpg"; // adjust path as needed
import weather from "../assets/weather-app.png";
import game from "../assets/tictactoe.jpg";

// For icons
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";



const Projects = () => {
  const projects = [ 
    {
      title : "Personal Portfolio Website",
      description : "My personal portfolio website built with React, showcasing my projects and skills. Features responsive design and smooth animations.",
      image: portfolio, 
      technologies : ["React", "CSS", "JavaScript", "Responsive Design"],
      liveUrl : "https://example.com", // to be done 
      githubUrl : "https://github.com/codewithvivek98/myPortfolio",
    },


    {
      title: "Weather App",
      description : "A simple weather application that fetches and displays current weather data based on user location or search. Uses the OpenWeather API.",
      image : weather,
      technologies : ["HTML", "CSS", "JavaScript", "API Integration"],
      liveUrl : "https://example.com", //not done
      githubUrl : "https://github.com",
    },


    {
      title: "Simple tic-tac-toe game",
      description : "A classic Tic-Tac-Toe (also known as Noughts and Crosses) game built with modern web technologies. This project allows two players to take turns marking spaces in a 3×3 grid with X and O until one player wins or the game ends in a draw." ,
      image: game ,
      technologies : ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl : "https://myygame.netlify.app/",
      githubUrl : "https://github.com/codewithvivek98/tic-tac-toe-Game",
    },
  ]


  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          These projects demonstrate my practical experience and showcase the full range of my web development skills.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
 

                <div className="project-links">
                  <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link">
                  <FaExternalLinkAlt style={{ marginRight: "6px" }} /> Live Demo
                  </a>
                   <a
                   href={project.githubUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="project-link">
                   <FaGithub style={{ marginRight: "6px" }} /> Source Code
                   </a>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
