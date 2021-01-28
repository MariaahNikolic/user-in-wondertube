import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Pagination from "../Pagination";
import { useHistory, Link } from "react-router-dom";
import tips from "../../data/tips.json";

const Tips = ({ match }) => {
  const history = useHistory();
  const param = Number(match.params.id);

  const nextTip = (id) => {
    history.push(`/tips/${id + 1}`);
  };

  const prevTip = (id) => {
    history.push(`/tips/${id - 1}`);
  };

  return (
    <div className="tips-page">
      <Grid>
        <Row>
          {param ? (
              tips.map(
                (tip) =>
                param === tip.id && (
                  <Col key={tip.id}>
                    <Row>
                      <Col xs={12} sm={12} md={4} lg={4}>
                        <a onClick={() => prevTip(tip.id)}>Prev</a>

                        <h2>{tip.id}</h2>
                        <p>{tip.content}</p>
                        <a onClick={() => nextTip(tip.id)}>Next</a>

                        {/* <Pagination /> */}
                        </Col>
                      <Col xs={12} sm={12} md={8} lg={8}>
                        <img src={`./images/${tip.image}`} />
                      </Col>
                    </Row>
                  </Col>
                )
            )
          ) : (
            // Intro page for chapter 4
            <Col xs={12} sm={12} md={8} lg={8}>
              <p>Chapter 4</p>
              <h2>Tips for users</h2>
              <p>
                It’s tricky to always filter content online. But don’t worry!
                Here are some steps you can take to navigate through content you
                like and prevent falling down a rabbit hole.
              </p>
              <Link to="/tips/1">
                LINK
                <img src="" />
              </Link>
            </Col>
          )}
        </Row>
      </Grid>
    </div>
  );
};

export default Tips;
