import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import StarsParticles from "../Particles/StarsParticles";
import styles from "./styles.module.css";
import HotAirBalloon from "../../assets/hotAirBalloon.png";

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
    rotate: i % 2 === 0 ? [-5, 5, 0] : [5, -5.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: randomDuration(),
    },
  }),
  reset: {
    rotate: 0,
  },
};

const StarsTransition = ({ style, setBackgroundColor }) => {
  const controls = useAnimation();

  const textContainer = useRef(null);
  const paragraph = "Bring your idea to reality!";
  const { scrollYProgress } = useScroll({
    target: textContainer,
    offset: ["end end", "end 0.6"],
  });

  const starsOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  const starsShake = useTransform(
    scrollYProgress,
    [0, 0.1, 0.6, 1],
    [0, 10, -10, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.07) {
      setBackgroundColor("#000d36");
    } else {
      setBackgroundColor("#fdc269");
    }

    if (latest === 1) {
      controls.start("start");
    } else {
      controls.stop();
    }
  });

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
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full flex justify-center overflow-hidden-web relative"
        style={{ height: "100vh", ...style }}
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

        <p className={styles.paragraph} ref={textContainer}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
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
