import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Cloud from "../assets/cloud.png";
import HotAirBalloon from "../assets/hotAirBalloon.jsx";
import Clouds from "../assets/clouds";
import AllMountains from "../assets/AllMountain";

const About = ({ setBackgroundColor }) => {
  const container = useRef(null);
  const mountains = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.2) {
      setBackgroundColor("#2fc6ed");
    }
  });

  const backgroundColorChange = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["#fff", "#f4e3d7ff"]
  );

  // const textY = useTransform(scrollYProgress, [0.5, 1], ["0%", "200%"]);

  const cloudOpacity = useTransform(scrollYProgress, [0.14, 0.2], [0, 1]);
  const cloudsExit = useTransform(scrollYProgress, [0.6, 1], [-0, -500]);
  const MountainsY = useTransform(scrollYProgress, [0.6, 1], [0, 400]);
  const hotAirBalloonY = useTransform(scrollYProgress, [0.43, 1], [0, 1900]);
  const hotAirBalloonX = useTransform(scrollYProgress, [0.43, 1], [0, -400]);
  const hotAirBalloonRotate = useTransform(
    scrollYProgress,
    [0.43, 0.6],
    [10, 0]
  );

  return (
    <motion.div
      id="about"
      className="w-full overflow-hidden-web"
      style={{
        // transform: isInView ? "none" : "translateX(-1000px)",
        position: "relative",
        height: "160vh",
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
              width: 150,
              left: 15,
            }}
          />
        </motion.div>
        <motion.div style={{ opacity: cloudOpacity }}>
          <img
            src={Cloud}
            alt="My Image"
            style={{
              height: 100,
              width: 150,
            }}
          />
        </motion.div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1
          style={{
            fontSize: 90,
            marginTop: 100,
            lineHeight: 1,
            paddingLeft: 50,
          }}
        >
          What do <br /> we offer!{" "}
        </h1>

        <motion.div
          style={{
            y: hotAirBalloonY,
            x: hotAirBalloonX,
            marginLeft: 150,
            rotate: hotAirBalloonRotate,
          }}
          transition={{
            ease: "easeOut",
          }}
        >
          <HotAirBalloon width="20vh" height="300" />
        </motion.div>
      </div>
      <motion.h1
        style={{
          fontSize: 22,
          zIndex: 1,
          paddingLeft: 70,
          position: "relative",
          marginTop: 20,
          fontWeight: 600,
          fontFamily: "Sofia Pro, sans-serif",
          // y: textY,
        }}
      >
        Discover the extraordinary with Build Blox. We specialize in crafting
        stunning User Interfaces (UI) that elevate your online presence.
        <br />
        <br />
        From e-commerce to local business websites, our services are tailored to
        meet your unique needs. <br />
        <br />
        Experience the perfect blend of creativity and functionality with our
        team. Let's bring your vision to life.
      </motion.h1>

      <div style={{ height: "30vh" }} className="spacer"></div>

      <motion.div
        style={{
          display: "flex",
          position: "absolute", // Change this to absolute
          bottom: 0,
          y: MountainsY,
          width: "100vw",
          maxHeight: 500,
          justifyContent: "center", // Center horizontally
          zIndex: 1, // Adjust the zIndex as needed
        }}
        className="mountainsContainer"
        ref={mountains}
      >
        <AllMountains />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          minHeight: 500,
          zIndex: 20,
          bottom: -380,
          // y: cloudsExit,
          width: "100vw",
        }}
      >
        <Clouds
          style={{ zIndex: 20, position: "relative" }}
          backgroundColorChange={backgroundColorChange}
        />

        <motion.div
          style={{
            backgroundColor: backgroundColorChange,
            width: "105vw",
            height: 100,
            position: "relative",
          }}
        ></motion.div>
      </motion.div>
      {/* Rest of the code */}
    </motion.div>
  );
};

export default About;
