import React from "react";
import { Button, H1 } from "@blueprintjs/core";

import Navbar from "./common/Navbar";

class CalendarPage extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Navbar />
        <H1>Calendar</H1>
        <p>
          Stay updated on Basic Needs events held in our Basic Needs Center and
          on campus.
        </p>
        <br />
        <iframe
          src="https://calendar.google.com/calendar/embed?src=berkeley.edu_cjl3p43bc08bac4n9uk3ehdk54%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          width="1000"
          height="640"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default CalendarPage;
