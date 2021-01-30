import React from "react";
import IntroCover from "./IntroCover";
import { Row, Col } from "react-flexbox-grid";
import Pagination from "../../Pagination";
import { useHistory } from "react-router-dom";
import introPages from "../../../data/intro.json";

const Intro = ({ match }) => {
  const history = useHistory();
  const param = Number(match.params.id);

  const nextTip = (id) => {
    history.push(id !== introPages.length ? `/intro/${id + 1}` : `/story`);
  };

  const prevTip = (id) => {
    history.push(`/intro/${id - 1}`);
  };

  return param ? (
    <div className="intro-page">
      {introPages.map(
        (page) =>
          param === page.id && (
            <Row key={page.id} className="intro-page">
              <Col sm={1} xl={1} className="arrows">
                {page.id > 1 && (
                  <a onClick={() => prevTip(page.id)}>
                    <img src="/images/icons/arrow-left.svg" />
                  </a>
                )}
              </Col>
              <Col sm={10} xl={10} className="intro-content">
                <Row center="xl" center="xs">
                  <Col>
                    {page.text1 && <p className="heading-md">{page.text1}</p>}
                    {page.bigText && (
                      <h2 className="heading-xl yellow-background">
                        {page.bigText}
                      </h2>
                    )}
                    {page.text2 && <p className="heading-md">{page.text2}</p>}
                    {page.mediumText && (
                      <h3 className="heading-lg">
                        {page.mediumText}{" "}
                        <span className="yellow-accent">{page.accent}</span>
                        {page.mediumText2 && page.mediumText2}
                      </h3>
                    )}
                    {page.id === 6 && (
                      <div className="credits">
                        <h2 className="heading-xl yellow-background">
                          STARRING
                        </h2>
                        <div className="credits-actors">
                          <img src="/images/chat.png" />
                        </div>
                      </div>
                    )}
                  </Col>
                </Row>
              </Col>
              <Col sm={1} xl={1} className="arrows">
                <a onClick={() => nextTip(page.id)}>
                  <img src="/images/icons/arrow-right.svg" />
                </a>
              </Col>
            </Row>
          )
      )}

      {/* PAGINATION */}
      <Pagination object={introPages} path="intro" />
    </div>
  ) : (
    <IntroCover />
  );
};

export default Intro;
