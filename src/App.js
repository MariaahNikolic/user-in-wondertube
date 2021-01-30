import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tips from "./components/view/tips/Tips";
import TipsEnd from "./components/view/tips/TipsEnd";
import Intro from "./components/view/intro/Intro";
import IntroCover from "./components/view/intro/IntroCover";
import Story from "./components/view/story/Story";
import About from "./components/view/About";
import Footer from "./components/layout/Footer";
import "./assets/styles/styles.scss";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mariah's web marketplace</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Router>
        {/* <NavBar /> */}
        <div className="content">
          <Switch>
            <Route
              path="/tips/:id?"
              render={(props) => {
                return <Tips {...props} />;
              }}
            ></Route>
            <Route path="/tips-finished">
              <TipsEnd />
            </Route>

            <Route
              path="/intro/:id?"
              render={(props) => {
                return <Intro {...props} />;
              }}
            ></Route>
          
            <Route
              path="/story/:video?"
              render={(props) => {
                return <Story {...props} />;
              }}
            ></Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <IntroCover />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
