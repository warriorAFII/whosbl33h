import React, { useRef, useState, useEffect } from "react";
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
  const [hotAirBalloonScale, setHotAirBalloonScale] = useState({});

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.15) {
      setBackgroundColor("#2fc6ed");
    }
  });

  const backgroundColorChange = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["#fff", "#f4e3d7ff"]
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let scale = 1;
      let top = 300;
      let right = 200;

      if (width < 1468 && width > 900) {
        //medium screen
        top = 100;
      } else if (width < 1300) {
        // small screen
        scale = 0.8;
        top = 0;
        right = 0;
      } else {
        // large screen
        scale = 1.5;
      }

      setHotAirBalloonScale({ top, scale, right });
    };

    handleResize(); // Initial call to set initial state based on window size
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);
  const cloudOpacity = useTransform(scrollYProgress, [0.14, 0.2], [0, 1]);
  const cloudsExit = useTransform(scrollYProgress, [0.6, 1], [-0, -500]);
  const MountainsY = useTransform(scrollYProgress, [0.78, 1], [0, 400]);
  const hotAirBalloonY = useTransform(scrollYProgress, [0.23, 1], [0, 3200]);
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
              marginLeft: 100,
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
              marginRight: 150,
            }}
          />
        </motion.div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1 className="text-6xl sm:text-8xl mt-32 leading-none pl-28 md:text-left text-center">
          What do we <br />
          offer!{" "}
        </h1>

        <motion.div
          style={{
            y: hotAirBalloonY,
            x: hotAirBalloonX,
            marginLeft: 150,
            position: "absolute",

            ...hotAirBalloonScale,
            rotate: hotAirBalloonRotate,
          }}
          transition={{
            ease: "easeOut",
          }}
        >
          <HotAirBalloon width="20vh" height="300" />
        </motion.div>
      </div>
      <motion.h1 className="text-[22px] mt-5 pl-40 relative lg:w-[1000px]">
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
      <h1 className="text-4xl sm:text-6xl mt-32 leading-none pl-12 md:text-left text-center">
        Web/App Development
      </h1>
      <h1 className="pl-20 mt-5 text-[22px] lg:w-[1000px]">
        We specialize in cutting-edge web and app development solutions tailored
        to meet your unique needs. <br />
        <br />
        Whether you're looking to establish your online presence, streamline
        business processes, or engage customers through intuitive mobile
        applications, <br />
        <br />
        our team of skilled developers is dedicated to bringing your vision to
        life.
      </h1>
      <img
        src={Cloud}
        alt="My Image"
        style={{
          height: 100,
          width: 150,
          right: 50,
          position: "absolute",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",

          flexDirection: "column",
        }}
      >
        <div>
          <h1 className="text-4xl sm:text-6xl mt-[4em] ml-[-16px] md:text-left text-center ">
            Branding
          </h1>
          <h1 className="text-[22px] " style={{ width: 1000 }}>
            Our branding services cover everything from logo design to brand
            strategy, ensuring that your identity is both memorable and
            authentic.
            <br />
            <br />
            By understanding your values and target audience, we create cohesive
            brand identities that resonate and differentiate. <br />
            <br />
            Elevate your brand's presence and forge lasting connections with our
            expert guidance.
          </h1>
        </div>
      </div>
      <img
        src={Cloud}
        alt="My Image"
        style={{
          height: 100,
          width: 150,
          left: 50,
          position: "absolute",
        }}
      />
      <h1 className="text-4xl sm:text-6xl mt-32 leading-none pl-12 mt-[4em]">
        Marketing
      </h1>
      <h1 className="mb-[15em] text-[22px] pl-20 mt-5" style={{ width: 1000 }}>
        We strive to maximize your reach and impact with our marketing
        expertise. <br />
        <br />
        From digital campaigns to strategic planning, we tailor our approach to
        amplify your message and drive results. <br />
        <br />
        With a focus on data-driven strategies and creative innovation, we help
        you navigate the ever-evolving landscape of marketing channels to
        achieve your goals efficiently and effectively.
      </h1>
      <img
        src={Cloud}
        alt="My Image"
        style={{
          height: 100,
          width: 150,
          right: 50,
          position: "absolute",
        }}
      />
      <img
        src={Cloud}
        alt="My Image"
        style={{
          height: 100,
          width: 150,
          left: 50,

          position: "absolute",
        }}
      />
      <motion.div
        style={{
          display: "flex",
          y: MountainsY,
          width: "100vw",
          maxHeight: 500,
          justifyContent: "center", // Center horizontally
          zIndex: 1, // Adjust the zIndex as needed
          minWidth: 600,
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
      </motion.div>
      {/* Rest of the code */}
    </motion.div>
  );
};

export default About;
