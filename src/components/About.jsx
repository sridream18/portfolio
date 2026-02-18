import './About.css';
import { FaCode, FaRocket, FaMobileAlt } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header center">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Passion for <span className="text-gradient">Clean Code</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              I'm <strong>Sri Bhuvane</strong>, a Frontend Developer with a keen eye for design details.
              I don't just write code; I build immersive digital experiences that users love.
            </p>
            <p className="about-text">
              My journey started with a curiosity for how things work on the web, which evolved into a career 
              crafting robust applications using <strong>React Ecosystem</strong>. I'm obsessed with performance optimization 
              and accessibility.
            </p>

            <div className="stats-row">
              <div className="stat-item">
                <h3 className="stat-number text-gradient">3+</h3>
                <p className="stat-label">Years of <br/> Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number text-gradient">20+</h3>
                <p className="stat-label">Projects <br/> Completed</p>
              </div>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card glass-panel">
              <div className="icon-box"><FaCode /></div>
              <h3>Modern Frontend</h3>
              <p>Scalable architecture using React, Next.js, and TypeScript.</p>
            </div>
            
            <div className="service-card glass-panel">
              <div className="icon-box"><FaMobileAlt /></div>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach ensuring perfect display on all devices.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="icon-box"><FaRocket /></div>
              <h3>Performance</h3>
              <p>Optimized load times and smooth 60fps animations.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
