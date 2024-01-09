import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { memoji } from "../Constants/constants";
import { introduction } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";
import CloudSvg from "../assets/clouds";
import Cloud from "../assets/cloud.png";
import Mountains from "../assets/mountains.png";
import { text } from "@fortawesome/fontawesome-svg-core";
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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <motion.div
      id="about"
      className="w-full flex justify-center overflow-hidden-web"
      style={{
        // transform: isInView ? "none" : "translateX(-1000px)",

        height: "100vh",
      }}
      ref={container}
    >
      <img
        src={Cloud}
        alt="My Image"
        style={{
          height: 150,
          width: 220,
          position: "absolute",
          marginTop: 20,
          left: 15,
        }}
      />
      <img
        src={Cloud}
        alt="My Image"
        style={{
          height: 150,
          width: 220,
          position: "absolute",

          right: 15,
        }}
      />
      <motion.h1
        style={{
          textAlign: "center",
          position: "absolute",
          fontSize: 25,
          y: textY,
          zIndex: 0,
          marginTop: 105,
        }}
      >
        UNICEF works in over 190 countries and territories to save children’s
        lives, to defend their rights, and to help them fulfil their potential,
        from early childhood through adolescence. And we never give up. UNICEF
        works in over 190 countries and territories to save children’s lives, to
        defend their rights, and to help them fulfil their potential, from early
        childhood through adolescence. And we never give up.
      </motion.h1>
      <motion.div style={{ y: textY }}>
        <img
          src={Cloud}
          alt="My Image"
          style={{
            height: 150,
            width: 220,
            position: "absolute",
            marginTop: 330,
            left: 15,
          }}
        />
      </motion.div>

      <motion.div style={{ y: backgroundY }}></motion.div>
      <img
        src={Mountains}
        alt="My Image"
        style={{
          width: "100vw",
          bottom: 0,
          zIndex: 1,
        }}
      />
      {/* Rest of the code */}
    </motion.div>
  );
};

export default About;
