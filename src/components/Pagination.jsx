import React from "react";
import { Row, Col } from "react-flexbox-grid";

const Pagination = ({ perPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  console.log("kurac", perPage, totalPosts)

  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Row className="pagination">
      {pageNumbers.map(number => (
        <Col key={number}>
          <a
            href="#"
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default Pagination;
