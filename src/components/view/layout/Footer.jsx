import React from "react";
import { Row, Col } from "react-flexbox-grid";

const Footer = () => {
  return (
    <Row id="footer">
      <Col md={8}>
        <Row className="bar-buttons">
          <Col className="bar-btn">
            <Link to="/intro">Intro</Link>
          </Col>
          <Col className="bar-btn">
            <Link to="/story">Story</Link>
          </Col>{" "}
          <Col className="bar-btn">
            <Link to="/tips">Tips</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
