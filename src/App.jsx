import './App.css'

const skills = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'React',
  'Node.js',
  'Express',
  'SQL',
  'Database Design',
  'REST APIs',
  'Git & GitHub',
  'Responsive Design',
  'Problem Solving',
]

const projects = [
  {
    title: 'KHALLOUFI FARES',
    description:
      'A personal portfolio website showcasing my development skills, projects, contact information, and professional profile in a modern digital format.',
    stack: ['React', 'Vite', 'CSS'],
    link: 'https://github.com/f-khalloufi/portfolio',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity web app for managing tasks, organizing priorities, and tracking progress in a clean, user-friendly dashboard.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/f-khalloufi',
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'A storefront portal for product management, orders, and analytics, created to demonstrate full-stack development abilities.',
    stack: ['React', 'Express', 'SQL'],
    link: 'https://github.com/f-khalloufi',
  },
  {
    title: 'Real-Time Chat App',
    description:
      'A messaging application designed to highlight client-server real-time communication and interactive user experience.',
    stack: ['React', 'Socket.io', 'Node.js'],
    link: 'https://github.com/f-khalloufi',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Khaloufi Fares</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Web Developer • Frontend • Full-Stack Growth</span>
            <h1>Building clean, practical, and modern digital experiences.</h1>
            <p>
              I’m Khaloufi Fares, a web developer focused on creating responsive interfaces,
              clean code, and useful applications that work well for real users.
            </p>
            <div className="cta-group">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-badge">Open to opportunities</div>
            <div className="stat-grid">
              <div>
                <strong>4+</strong>
                <span>Project concepts</span>
              </div>
              <div>
                <strong>JS</strong>
                <span>Core stack</span>
              </div>
              <div>
                <strong>UI</strong>
                <span>Focus</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>About</span>
            <h2>Turning ideas into useful products.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I enjoy building websites and web applications that are intuitive, efficient, and
                visually polished. My work focuses on frontend development, responsive design, and
                creating user-friendly digital experiences.
              </p>
              <p>
                I’m continuously improving my skills in JavaScript, HTML, CSS, databases, and web
                technologies to become a stronger and more complete developer.
              </p>
            </div>

            <div className="mini-panel">
              <h3>Strengths</h3>
              <ul>
                <li>Responsive web design</li>
                <li>Clean coding practices</li>
                <li>Database basics</li>
                <li>GitHub portfolio presentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Technologies and tools I use.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-chip" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span>Projects</span>
            <h2>Portfolio highlights.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="project-tag">Featured</span>
                </div>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <h2>Let’s connect and build something valuable.</h2>
        <div className="footer-links">
          <a href="mailto:khalloufi.fares@gmail.com">Email</a>
          <a href="https://github.com/f-khalloufi" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/fares-khalloufi-2b727112a/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
