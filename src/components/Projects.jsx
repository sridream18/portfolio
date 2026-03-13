import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A premium, high-performance portfolio website built with React and Vite.',
    tech: ['React', 'Vite', 'CSS3'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'A robust administrative dashboard for managing online store operations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
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
