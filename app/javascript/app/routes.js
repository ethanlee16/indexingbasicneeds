import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageLayout from "./components/PageLayout";
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
      <Route path="/" component={() => window.scrollTo(0, 0) || null} />
      <Switch>
        <PageLayout exact path="/" component={HomePage} />
        <PageLayout path="/about" component={AboutPage} />
        <PageLayout path="/get_involved" component={GetInvolvedPage} />
        <PageLayout path="/calendar" component={CalendarPage} />
        <PageLayout path="/learn" component={LearnPage} />
        <PageLayout path="/donate" component={DonatePage} />
        <PageLayout path="/faq" component={FAQPage} />
        <PageLayout path="/guides" component={WorkInProgressPage} />
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
