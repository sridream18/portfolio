import { FaLinkedin, FaEnvelope, FaGithub, FaHeart } from 'react-icons/fa';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size="default" />
            <p className="footer-tagline">Building digital experiences with passion and precision.</p>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/in/sri-bhuvane-j-484304264"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sridream18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a href="mailto:sri.dream18@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} J. Sri Bhuvane. Made with <FaHeart className="footer-heart" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
