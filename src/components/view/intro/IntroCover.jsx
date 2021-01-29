import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";

const Intro = () => {
  return (
    <Row middle="lg" className="section-cover">
      <Col xs={12} sm={6} md={6} lg={6} className="intro-text">
        <p>
          Content farms, algorithms, keywords, tracking! There are so many
          things that affect how we browse the internet. When you show interest
          in a topic, you are immediately recommended content related to that
          topic. Why does this happen? It’s because of sites tracking your
          online movements and, of course, the algorithms. It’s fine when the
          algorithm uses this info to provide you with a better browsing
          experience. But how often does it do the exact opposite? This project
          aims to provide insight into how content farms work and algorithms of
          online platforms such as YouTube and how understanding this can allow
          a better browsing experience.
        </p>
        <Link to="/about">More info</Link>
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
        <img src="/images/title.png" />
        <Link to="/intro/1">
          <img src="/images/icons/YT-button.svg" />
        </Link>
      </Col>
    </Row>
  );
};

export default Intro;
