import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import ReactPlayer from "react-player";

const Tips = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [progressTracking, setProgressTracking] = useState(0);
  const player = useRef();
  const bar = document.getElementById('progress-bar'); 

  useEffect(() => {
      if (bar) {
        bar.value = (player.current.getCurrentTime() / player.current.getDuration()) * 100
      }

  }, [progressTracking]);

   bar && bar.addEventListener('mouseup', e => {
    player.current.seekTo(
        player.current.getDuration() * (parseFloat(e.target.value) / 100)
    )});

  return (
    <Row id="story-page">
      <Col xl={12} sm={12}>
        <div className="player-wrapper">
          <ReactPlayer
            playing={!isPaused}
            ref={player}
            id={"react-player"}
            url={"https://vimeo.com/506071868"}
            onProgress={(loadedSeconds) => {
              setProgressTracking(loadedSeconds);
            }}
            controls={false}
          />
        </div>
      </Col>
      <Col xl={12} sm={12} className="progress-bar-wrapper">
          <div id="separator1" />
          <div id="separator2" />
        <input
          type="range"
          id={"progress-bar"}
          min="1" max="100"
        />
      </Col>
      <div md={2} className="controls">
        <button
          onClick={() => {
            setIsPaused(!isPaused);
          }}
        >
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
    </Row>
  );
};

export default Tips;
