import './App.css'

const skills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'HTML5',
  'CSS3',
  'Git & GitHub',
  'REST APIs',
  'SQL',
  'Responsive Design',
  'UI/UX Basics',
]

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio designed to showcase projects, skills, and professional experience in a clean, high-impact layout.',
    stack: ['React', 'Vite', 'CSS'],
    link: '#',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity app for creating, updating, and organizing tasks with a simple dashboard experience and clear task flow.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'A full-stack storefront dashboard with product management, order tracking, and a clean analytics-focused interface.',
    stack: ['React', 'Express', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Real-Time Chat App',
    description:
      'A communication platform built to demonstrate live messaging, user interaction, and smooth front-end to back-end data flow.',
    stack: ['React', 'Socket.io', 'Node.js'],
    link: '#',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">F-Khalloufi</div>
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
            <span className="eyebrow">Developer • Problem Solver • Creator</span>
            <h1>Building clean digital experiences with purpose.</h1>
            <p>
              I’m a web developer focused on crafting responsive interfaces, scalable apps,
              and practical solutions that look professional and work smoothly.
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
            <div className="card-badge">Available for work</div>
            <div className="stat-grid">
              <div>
                <strong>4+</strong>
                <span>Project ideas</span>
              </div>
              <div>
                <strong>JS</strong>
                <span>Core stack</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Focused</span>
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
                I enjoy building web applications that are intuitive, efficient, and visually
                clean. My work focuses on frontend development, user experience, and creating
                solutions that are practical for real users.
              </p>
              <p>
                I’m continuously developing my skills in modern web technologies, UI design,
                and full-stack workflows to improve both the quality and impact of my work.
              </p>
            </div>

            <div className="mini-panel">
              <h3>Core strengths</h3>
              <ul>
                <li>Responsive interfaces</li>
                <li>Modern JavaScript workflows</li>
                <li>Clean project organization</li>
                <li>GitHub portfolio presentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Tools and technologies I use.</h2>
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
            <h2>Selected work and portfolio highlights.</h2>
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
                <a href={project.link}>View project</a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <h2>Let’s build something meaningful.</h2>
        <div className="footer-links">
          <a href="mailto:your-email@example.com">Email</a>
          <a href="https://github.com/f-khalloufi" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
