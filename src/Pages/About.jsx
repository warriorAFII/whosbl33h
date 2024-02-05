import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Cloud from "../assets/cloud.png";
import Mountains from "../assets/mountains.png";
import HotAirBalloon from "../assets/hotAirBalloon.png";
import MountainOne from "../assets/mountainTwo.jsx";
import MountainTwo from "../assets/mountainOne";
import MountainThree from "../assets/mountainThree";
import DistantMountain from "../assets/distantMountain";
import Clouds from "../assets/clouds";
const About = ({ setBackgroundColor }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.2) {
      setBackgroundColor("#2fc6ed");
    }
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0.5, 1], ["0%", "200%"]);
  const cloudOpacity = useTransform(scrollYProgress, [0.14, 0.2], [0, 1]);
  const cloudsExit = useTransform(scrollYProgress, [0.5, 1], [0, -300]);
  const hotAirBalloonY = useTransform(scrollYProgress, [0.43, 1], [0, 900]);
  const hotAirBalloonX = useTransform(scrollYProgress, [0.43, 1], [0, -400]);
  return (
    <motion.div
      id="about"
      className="w-full overflow-hidden-web"
      style={{
        paddingLeft: 50,
        paddingRight: 50,
        position: "relative",
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
      <h1 style={{ textAlign: "center", fontSize: 50 }}>What we offer! </h1>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.h1
          style={{
            textAlign: "center",
            fontSize: 22,
            zIndex: 1,
            marginTop: 70,
            position: "relative",
            // y: textY,
          }}
        >
          Discover the extraordinary with Build Blox. We specialize in crafting
          stunning User Interfaces (UI) that elevate your online presence.
          <br />
          <br />
          From e-commerce to local business websites, our services are tailored
          to meet your unique needs. <br />
          <br />
          Experience the perfect blend of creativity and functionality with our
          team. Let's bring your vision to life.
        </motion.h1>
        <motion.div
          style={{ y: hotAirBalloonY, x: hotAirBalloonX }}
          transition={{
            ease: "easeOut",
          }}
        >
          <img
            src={HotAirBalloon}
            alt="My Image"
            style={{
              zIndex: 20,
              height: 350,
              width: 800,
              position: "relative",
            }}
          />
        </motion.div>
      </div>
      <div style={{ height: "30vh" }} className="spacer"></div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mountainsContainer"
      >
        <div
          className="mountainContainer"
          style={{
            alignItems: "center",
            alignContent: "center",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: 500,
            marginTop: 10,
          }}
        >
          <h1 style={{ fontSize: 25, marginBottom: 30 }}>Branding</h1>
          <MountainOne
            width="70vh"
            height="600"
            style={{ zIndex: 1, position: "relative" }}
          />
        </div>
        <div
          className="mountainContainer"
          style={{
            alignItems: "center",
            alignContent: "center",
            zIndex: 0,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: 350,
            marginTop: 250,
          }}
        >
          <DistantMountain
            width="70vh"
            height="600"
            style={{ zIndex: 1, position: "relative" }}
          />
        </div>

        <div
          className="mountainContainer"
          style={{
            alignItems: "center",
            alignContent: "center",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: 25, marginBottom: 30 }}>
            Web/App Development
          </h1>
          <MountainTwo
            width="70vh"
            height="600"
            style={{ zIndex: 1, position: "relative" }}
          />
        </div>
        <div
          className="mountainContainer"
          style={{
            alignItems: "center",
            alignContent: "center",
            zIndex: 0,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: 380,
            marginTop: 250,
          }}
        >
          <DistantMountain
            width="70vh"
            height="600"
            style={{ position: "relative", zIndex: 1 }}
          />
        </div>
        <div
          className="mountainContainer"
          style={{
            alignItems: "center",
            alignContent: "center",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: 500,
            marginTop: 10,
          }}
        >
          <h1 style={{ fontSize: 25, marginBottom: 30 }}>Marketing</h1>
          <MountainThree
            width="70vh"
            height="600"
            style={{ zIndex: 1, position: "relative" }}
          />
        </div>
      </div>

      <motion.div
        style={{ position: "absolute", bottom: 0, left: 0, y: cloudsExit }}
      >
        <Clouds
          width="100%"
          height="300"
          style={{ zIndex: 20, position: "relative", top: 2, opacity: 0.1 }}
        />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          y: cloudsExit,
          zIndex: 20,
          top: 1500,
        }}
      >
        <Clouds
          width="100%"
          height="300"
          style={{ zIndex: 20, position: "absolute" }}
        />
        <div
          style={{
            backgroundColor: "white",
            width: "100vh",
            height: 500,

            position: "relative",
          }}
        ></div>
      </motion.div>

      {/* Rest of the code */}
    </motion.div>
  );
};

export default About;
