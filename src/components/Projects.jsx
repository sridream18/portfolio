import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'SecureAuth Pro',
    description: 'A robust, multi-factor authentication system with JWT, OAuth2, and glassmorphism UI.',
    tech: ['React', 'Node.js', 'JWT', 'Firebase'],
    github: '#',
    live: '#',
    image: '/projects/auth.png'
  },
  {
    title: 'Tesco Analytics',
    description: 'Enterprise-grade retail dashboard for inventory tracking and sales forecasting.',
    tech: ['Next.js', 'Chart.js', 'Tailwind', 'PostgreSQL'],
    github: '#',
    live: '#',
    image: '/projects/tesco.png'
  },
  {
    title: 'FinanceFlow',
    description: 'Premium wealth management platform with AI-driven expense categorization and insights.',
    tech: ['React', 'TypeScript', 'D3.js', 'Express'],
    github: '#',
    live: '#',
    image: '/projects/finance.png'
  },
  {
    title: 'FCS Shield',
    description: 'Real-time Field Control System for mission-critical operation monitoring and coordination.',
    tech: ['React', 'Socket.io', 'Mapbox', 'Redux'],
    github: '#',
    live: '#',
    image: '/projects/fcs.png'
  }
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Latest <span className="text-gradient">Work</span></h2>
          <p className="section-subtitle">A collection of projects built with passion</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-image">
                <img src={project.image} alt={`${project.title} Preview`} loading="lazy" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" aria-label={`View ${project.title} on GitHub`}>
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} className="project-link" aria-label={`View ${project.title} live demo`}>
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
