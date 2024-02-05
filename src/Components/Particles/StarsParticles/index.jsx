import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const StarsParticles = () => {
  let isInitialized = false;

  const particlesInit = useCallback(async (main) => {
    if (!isInitialized) {
      await loadFull(main);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback((container) => {
    // You can add additional logic here if needed
  }, []);

  return (
    <Particles
      width="100vw"
      height="100vh"
      id="stars"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {},
            resize: true,
          },

          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",

            enable: true,
            opacity: 0.5,
            width: 1,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "star",
          },
          size: {},
        },
        detectRetina: true,
        fullScreen: { enable: false },
      }}
    ></Particles>
  );
};

export default StarsParticles;
