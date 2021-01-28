import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Grid } from "react-flexbox-grid";

const Intro = () => {
  return (
    <div className="intro-page">
      <Grid>
        <Row middle="lg">
          <Col xs={12} sm={6} md={6} lg={6}>
            <Link to="/">Home</Link>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Row middle="lg" end="sm">
              <Col>
                <Link to="/about">About</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Intro;
