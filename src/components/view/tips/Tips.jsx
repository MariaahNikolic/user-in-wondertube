import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Pagination from "../../Pagination";
import { useHistory } from "react-router-dom";
import tips from "../../../data/tips.json";
import TipsCover from './TipsCover'

const Tips = ({ match }) => {
  const history = useHistory();
  const param = Number(match.params.id);

  const nextTip = (id) => {
    history.push(id !== tips.length ? `/tips/${id + 1}` : `/finished` );
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
                        <img src={`/images/tips/${tip.image}`} />
                      </Col>
                    </Row>
                  </Col>
                )
            )
          ) : (
            <TipsCover />
          )}
        </Row>
      </Grid>
    </div>
  );
};

export default Tips;
