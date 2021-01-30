import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";
import Button from "../../Button";

const Intro = () => {
  return (
    <div className="intro-page">
      <Row middle="lg" className="section-cover">
        <Col xs={12} sm={6} md={6} lg={6}>
          <div className="intro-text body-1 yellow-background">
            <p>
              Content farms, algorithms, keywords, tracking!
              <br />
              <br />
              There are so many things that affect how we browse the internet.
              When you show interest in a topic, you are immediately recommended
              content related to that topic. Why does this happen? It’s because
              of sites tracking your online movements and, of course, the
              algorithms.
              <br />
              <br />
              It’s fine when the algorithm uses this info to provide you with a
              better browsing experience. But how often does it do the exact
              opposite?
              <br />
              <br />
              This project aims to provide insight into how content farms work
              and algorithms of online platforms such as YouTube and how
              understanding this can allow a better browsing experience.
            </p>
            <Link to="/about" className="link button-2">
              More info
            </Link>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <div className="intro-title">
            <img src="/images/title.svg" />
          </div>

          <Button src="/intro/1" />
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
