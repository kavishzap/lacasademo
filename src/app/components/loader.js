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
      {/* Spinning Image */}
      <motion.img
        src="/images/image.png" // Replace with your image path
        alt="Loading"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear"
        }}
        style={{ width: "100px", height: "100px" }} // Adjust size as needed
      />

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
      >
        Loading...
      </motion.div>
    </div>
  );
}
