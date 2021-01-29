import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";

const TipsCover = () => {
  return (
    // Intro page for chapter 4
    <Row>
      <Col xs={4} sm={4} md={4} lg={4} className="section-cover">
        <p>Chapter 4</p>
        <h2>Tips for users</h2>
        <p>
          It’s tricky to always filter content online. But don’t worry! Here are
          some steps you can take to navigate through content you like and
          prevent falling down a rabbit hole.
        </p>
        <Link to="/tips/1">
          <img src="/images/icons/YT-button.svg" />
        </Link>
      </Col>
    </Row>
  );
};

export default TipsCover;
