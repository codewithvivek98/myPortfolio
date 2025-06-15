import "../styles/Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "May 2023 - Aug 2023",
      description: [
        "Assisted in developing responsive web interfaces using HTML, CSS, and JavaScript",
        "Collaborated with senior developers to implement UI components in React",
        "Participated in code reviews and improved code quality",
        "Gained hands-on experience with version control using Git",
      ],
    },
    {
      title: "Web Development Bootcamp",
      company: "CodeAcademy",
      location: "Online",
      period: "Jan 2023 - Apr 2023",
      description: [
        "Completed intensive 12-week frontend development bootcamp",
        "Built multiple projects using HTML, CSS, JavaScript, and React",
        "Learned modern web development practices and responsive design",
        "Collaborated with peers on group projects simulating real-world development",
      ],
    },
    {
      title: "Computer Science Student",
      company: "University Name",
      location: "City, Country",
      period: "2019 - 2023",
      description: [
        "Bachelor's degree in Computer Science",
        "Focused on web development and user interface design",
        "Completed coursework in data structures, algorithms, and software engineering",
        "Developed several web applications as part of course projects",
      ],
    },
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My academic background and practical experience in frontend development.</p>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>
                  <div className="experience-meta">
                    <div>
                      <span>📅</span> {experience.period}
                    </div>
                    <div>
                      <span>📍</span> {experience.location}
                    </div>
                  </div>
                </div>

                <ul className="experience-description">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
