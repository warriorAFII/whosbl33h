import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import StarsParticles from "../Particles/StarsParticles";
import styles from "./styles.css";

const StarsTransition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full flex justify-center overflow-hidden-web relative"
      style={{ height: "100vh" }}
    >
      <motion.div
        style={{
          scaleX: scaleX,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 10,
          background: "blue",
          transformOrigin: "0%",
        }}
      ></motion.div>
      <div className="w-full h-screen min-h-[800px] absolute">
        <StarsParticles className="w-full h-screen z-0 min-h-[800px]" />
      </div>

      <motion.h1
        ref={ref}
        style={{
          fontFamily: "League Spartan",
          fontSize: 100,
          alignSelf: "center",
          zIndex: 1,
          background: "transparent",
          WebkitBackgroundClip: "text",
        }}
      >
        Bring your idea to reality!
      </motion.h1>
    </motion.div>
  );
};

export default StarsTransition;
