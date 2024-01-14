import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

import Cloud from "../assets/cloud.png";
import Mountains from "../assets/mountains.png";

const About = ({ setBackgroundColor }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   if (latest === 1) {
  //     setBackgroundColor("#2fc6ed");
  //   }
  // });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0.5, 1], ["0%", "200%"]);
  const cloudOpacity = useTransform(scrollYProgress, [0.14, 0.2], [0, 1]);
  console.log(scrollYProgress);
  return (
    <motion.div
      id="about"
      className="w-full overflow-hidden-web"
      style={{
        height: "100vh",

        // transform: isInView ? "none" : "translateX(-1000px)",
      }}
      ref={container}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <motion.div style={{ opacity: cloudOpacity }}>
          <img
            src={Cloud}
            alt="My Image"
            style={{
              height: 100,
              width: 220,
              marginTop: 20,
              left: 15,

              paddingLeft: 100,
            }}
          />
        </motion.div>
        <motion.div style={{ opacity: cloudOpacity }}>
          <img
            src={Cloud}
            alt="My Image"
            style={{
              height: 130,
              width: 200,
              marginTop: 50,
            }}
          />
        </motion.div>
      </div>
      <h1 style={{ textAlign: "center", fontSize: 50 }}>What we offer! </h1>
      <motion.h1
        style={{
          textAlign: "center",
          fontSize: 22,
          zIndex: 1,
          marginTop: 70,
          y: textY,
          position: "relative",
          paddingRight: 100,
          paddingLeft: 100,
        }}
      >
        Discover the extraordinary with Build Blox. We specialize in crafting
        stunning User Interfaces (UI) that elevate your online presence. From
        e-commerce to local business websites, our services are tailored to meet
        your unique needs. Experience the perfect blend of creativity and
        functionality with our team. Let's bring your vision to life.
      </motion.h1>

      <motion.div style={{ y: backgroundY }}></motion.div>
      <img
        src={Mountains}
        alt="My Image"
        style={{
          width: "100vw",
          marginTop: 100,
          zIndex: 20,
          height: 500,
          position: "relative",
        }}
      />
      {/* Rest of the code */}
    </motion.div>
  );
};

export default About;
