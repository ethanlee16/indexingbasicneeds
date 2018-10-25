import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CreateResourcePage from "./components/CreateResourcePage";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/resources/create" component={CreateResourcePage} />
    </div>
  </Router>
);

export default App;
