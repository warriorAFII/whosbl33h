import React, { useState } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { bl33hIcon } from "../../assets";
function ProjectsMenu() {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  const moduleURL = new URL(import.meta.url);

  //lets start animation
  const item = {
    exit: {
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.8,
      },
    },
  };

  return (
    <div className="container">
      <div
        className="menu"
        onClick={isOpen}
        style={{
          marginTop: 120,
          marginLeft: 30,
          backgroundColor: "#aa6161",
          width: 150,
          color: "white",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>View Projects</h1>
        <i className="fa fa-arrow-circle-right"></i>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <img src={bl33hIcon} alt={bl33hIcon} className="logo" />
            <div className="btn_close" onClick={closeMenu}>
              X
            </div>
            <motion.a
              href="/Pages/ProjectScreens/kratsia-ai"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              Kratsia.Ai
            </motion.a>
            <motion.a
              href=""
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              Tranquiliti
            </motion.a>
            <motion.a
              href=""
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              Pocket Mosque
            </motion.a>
            <motion.a
              href=""
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              Coder JS
            </motion.a>
            <motion.a
              href=""
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              Q-UP
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsMenu;
