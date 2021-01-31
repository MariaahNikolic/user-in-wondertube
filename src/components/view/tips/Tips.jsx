import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Pagination from "../../Pagination";
import { useHistory } from "react-router-dom";
import tips from "../../../data/tips.json";
import TipsCover from "./TipsCover";

const Tips = ({ match }) => {
  const history = useHistory();
  const param = Number(match.params.id);

  const nextTip = (id) => {
    history.push(id !== tips.length ? `/tips/${id + 1}` : `/tips-finished`);
  };

  const prevTip = (id) => {
    history.push(`/tips/${id - 1}`);
  };

  return (
    <div className="tips-page">
      {param ? (
        <>
          {tips.map(
            (tip) =>
              param === tip.id && (
                <Row key={tip.id} className="tip">
                  <Col sm={1} xl={1} className="arrows">
                    {tip.id > 1 && (
                      <a onClick={() => prevTip(tip.id)}>
                        <img src="/images/icons/arrow-left.svg" />
                      </a>
                    )}
                  </Col>
                  <Col sm={10} xl={10} className="tips-window-wrapper">
                    <Row className="tips-window">
                      <Col xs={12} xl={12} className="tips-window-header">
                        <img src="/images/icons/dots.svg" />
                      </Col>
                      <Row>
                        <Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={6}
                          xl={6}
                          className="tips-image"
                        >
                          <img src={`/images/tips/${tip.image}`} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                          <h2 className="heading-xl-light">
                            {tip.id < 10 ? `0${tip.id}` : tip.id}
                          </h2>
                          <p className="body-2 tip-content">{tip.content}</p>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col sm={1} xl={1} className="arrows">
                    <a onClick={() => nextTip(tip.id)}>
                      <img src="/images/icons/arrow-right.svg" />
                    </a>
                  </Col>
                </Row>
              )
          )}

          {/* PAGINATION */}
          <Pagination object={tips} path="tips" />
        </>
      ) : (
        <TipsCover />
      )}
    </div>
  );
};

export default Tips;
