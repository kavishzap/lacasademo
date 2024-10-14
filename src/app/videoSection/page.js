'use client'
import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility of video section
  const [isFullScreen, setIsFullScreen] = useState(false); // Track fullscreen status

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility when the video section is in view
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handlePlayFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play video
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen(); // Trigger fullscreen
      }
      setIsFullScreen(true); // Mark as fullscreen
    }
  };

  const handleExitFullScreen = () => {
    // Check if the document is in fullscreen before exiting
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsFullScreen(false); // Mark as not fullscreen
  };

  return (
    <div style={styles.videoContainer}>
      <video
        ref={videoRef} // Ensure the ref is applied to the video element
        src="/videos/intro.mp4"
        muted
        style={styles.videoPlayer}
      />
      {isVisible && !isFullScreen && (
        <button style={styles.fullScreenButton} onClick={handlePlayFullScreen}>
          Play Fullscreen
        </button>
      )}
      {isFullScreen && (
        <button style={styles.exitButton} onClick={handleExitFullScreen}>
          Exit Fullscreen
        </button>
      )}
    </div>
  );
};

const styles = {
  videoContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  videoPlayer: {
    width: '100%',
    height: 'auto',
  },
  fullScreenButton: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  exitButton: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default VideoPlayer;
