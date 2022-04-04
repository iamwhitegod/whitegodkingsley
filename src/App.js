import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
