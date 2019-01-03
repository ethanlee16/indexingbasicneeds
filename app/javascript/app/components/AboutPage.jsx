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

        <div className="about-page-background">
          <h1>Background</h1>
          <p>
            UC Berkeley's Basic Needs Security Committee is made up of
            undergraduate, graduate student, professional staff, faculty,
            administrators, and community experts. Our areas of focus are
          </p>

          <div className="about-page-background-numbers">
            <div className="about-page-background-number left">
              <div className="about-page-background-number-flex">
                <div className="about-page-background-number-num">1</div>
                <div className="about-page-background-number-des">
                  <h2>Basic Needs Security</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
            <div className="about-page-background-number right">2</div>
            <div className="about-page-background-number left">3</div>
            <div className="about-page-background-number right">4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
