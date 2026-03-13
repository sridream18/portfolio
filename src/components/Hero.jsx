import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (

    <section id="hero" className="hero section">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* <div className="hero-badge float-animation">
            <span className="pulsing-dot"></span> 
             <span className="badge-text">Available for Innovation</span> 
          </div> */}
          
          {/* <p className="hero-greeting">{greeting},</p> */}
          <h1 className="hero-title">
            I'm <span className="text-gradient">Sri Bhuvane</span>
          </h1>

          
          <h2 className="hero-subtitle">
            Frontend Developer & <br/> UI/UX Enthusiast
          </h2>
          
          <p className="hero-description">
            I craft pixel-perfect, engaging digital experiences. Specializing in building 
            responsive web applications with modern technologies like React, Tailwind, and Next.js.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/sri-bhuvane-j-484304264" className="social-icon" aria-label="Visit Sri Bhuvane's LinkedIn Profile" target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" /></a>
            <a href="https://github.com/sridream18" className="social-icon" aria-label="Visit Sri Bhuvane's GitHub Profile" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /></a>
            <a href="/resume.pdf" className="social-icon" aria-label="Download Sri Bhuvane's Resume" target="_blank" rel="noopener noreferrer"><FaFileDownload aria-hidden="true" /> Resume</a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="code-card glass-panel float-animation">
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="card-body">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
              </div>
              <div className="code-line indent">
                <span className="property">name</span>: <span className="string">'Sri Bhuvane'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">role</span>: <span className="string">'Frontend Dev'</span>,
              </div>
              <div className="code-line indent">
                <span className="property">skills</span>: <span className="bracket">['</span><span className="string">React</span><span className="bracket">', '</span><span className="string">Next.js</span><span className="bracket">']</span>
              </div>
              <div className="code-line">
                <span className="bracket">{'}'}</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
