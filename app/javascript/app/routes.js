import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResourceIndexPage from "./components/ResourceIndexPage";
import CreateResourcePage from "./components/CreateResourcePage";
import UpdateResourcePage from "./components/UpdateResourcePage";
import ShowResourcePage from "./components/ShowResourcePage";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import CalendarPage from "./components/CalendarPage";
import LearnPage from "./components/LearnPage";
import WorkInProgressPage from "./components/WorkInProgressPage";
import GetInvolvedPage from "./components/GetInvolvedPage";
import DonatePage from "./components/DonatePage";
import FAQPage from "./components/FAQPage";

import "./assets/stylesheets/app";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/get_involved" component={GetInvolvedPage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/learn" component={LearnPage} />
      <Route path="/donate" component={DonatePage} />
      <Route path="/faq" component={FAQPage} />

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
