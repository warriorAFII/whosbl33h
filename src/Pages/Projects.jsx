import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectCards from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";
import PhotoFrame from "../assets/photoFrame.png";
import Conveyor from "../assets/conveyor.png";
import { useRef } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import ProjectsMenu from "../Components/ProjectsMenu";
import Clouds from "../assets/clouds";
const Projects = ({ setBackgroundColor }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const controls = useAnimation();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.4) {
      setBackgroundColor("#f4e3d7ff");
      controls.start({ x: 0 });
    }
  });
  const backgroundColorChange = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ["#fff", "#f4e3d7ff"]
  );

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
        backgroundColor: backgroundColorChange,
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
      <ProjectsMenu />

      <motion.img
        src={Conveyor}
        style={{
          width: "100%",
          maxWidth: 1000,
          minWidth: 400,
          height: 500,
          marginTop: 500,
          right: 0,
          position: "absolute",
        }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
      />

      <div className="spacer" style={{ height: "30vh" }}></div>
    </motion.div>
  );
};

export default Projects;
