import React from 'react';
import video from './background.mp4'; 

const BackgroundVideo = () => {
  return (
    <div className="video-wrapper">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
