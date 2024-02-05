import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectCards from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";
import PhotoFrame from "../assets/photoFrame.png";
import Conveyor from "../assets/conveyor.png";
import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Projects = ({ setBackgroundColor }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const controls = useAnimation();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.2) {
      setBackgroundColor("#f4e3d7ff");
      controls.start({ x: 0 });
    }
  });

  useEffect(() => {
    controls.start({ x: -100 }); // Initial animation state
  }, [controls]);

  return (
    <motion.div
      id="projects"
      className="w-full flex"
      style={{
        height: "100vh",
        position: "relative",

        flexDirection: "column",
      }}
      ref={container}
    >
      <div className="spacer" style={{ height: "30vh" }}></div>
      <h1
        style={{
          color: "#aa6161ff",
          fontSize: 36,
          paddingLeft: 30,
          marginTop: 30,
        }}
      >
        See what we've been <br /> working on recently!
      </h1>
      <motion.img
        src={Conveyor}
        style={{
          width: 1250,
          height: 500,
          position: "relative",
          opacity: 0,
          x: -100, // Initial position off-screen
        }}
        animate={controls}
      />
      <div className="spacer" style={{ height: "30vh" }}></div>
    </motion.div>
  );
};

export default Projects;
