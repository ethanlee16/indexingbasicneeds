import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CreateResourcePage from "./components/CreateResourcePage";
import ShowResourcePage from "./components/ShowResourcePage";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/resource/new" component={CreateResourcePage} />
      <Route path={`/resources/:id`} component={ShowResourcePage} />
    </div>
  </Router>
);

export default App;
