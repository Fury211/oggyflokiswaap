import React from 'react';
import YouTube from 'react-youtube';

const VideoPresentation = () => {
    const videoOptions = {
        width: '100%',
      };
      const videoId = 'ZUzS_30CD98'; 
  return (
    <div className="video-presentation-container">
    <div className="video-wrapper">
      <YouTube videoId={videoId} opts={videoOptions} />
    </div>
    <div className="video-info">
      <h2>Exploring the Oggy Floki Project</h2>
      <p>
        Join us on a journey through the Oggy Floki project. Discover the features, meet the
        characters, and get a glimpse of the exciting adventures that await you in the Oggy Floki
        universe.
      </p>
    </div>

    
  </div>
  );
};

export default VideoPresentation;
