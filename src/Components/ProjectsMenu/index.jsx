import React, { useState } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { bl33hIcon } from "../../assets";
import { Link } from "react-router-dom";
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
            <motion.div
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
              <Link to="/KratsiaAi">Kratsia.Ai</Link>
            </motion.div>
            <motion.div
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
              <Link to="/Tranquiliti">Tranquiliti</Link>
            </motion.div>
            <motion.div
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
              <Link to="/PocketMosque">Pocket Mosque</Link>
            </motion.div>
            <motion.div
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
              <Link to="/Coder">Coder JS</Link>
            </motion.div>
            <motion.div
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
              <Link to="/Q-UP">Q-UP</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsMenu;
