import React, { useEffect, useState } from "react";
import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import StarsTransition from "../Components/StarsTransition";
import "./index.css";
import Cloud from "../assets/cloud.png";
import KratsiaAi from "../Pages/ProjectScreens/kratsia-ai";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#Fdc269");

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const aboutSection =
  //       document.querySelector(".starTransition").offsetHeight;
  //     const heroHeight = document.querySelector(".hero").offsetHeight;
  //     const scrollPosition = window.scrollY;

  //     if (
  //       scrollPosition >= heroHeight / 2 &&
  //       scrollPosition < heroHeight + aboutSection / 2
  //     ) {
  //       setBackgroundColor("#000d36");
  //     } else if (scrollPosition >= heroHeight + aboutSection / 2) {
  //       setBackgroundColor("#2fc6ed");
  //     } else {
  //       setBackgroundColor("#Fdc269");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
      {/* <KratsiaAi /> */}
    </>
  );
}

export default App;
