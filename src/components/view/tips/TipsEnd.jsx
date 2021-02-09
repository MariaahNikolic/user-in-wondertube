import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

const TipsEnd = () => {
  return (
    <Row id="tips-end" className="section-cover">
      <Col xl={12}>
        <h2>
          <span>HURRAY!</span>
          <br />
          HAPPY BROWSING!
        </h2>
      </Col>
      <Col xl={12}>
        <Link to="/" className="link button-3">
          Back to home
        </Link>
      </Col>
    </Row>
  );
};

export default TipsEnd;
