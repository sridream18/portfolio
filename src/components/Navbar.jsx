import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo">
          Sri<span className="text-gradient">.Dev</span>
        </a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#hero" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>Let's Talk</a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
