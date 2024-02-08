import * as React from "react";
import { motion } from "framer-motion";
const Clouds = ({ height, width, backgroundColorChange, ...props }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    {...props}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    width={width}
    {...props}
    viewBox="0 0 354.328 109.246"
  >
    <motion.path
      d="M24.55 64.246s11.622 20.41 29.298 4.2c0 0 18.359 16.6 33.789-4.786 0 0 25.39 6.348 25.39-18.555 0 0-1.367-16.796-22.754-14.648 0 0-.39-12.402-11.816-14.844-11.426-2.441-17.871 5.078-17.871 5.078S54.238 9.754 39.59 11.023c-14.649 1.27-17.676 19.141-17.676 19.141S2.48 27.625.723 48.426c0 0 3.125 20.312 23.828 15.82zM139.828 99.325s11.621 20.41 29.297 4.2c0 0 18.36 16.601 33.79-4.786 0 0 25.39 6.348 25.39-18.554 0 0-1.368-16.797-22.754-14.649 0 0-.39-12.402-11.817-14.844-11.425-2.441-17.87 5.079-17.87 5.079s-6.348-10.938-20.997-9.668c-14.648 1.27-17.676 19.14-17.676 19.14S117.758 62.704 116 83.505c0 0 3.125 20.312 23.828 15.82z"
      style={{
        display: "inline",
        fill: backgroundColorChange,
        fillOpacity: 1,
        strokeWidth: 0.321,
      }}
    />
    <motion.path
      d="M63.828 101.325s11.621 20.41 29.297 4.2c0 0 18.36 16.601 33.79-4.786 0 0 25.39 6.348 25.39-18.554 0 0-1.368-16.797-22.754-14.649 0 0-.39-12.402-11.817-14.844-11.425-2.441-17.87 5.079-17.87 5.079s-6.348-10.938-20.997-9.668c-14.648 1.27-17.676 19.14-17.676 19.14S41.758 64.704 40 85.505c0 0 3.125 20.312 23.828 15.82zM247.328 101.325s11.621 20.41 29.297 4.2c0 0 18.36 16.601 33.79-4.786 0 0 25.39 6.348 25.39-18.554 0 0-1.368-16.797-22.754-14.649 0 0-.39-12.402-11.817-14.844-11.425-2.441-17.87 5.079-17.87 5.079s-6.348-10.938-20.997-9.668c-14.648 1.27-17.676 19.14-17.676 19.14s-19.433-2.539-21.191 18.262c0 0 3.125 20.312 23.828 15.82z"
      style={{
        display: "inline",
        fill: backgroundColorChange,
        fillOpacity: 1,
        strokeWidth: 0.321,
      }}
    />
    <motion.path
      d="M94.548 59.3s11.62 20.41 29.297 4.2c0 0 18.359 16.6 33.789-4.786 0 0 25.39 6.348 25.39-18.555 0 0-1.367-16.796-22.754-14.648 0 0-.39-12.402-11.816-14.844-11.426-2.441-17.871 5.078-17.871 5.078s-6.348-10.937-20.996-9.668C94.938 7.347 91.91 25.218 91.91 25.218S72.477 22.679 70.72 43.48c0 0 3.125 20.312 23.828 15.82z"
      style={{
        display: "inline",
        fill: backgroundColorChange,
        fillOpacity: 1,
        strokeWidth: 0.321,
      }}
    />
    <motion.path
      d="M185.078 70.575s11.621 20.41 29.297 4.2c0 0 18.36 16.601 33.79-4.786 0 0 25.39 6.348 25.39-18.554 0 0-1.368-16.797-22.754-14.649 0 0-.39-12.402-11.817-14.844-11.425-2.441-17.87 5.079-17.87 5.079s-6.348-10.938-20.997-9.668c-14.648 1.27-17.676 19.14-17.676 19.14s-19.433-2.539-21.191 18.262c0 0 3.125 20.312 23.828 15.82z"
      style={{
        display: "inline",
        fill: backgroundColorChange,
        fillOpacity: 1,
        strokeWidth: 0.321,
      }}
    />
    <motion.path
      d="M264.328 67.825s11.621 20.41 29.297 4.2c0 0 18.36 16.601 33.79-4.786 0 0 25.39 6.348 25.39-18.554 0 0-1.368-16.797-22.754-14.649 0 0-.39-12.402-11.817-14.844-11.425-2.441-17.87 5.079-17.87 5.079s-6.348-10.938-20.997-9.668c-14.648 1.27-17.676 19.14-17.676 19.14s-19.433-2.539-21.191 18.262c0 0 3.125 20.312 23.828 15.82z"
      style={{
        display: "inline",
        fill: backgroundColorChange,
        fillOpacity: 1,
        strokeWidth: 0.321,
      }}
    />
  </motion.svg>
);
export default Clouds;
