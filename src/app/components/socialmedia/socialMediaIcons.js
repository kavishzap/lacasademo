"use client"; // Add this line to ensure the component runs on the client side

import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const SocialMediaStatic = () => {
  const iconStyle = {
    display: "inline-block",
    padding: "12px", // Padding inside the circle
    borderRadius: "50%", // Make the icon circular
    border: "2px solid rgba(255, 255, 255, 0.7)", // Light border
    color: "rgba(255, 255, 255, 0.7)", // Icon color
    fontSize: "24px", // Icon size
    transition: "transform 0.3s, color 0.3s, border-color 0.3s", // Smooth transitions
    textDecoration: "none", // Remove underline
    cursor: "pointer", // Pointer on hover
  };

  return (
    <div style={styles.container}>
      <a
        href="https://www.instagram.com/lacasaproperties/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/LaCasaPropertiesMauritius/"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.tiktok.com/@lacasaproperties"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.youtube.com/@LaCasa-Properties"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <FaYoutube />
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", // Align icons horizontally
    justifyContent: "center", // Center the icons horizontally
    alignItems: "center", // Align icons vertically
    gap: "20px", // Space between icons
  },
};

export default SocialMediaStatic;
