import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ResourceIndexPage from "./components/ResourceIndexPage";
import CreateResourcePage from "./components/CreateResourcePage";
import ShowResourcePage from "./components/ShowResourcePage";
import AboutPage from "./components/AboutPage";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/resources" component={ResourceIndexPage} />
      <Route path="/resource/new" component={CreateResourcePage} />
      <Route path={`/resources/:id`} component={ShowResourcePage} />
      <Route path="/about" component={AboutPage} />

    </div>
  </Router>
);

export default App;
