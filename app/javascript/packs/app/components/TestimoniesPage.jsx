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
        <div className="about-page-banner">
          Insert image here
        </div>

        <div className="about-page-center">
          <div className="about-page-who-center">
            <div className="about-center">
              <div className="about-underline">
                <h1>Our Center</h1>
              </div>
            </div>
            <p>Location: 12345 MLK Way, Berkeley, CA. Open Hours: Monday - Friday, 9 AM - 9 PM </p>
            <p>The Basic Needs Center serves as a physical resource hub for basic needs resources. The Basic Needs Committee supports food, housing, and economic justice of those in our campus community.

            Feel free to walk in or book an appointment with the Basic Needs Case Manager, the Basic Needs Financial Aid Assitance, or with County Workers.
              </p>


            <button className="about-page-button-1">Book Appointment</button>
          </div>
          {/* <img src={WhoWeAre} /> */}
        </div>

        <div className="about-page-background">
          <div className="about-heading">
            <div className="about-underline">
              <h1>Background</h1>
            </div>
          </div>
          <p>
            Basic Needs Security refers to the food, housing, and wellness security of our community. We understand that basic needs have a direct impact on the mental-emotional-physical health, wellness, academic performance, professional development, and holistic success of our students.

            The quality of life of our students, has a major impact on their sense of belonging, persistence, graduation, and overall experience.  Therefore, we refuse to accept hunger, malnourishment, and homelessness as part of our university.

            UC Berkeley's Basic Needs Security Committee is fully dedicated to leading the transformation of UC Berkeley into a basic needs secure institution of higher education.
          </p>
          <img className="about-fit" src={OurMission} />
        </div>

        <div className="about-page-team">

          <div className="about-page-team-column">


            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>

            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>

            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>


            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>










          </div>



          <div className="about-page-team-column">


            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>

            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>

            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>


            <div className="about-page-team-member">
              <div className="about-page-image">
              </div>

              <div className="about-page-team-text">
                <div className="about-page-team-name">
                  First Last
                </div>
                <div className="about-page-team-position">
                  Position
                </div>
                <div className="about-page-team-biography">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </div>
              </div>
            </div>










          </div>









        </div>

        <div className="about-page-areas-of-focus">
          <div className="about-heading">
            <div className="about-underline">
              <h1>Our Areas of Focus</h1>
            </div>
          </div>



          <p>
            UC Berkeley's Basic Needs Security Committee is made up of undergraduate, graduate student, professional staff, faculty, administrators, and community experts.  Our areas of focus are:</p>
          <br></br><br></br>

          <p>
            Our areas of focus are:
              </p>

          <div className="about-page-areas-of-focus-cards">

            <div className="row">
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

              <div className="about-page-background-number right">
                <div className="about-page-background-number-flex">
                  <div className="about-page-background-number-num">2</div>
                  <div className="about-page-background-number-des">
                    <h2>Preventative Institution Model</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                      </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="about-page-background-number left">
                <div className="about-page-background-number-flex">
                  <div className="about-page-background-number-num">3</div>
                  <div className="about-page-background-number-des">
                    <h2>Structural Engagement</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-page-background-number right">
                <div className="about-page-background-number-flex">
                  <div className="about-page-background-number-num">4</div>
                  <div className="about-page-background-number-des">
                    <h2>Advocacy: Local, State, and National</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                      </p>
                  </div>
                </div>
              </div>
            </div>



          </div>


        </div>





      </div>




    );
  }
}

export default TestimoniesPage;