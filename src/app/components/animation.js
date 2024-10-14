'use client'

import React from "react";
import { motion } from "framer-motion";

const shapes = [
  "/images/background-shape/blue-half-cycle.png",
  "/images/background-shape/green-half-cycle.png",
  "/images/background-shape/team-bg-triangle.png",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const shapeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    x: 100,
    y: -100,
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const AnimatedShapes = () => {
  return (
    <motion.div
      className="shape-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {shapes.map((shape, index) => (
        <motion.img
          key={index}
          src={shape}
          alt={`shape-${index}`}
          variants={shapeVariants}
          style={{
            position: "absolute",
            width: "100px", // Adjust size
            height: "100px", // Adjust size
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: -1,
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedShapes;
