import React, { useEffect, useState } from "react";
import NavBar from "./Components/nav/NavBar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import StarsTransition from "./Components/StarsTransition";

function Main() {
  const [backgroundColor, setBackgroundColor] = useState("#Fdc269");

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <>
      <NavBar />
      <div className="hero">
        <Hero />
      </div>
      <div className="starTransition">
        <StarsTransition setBackgroundColor={setBackgroundColor} />
      </div>

      <div className="about">
        <About setBackgroundColor={setBackgroundColor} />
      </div>
      <div className="projects">
        <Projects setBackgroundColor={setBackgroundColor} />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </>
  );
}

export default Main;
