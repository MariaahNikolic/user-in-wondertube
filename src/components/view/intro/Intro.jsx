import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";
import IntroCover from "./IntroCover";

const Intro = () => {
  return (
    <div className="intro-page">
        {/* <Row middle="lg">
          <Col xs={12} sm={6} md={6} lg={6}>
            <Link to="/">Home</Link>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Row middle="lg" end="sm">
              <Col>
                <Link to="/about"></Link>
              </Col>
            </Row>
          </Col>
        </Row> */}
        <IntroCover />
    </div>
  );
};

export default Intro;
