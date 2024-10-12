import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={styles.videoContainer}>
      <video 
        src="/videos/intro.mp4" 
        autoPlay 
        loop 
        muted // Muted to allow autoplay on most browsers
        style={styles.videoPlayer} 
      />
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
};

export default VideoPlayer;
