import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";

const IntroEnd = () => {
  return (
    <div id="intro-end" className="section-cover">
      <h1>START!</h1>
      <Link to="/intro/1">
        <img src="/images/icons/YT-button.svg" />
      </Link>

      <strong>DISCLAIMER</strong>
      <p>
        All videos, thumbnails and characters are non-fictional and based on
        real data. Any resemblance to real life is purely NOT coincidental
      </p>
    </div>
  );
};

export default IntroEnd;
