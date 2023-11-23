import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

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
                        onHover: {
                            
                        },
                        resize: true,
                    },
                    move: {
                        direction: 'up', // Set the initial direction
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 0.2, // Adjust the speed for a slow hover effect
                        straight: false,
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
                    size: {
                       
                    },
                },
                detectRetina: true,
            }}
        />
  );
};

export default StarsParticles;