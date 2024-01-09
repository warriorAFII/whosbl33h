import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import StarsParticles from "../Particles/StarsParticles";
import styles from "./styles.module.css";
import HotAirBalloon from "../../assets/hotAirBalloon.png";
const StarsTransition = ({ style, setBackgroundColor }) => {
  const textContainer = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "start start"],
  // });
  const paragraph = "Bring your idea to reality!";
  const { scrollYProgress } = useScroll({
    target: textContainer,
    offset: ["end end", "end 0.3"],
  });
  // change background color at right time
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest >= 0.07 && latest < 1) {
      setBackgroundColor("#000d36");
    } else if (latest === 1) {
      setBackgroundColor("#2fc6ed");
    } else {
      setBackgroundColor("#fdc269");
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
        <motion.span style={{ opacity: opacity }}>{children}</motion.span>
      </span>
    );
  };

  const starsOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  const starsShake = useTransform(scrollYProgress, [0, 0.1], [0, 10]);

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
            x: starsShake, // Apply the shake effect to the x-axis
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
