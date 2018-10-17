import React from "react";
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import WhoWeAre from "images/who-we-are.png";
import OurMission from "images/our-mission.png";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="about-page-who">
          <div className="about-page-who-text">
            <h1>Who we are</h1>
            <p>
              UC Berkeley's Basic Needs Security Committee is made up of
              undergraduate, graduate student, professional staff, faculty,
              administrators, and community experts
            </p>
          </div>
          <img src={WhoWeAre} />
        </div>

        <div className="about-page-mission">
          <h1>Our Mission</h1>
          <p>
            The Basic Needs Security Committee seeks to continually build a
            sustainable network of resources to support students, from the day
            of admission to the day of graduation. All students - no matter
            their family history, race, cultural background, sexuality, or
            socioeconomic position - should be given the opportunity to thrive
            on this world-renowned campus.
          </p>
          <img src={OurMission} />
        </div>
      </div>
    );
  }
}

export default AboutPage;
