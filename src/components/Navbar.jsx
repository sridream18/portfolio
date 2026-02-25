import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import ShareButton from './ShareButton';
import './Navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">

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
          
          <div className="nav-actions">
            <ShareButton />
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
            </button>
          </div>
        </div>


        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
