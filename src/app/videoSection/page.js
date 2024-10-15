"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility of video section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Show the video container
          handlePlayVideo(); // Play the video
        } else {
          setIsVisible(false); // Hide the video container
          handlePauseVideo(); // Pause the video
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute video
      videoRef.current.play(); // Play video
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video
      videoRef.current.muted = true; // Mute video when not visible
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ scale: 0.5, opacity: 0, borderRadius: "10%" }} // Initial "drop" effect
      animate={{
        scale: isVisible ? 1 : 0.5,
        opacity: isVisible ? 1 : 0,
        borderRadius: isVisible ? "8px" : "10%", // Droplet animation
      }}
      transition={{
        duration: 1, // Smooth and slower animation duration
        ease: [0.42, 0, 0.58, 1], // Custom easing for smoother effect (ease-in-out)
      }}
      style={styles.videoContainer}
    >
      <video
        ref={videoRef} // Ensure the ref is applied to the video element
        src="/videos/intro.mp4"
        style={styles.videoPlayer}
        muted // Initially muted
      />
    </motion.div>
  );
};

const styles = {
  videoContainer: {
    position: "relative",
    width: "100%", // Full width of the viewport or container
    maxWidth: "1600px", // Increase the max width for larger video display
    height: "auto",
    margin: "0 auto", // Center the container horizontally
    overflow: "hidden",
    
  },
  videoPlayer: {
    width: "100%", // Make the video fill the container width
    height: "auto",
  },
};

const mediaQueryStyles = `
  @media (max-width: 768px) {
    .videoContainer {
      width: 100vw; // Full viewport width
      height: 100vh; // Full viewport height
    }
    
    .videoPlayer {
      width: 100%; // Full width for the video
      height: 100%; // Full height for the video
    }
  }
`;

export default function VideoPlayerWithStyles() {
  return (
    <>
      <style>{mediaQueryStyles}</style>
      <VideoPlayer />
    </>
  );
}
