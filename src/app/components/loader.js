'use client';

import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center"
      }}
    >
      {/* Bouncing Image */}
      <motion.img
        src="/images/image.png" // Replace with your image path
        alt="Loading"
        animate={{ y: [0, -30, 0] }} // Bounce effect with keyframes
        transition={{
          repeat: Infinity, // Infinite bounce
          duration: 0.6, // Speed of the bounce
          ease: "easeInOut" // Smooth easing for bouncing
        }}
        style={{ width: "100px", height: "100px" }} // Adjust size as needed
      />
    </div>
  );
}
