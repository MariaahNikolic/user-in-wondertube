import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Button from "../../Button";

const TipsCover = () => {
  return (
    // Intro page for chapter 4
    <Row className="section-cover">
      <Col xs={4} sm={4} md={4} lg={4}>
        <h1 className="heading-xl">
          <span className="red-accent">TIPS </span>FOR USERS
        </h1>
        <p className="body-1">
          It’s tricky to always filter content online. But don’t worry! Here are
          some steps you can take to navigate through content you like and
          prevent falling down a rabbit hole.
        </p>
        <Button src="/tips/1" />
      </Col>
    </Row>
  );
};

export default TipsCover;
