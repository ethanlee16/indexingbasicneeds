import React from "react";
import { Button, H1 } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

class CalendarPage extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Navbar />
        <H1>Calendar</H1>
        <br />
        <iframe
          src="https://calendar.google.com/calendar/embed?src=berkeley.edu_o1rslfc34v1vp6cdispb0bb6pk%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          width="1000"
          height="640"
          frameborder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default CalendarPage;
