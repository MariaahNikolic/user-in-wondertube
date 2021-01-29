import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Row id="footer">
      <Col md={8}>
        <div className="bar-buttons">
          <NavLink to="/intro" activeClassName="active">
            Intro
          </NavLink>

          <NavLink to="/story" activeClassName="active">
            Story
          </NavLink>

          <NavLink to="/tips" activeClassName="active">
            Tips
          </NavLink>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
