import React, { useEffect } from 'react';
import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import StarsTransition from '../Components/StarsTransition';
import './index.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about');
      const heroHeight = document.querySelector('.hero').offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= heroHeight / 2) {
        document.body.style.backgroundColor = '#000d36';
      } else {
        document.body.style.backgroundColor = '#Fdc269';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="hero">
        <Hero />
      </div>
      <div className="starTransition">
      <StarsTransition/>
      </div>
   
      <div className="about">
        <About />
      </div>
      {/* <div className="projects">
        <Projects />
      </div> */}
      {/* <Skills /> */}
      <div className="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;