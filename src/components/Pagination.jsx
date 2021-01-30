import React from "react";
import { Row } from "react-flexbox-grid";
import { NavLink } from "react-router-dom";

const Pagination = ({ object, path }) => {
  return (
    <Row className="pagination">
      {object.map((number) => (
        <NavLink
        className="pagination-indicator"
        activeClassName="active"
          key={number}
          to={`/${path}/${number.id}`}
        >
        </NavLink>
      ))}
    </Row>
  );
};

export default Pagination;
