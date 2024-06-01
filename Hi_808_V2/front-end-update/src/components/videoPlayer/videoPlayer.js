import React from 'react';

import './videoPlayer.css';

const VideoPlayer = (props) => {

  return (
    <section className="videoPlayer">
      <iframe
        src={props.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen="1"
      ></iframe>
    </section>
  );
};

export default VideoPlayer;
