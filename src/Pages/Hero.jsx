import { useState, useEffect } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";
import HeroScroller from "../Components/elements/HeroScroller";
import { avatar, avatarFallOutline } from "../assets";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageVariantFirst = {
    initial: { y: 0 },
    animate: { y: -scrollY / 5 },
    exit: { y: 0 },
  };

  const imageVariantSecond = {
    initial: { y: 0 },
    animate: { y: -scrollY / 7 },
    exit: { y: 100 },
  };

  const clipPathValueFirst = `inset(0 0 ${scrollY}px 0)`;

  return (
    <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
        >
          <style>{`.clip-path-first { clip-path: ${clipPathValueFirst}; }`}</style>
          <HeroText />

          <div
            className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-transparent to-black"
          />
          <m.img
            src={avatar}
            alt="hero"
            className="clip-path-first"
            layout="fill"
            objectFit="cover"
            quality={100}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imageVariantFirst}
          />
          <m.img
            src={avatarFallOutline}
            style={{ position: "absolute", top: 27, left: 105, scale: 0.5 }}
            layout="fill"
            objectFit="cover"
            quality={100}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imageVariantSecond}
          />
          <HeroParticles />
        </m.div>
        <HeroScroller />
      </LazyMotion>
    </div>
  );
};

export default Hero;