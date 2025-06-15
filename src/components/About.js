import "../styles/About.css"
import myPhoto from '../assets/developer-image.jpg'; // Adjust path as needed


const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A passionate full stack web developer at the beginning of my journey, dedicated to building complete and responsive web applications using both frontend and backend technologies.
        </p>

        <div className="about-content">
          <div>
            <img
              src = {myPhoto}
              alt = "About me"
              className = "about-image"
            />
          </div>

          <div>
            <p className="about-text">
             Hello! I’m a recent B.Tech undergraduate from{" "}
          <a
                href="http://nsut.ac.in/en/home"
                target="_blank"
                rel="noopener noreferrer"
                className="college-link" >
                Netaji Subhas University of Technology (NSUT)
                </a>

                 , with a strong interest in full stack web development. I build responsive and scalable applications using React, Node.js, Express, MongoDB, and modern UI tools like Tailwind CSS and Bootstrap.
             </p>

            <p className="about-text">
             Enthusiastic about writing clean code and crafting intuitive, visually appealing interfaces. I’ve been building projects since college to sharpen my web development skills.
            </p>

            <p className="about-text">
             Actively seeking opportunities to apply my full-stack skills, collaborate with experienced developers, and contribute to impactful projects.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">💻</div>
                <h3>Clean Code</h3>
                <p>Writing readable and maintainable code</p>
              </div>

              <div className="feature">
                <div className="feature-icon">🎨</div>
                <h3>Responsive Design</h3>
                <p>Creating websites that work on all devices</p>
              </div>

              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h3>Fast Learner</h3>
                <p>Quickly adapting to new technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
