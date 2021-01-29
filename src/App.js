import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tips from "./components/view/tips/Tips";
import TipsEnd from "./components/view/tips/TipsEnd";
import Intro from "./components/view/intro/Intro";
import Story from "./components/view/Story";
import Home from "./components/view/Home";
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
              <Route path="/tips/:id?" render={(props) => {
                    return ( <Tips {...props } /> )
                }}>
              </Route>
              <Route path="/finished">
                <TipsEnd />
              </Route>
              <Route path="/intro">
                <Intro />
              </Route>
              <Route path="/story">
                <Story />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
