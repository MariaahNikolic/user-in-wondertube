import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Button from "../../Button";

const StoryCover = () => {
  return (
    <Row className="section-cover">
      <Col xl={4} sm={6}>
        <h1 className="heading-xl">START!</h1>
        <Button param='video' />
        <strong className="yellow-accent">DISCLAIMER</strong>
        <p className="small">
          All videos, thumbnails and characters are non-fictional and based on
          real data. Any resemblance to real life is purely NOT coincidental
        </p>
      </Col>
    </Row>
  );
};

export default StoryCover;
