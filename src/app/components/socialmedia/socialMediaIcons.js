"use client"; // Add this line to ensure the component runs on the client side

import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTiktok , FaYoutube } from "react-icons/fa";

const SocialMediaIcons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredIcon, setHoveredIcon] = useState(null); // State to track hovered icon

  useEffect(() => {
    const handleScroll = () => {
      const imageSection = document.getElementById("hero-images");
      const rect = imageSection.getBoundingClientRect();
      setIsVisible(rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle hover effects
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const getIconStyle = (icon) => {
    return {
      ...styles.icon,
      color: hoveredIcon === icon ? "#a9871c" : "rgba(255, 255, 255, 0.7)", // Change color on hover
      borderColor: hoveredIcon === icon ? "#a9871c" : "rgba(255, 255, 255, 0.7)", // Change border color on hover
      transform: hoveredIcon === icon ? "scale(1.1)" : "scale(1)", // Slight zoom on hover
    };
  };

  return (
    <div style={{ ...styles.container, display: isVisible ? "flex" : "none" }}>
      <a
        href="https://www.instagram.com/lacasaproperties/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        style={getIconStyle("instagram")}
        onMouseEnter={() => handleMouseEnter("instagram")}
        onMouseLeave={handleMouseLeave}
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/LaCasaPropertiesMauritius/"
        target="_blank"
        rel="noopener noreferrer"
        style={getIconStyle("facebook")}
        onMouseEnter={() => handleMouseEnter("facebook")}
        onMouseLeave={handleMouseLeave}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.tiktok.com/@lacasaproperties"
        target="_blank"
        rel="noopener noreferrer"
        style={getIconStyle("twitter")}
        onMouseEnter={() => handleMouseEnter("twitter")}
        onMouseLeave={handleMouseLeave}
      >
        <FaTiktok  />
      </a>
      <a
        href="https://www.youtube.com/@LaCasa-Properties"
        target="_blank"
        rel="noopener noreferrer"
        style={getIconStyle("youtube")}
        onMouseEnter={() => handleMouseEnter("youtube")}
        onMouseLeave={handleMouseLeave}
      >
        <FaYoutube />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    right: "20px",
    transform: "translateY(-50%)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  icon: {
    display: "inline-block",
    padding: "7px",
    borderRadius: "50%",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "15px",
    transition: "transform 0.3s, color 0.3s, border-color 0.3s",
    textDecoration: "none",
    cursor: "pointer", // Make cursor pointer on hover
  },
};

export default SocialMediaIcons;
