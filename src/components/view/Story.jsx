import React, { useState, useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import ReactPlayer from "react-player";
import useDynamicRefs from "use-dynamic-refs";
import { Link } from "react-router-dom";
import videos from "../../data/videos.json";

const Tips = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [progress, setProgress] = useState({
    0: 0,
    1: 0,
    2: 0,
    
  });
  const [getVideoRef, setVideoRef] = useDynamicRefs();
  const [trigger, setTrigger] = useState(false);
  const [barValue, setBarValue] = useState();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setNewTime(currentVideo);
  }, [trigger]);

  const setNewTime = (id) => {
    let player = getVideoRef(`player_${id}`);

    if (player) {
      if (player.current) {
        const progressPercentage =
          (player.current.getCurrentTime() / player.current.getDuration()) *
          100;
        const newTime =
          player.current.getDuration() * (parseFloat(barValue) / 100);
        player.current.seekTo(newTime);

        // console.log(
        //   "progress",
        //   document.getElementById(`progress-bar-${id}`).value
        // );
        // console.log("newTime", newTime);
        // console.log("============================================");

        setProgress({
          ...progress,
          [id]: progressPercentage,
        });
      }
    }
  };

  return (
    <div className="story-page">
      <Row>
        {videos &&
          videos.map((video) => (
            <Col key={video.id} xl={12} sm={12}>
              <div
                className="player-wrapper"
                className={video.id === currentVideo ? "show" : "hide"}
              >
                <ReactPlayer
                  playing={
                    video.id === currentVideo && !isPaused ? true : false
                  }
                  ref={setVideoRef(`player_${video.id}`)}
                  controls={true}
                  id={`react-player-${video.id}`}
                  url={video.src}
                  //controls={false}
                />
              </div>
            </Col>
          ))}
      </Row>
      <Row className='progress-bar-wrapper'>
        <Col md={12}>
          <Row>
            {videos &&
              videos.map((video) => (
                <Col key={video.id} xl={4} sm={4}>
                    {console.log('kurac', progress)}
                  <input
                    type="range"
                    id={`progress-bar-${video.id}`}
                    value={progress[video.id]  || 0}
                    onChange={(e) => {
                      setCurrentVideo(video.id);
                      setTrigger(!trigger);
                      setBarValue(e.currentTarget.value);
                    }}
                  />
                </Col>
              ))}
          </Row>    
        </Col>

        <Col md={12}>
          <Row>
            <Col md={2}>
              <button
                onClick={() => {
                  setIsPaused(true);
                }}
              >
                Pause
              </button>
              <button
                onClick={() => {
                  setIsPaused(false);
                }}
              >
                play
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Tips;
