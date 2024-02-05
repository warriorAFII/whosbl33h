import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import StarsParticles from "../Particles/StarsParticles";
import styles from "./styles.module.css";
import Rating from "../../assets/explodingAssets/rating.png";
import One from "../../assets/explodingAssets/1.png";
import Three from "../../assets/explodingAssets/3.png";
import Four from "../../assets/explodingAssets/4.png";
import Five from "../../assets/explodingAssets/5.png";
import Six from "../../assets/explodingAssets/6.png";
import Notification from "../../assets/explodingAssets/Notifications.png";
const getRandomTransformOrigin = () => {
  const value = (16 + 40 * Math.random()) / 100;
  const value2 = (15 + 36 * Math.random()) / 100;
  return {
    originX: value,
    originY: value2,
  };
};

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.07 + 0.23;

const variants = {
  start: (i) => ({
    rotate: i % 2 === 0 ? [-6, 6, 0] : [6, -6.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: 0.4,
    },
  }),
  reset: {
    rotate: 0,
  },
};

const StarsTransition = ({ style, setBackgroundColor }) => {
  const controls = useAnimation();
  const [showImage, setShowImage] = useState(false);
  const [showTextShake, setShowTextShake] = useState(false);
  const textContainer = useRef(null);
  const container = useRef(null);
  const paragraph = "Bring your idea to reality!";
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const starsOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.8, 1],
    [0, 1, 1, 0]
  );
  const textProgress = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.35, 0.4, 0.51],
    [0, 0.25, 0.5, 0.75, 1]
  );

  const starsSlideOut = useTransform(scrollYProgress, [0.6, 0.9], [0, -100]);
  // change background color
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.3) {
      setBackgroundColor("#000d36");
    } else {
      setBackgroundColor("#fdc269");
    }
  });

  useMotionValueEvent(textProgress, "change", (latest) => {
    (async () => {
      if (latest === 1 && !showTextShake) {
        setShowTextShake(true);
        setShowImage(true);
        setTimeout(() => {
          setShowTextShake(false);
        }, 1500); // Set the timeout for 2 seconds
      }

      // if (latest === 1) {
      //   setTimeout(() => {
      //     setShowImage(true);
      //   }, 1000); // Set the timeout for 2 seconds
      // }
    })();
  });

  useEffect(() => {
    if (showTextShake) {
      controls.start("start");
    } else {
      controls.stop();
    }
  }, [showTextShake]);

  const words = paragraph.split(" ");

  const Word = ({ children, progress, range }) => {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className={styles.word}>
        {children.split("").map((char, i) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;

          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  };

  const Char = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
      <span>
        <span className={styles.shadow}>{children}</span>
        <motion.span
          style={{
            opacity: opacity,
            display: "inline-block",
            ...getRandomTransformOrigin(),
          }}
          variants={variants}
          animate={controls}
        >
          {children}
        </motion.span>
      </span>
    );
  };

  return (
    <div>
      <motion.div
        ref={container}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full flex justify-center overflow-hidden-web relative"
        style={{ height: "100vh", ...style, y: starsSlideOut }}
      >
        <motion.div
          className="w-full h-full absolute top-0 left-0 z-1"
          style={{
            opacity: starsOpacity,

            // Apply the shake effect to the x-axis
          }}
          animate={{
            x: 0, // Ensure the stars return to their original position after shaking
          }}
        >
          <StarsParticles />
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 0, x: 0, rotate: 40 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          animate={showImage ? { opacity: 1, x: -250, y: -300, rotate: 0 } : {}}
          //whileHover={{ y: 180 }}
          src={Rating}
          height={100}
          style={{
            height: 60,
            position: "absolute",
            alignSelf: "center",
          }}
        />
        <motion.img
          initial={{ opacity: 0, y: 0, x: 0, rotate: 60 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          animate={showImage ? { opacity: 1, x: 220, y: -200, rotate: 0 } : {}}
          //whileHover={{ y: 180 }}
          src={Notification}
          height={150}
          style={{
            height: 70,
            position: "absolute",
            alignSelf: "center",
          }}
        />

        <motion.img
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          animate={showImage ? { opacity: 1, x: 200, y: 150 } : {}}
          //whileHover={{ y: 180 }}
          src={Four}
          height={100}
          style={{
            height: 60,
            position: "absolute",
            alignSelf: "center",
          }}
        />

        <motion.img
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          animate={showImage ? { opacity: 1, x: -200, y: 180 } : {}}
          //whileHover={{ y: 180 }}
          src={Three}
          height={100}
          style={{
            height: 60,
            position: "absolute",
            alignSelf: "center",
          }}
        />
        <motion.img
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          animate={showImage ? { opacity: 1, x: 200, y: 300 } : {}}
          //whileHover={{ y: 180 }}
          src={Five}
          height={100}
          style={{
            height: 110,
            position: "absolute",
            alignSelf: "center",
          }}
        />

        <motion.img
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          animate={showImage ? { opacity: 1, x: -150, y: -120 } : {}}
          //whileHover={{ y: 180 }}
          src={Six}
          height={100}
          style={{
            height: 60,
            position: "absolute",
            alignSelf: "center",
          }}
        />

        <p className={styles.paragraph} ref={textContainer}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={textProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </motion.div>
    </div>
  );
};

export default StarsTransition;
