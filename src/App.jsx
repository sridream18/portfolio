import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import './styles/global.css';
import { ThemeProvider } from './context/ThemeContext';

const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ScrollProgress />
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Suspense fallback={<div className="section-loader">Loading...</div>}>
            <Experience />
            <Education />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}


export default App;
