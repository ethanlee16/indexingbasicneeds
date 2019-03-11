import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResourceIndexPage from "./components/ResourceIndexPage";
import CreateResourcePage from "./components/CreateResourcePage";
import UpdateResourcePage from "./components/UpdateResourcePage";
import ShowResourcePage from "./components/ShowResourcePage";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import CalendarPage from "./components/CalendarPage";
import WorkInProgressPage from "./components/WorkInProgressPage";

import "./assets/stylesheets/app";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={WorkInProgressPage} />
      <Route path="/get_involved" component={WorkInProgressPage} />
      <Route path="/calendar" component={CalendarPage} />

      <Switch>
        <Route path="/guides" component={WorkInProgressPage} />
      </Switch>

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
