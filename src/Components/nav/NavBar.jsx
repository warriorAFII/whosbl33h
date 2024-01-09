/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: NavBar.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../Constants/constants";
import { bl33hIcon, close, menu } from "../../assets";
import { styles } from "../../styles.js";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the threshold as needed
      if (scrollY > 100) {
        controls.start({ opacity: 0 });
        setIsNavbarVisible(false);
      } else {
        controls.start({ opacity: 1 });
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <motion.nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
      `}
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-full h-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={bl33hIcon}
            alt={bl33hIcon}
            className="w-18 h-20 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"></p>
        </Link>
        <ul
          className="list-none hidden sm:flex flex-row gap-5"
          style={{ color: "#FFFFFF" }}
        >
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28ox] h-[28px] pbject-contain cursor-pointer z-20 "
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt={menu}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 black-gradient absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <div
              className="w-full h-full"
              style={{
                position: "absolute",
                top: -15,
                left: 0,
                width: "120%",
                height: "110%",
                zIndex: -1,
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7) )",
              }}
            ></div>
            <ul className="list-none flex justify-end items-start flex-col gap-4 text-grayscale-50">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
