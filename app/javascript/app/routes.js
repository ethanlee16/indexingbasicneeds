import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResourceIndexPage from "./components/ResourceIndexPage";
import CreateResourcePage from "./components/CreateResourcePage";
import UpdateResourcePage from "./components/UpdateResourcePage";
import ShowResourcePage from "./components/ShowResourcePage";
import AboutPage from "./components/AboutPage";

import "./assets/stylesheets/app";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={ResourceIndexPage} />
      <Route path="/about" component={AboutPage} />

      <Switch>
        <Route path="/resource/new" component={CreateResourcePage} />
        <Route path={`/resources/:id/edit`} component={UpdateResourcePage} />
        <Route path={`/resources/:id`} component={ShowResourcePage} />
        <Route path="/resources" component={ResourceIndexPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
