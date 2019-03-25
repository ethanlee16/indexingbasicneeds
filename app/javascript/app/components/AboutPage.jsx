import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import about_banner from "images/About_1.jpg";
import about_center from "images/About_2_Our Center.jpg";
import about_background from "images/About_3_Background.jpg";
import sara from "images/About_4_Sara_Tsai.jpg";
import vikrem from "images/About_5_Vikrem_Padda.jpg";
import stella from "images/About_6_Stella_Zhu.jpg";
import kiyoko from "images/About_7_Kiyoko_Thomas.jpg";
import sally from "images/About_9_Sally_Liang.jpg";
import ibrahim from "images/About_10_Ibrahim_Ramoul.jpg";
import meg from "images/About_11_Meg_Prier.jpg";
import ruben from "images/About_12_Ruben_Canedo.jpg";
import karina from "images/About_13_Karina_Candela.jpg";
import maria from "images/About_14_Maria_Balcazar_Tellez.jpg";
import about_food_supp from "images/About_14_Food Support.jpg";
import about_housing from "images/About_15_Housing_Support.jpg";
import about_econ from "images/About_16_Economic_Support.jpg";
import about_faq from "images/About_17_FAQ.jpg";
import ucb_wide from "images/UCB_Wide.png";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Container */}
        <div className="about-page-container is-widescreen">
          <img className="about-banner" src={about_banner} />
          {/* BNS Center  */}

          <div className="about-page-center">
            <div className="center-block">
              <div className="left">
                <div className="about-page-center-text">
                  <h1>Our Center</h1>
                  <p>
                    The Basic Needs Center serves as a physical resource hub for
                    basic needs resources and services. The Basic Needs Center
                    serves as a space for students to create community and
                    access coordinated basic needs services. We are committed to
                    cultivate wellness and belonging in the Basic Needs Center
                    space.
                  </p>

                  <p>
                    <b>Location:</b> Lower level of MLK Student Union (BNorth),
                    Suite 72 <br />
                    <b>Mailing Address:</b> 2495 Bancroft Way, Suite 72,
                    Berkeley CA 94720-4500 <br />
                    <b>Open Hours: </b>Monday - Friday, 9 AM - 5 PM. Our
                    center’s hours will be extended throughout the semester.{" "}
                    <br />
                  </p>
                  <br />

                  <Link to="https://ucberkeleybasicneeds.youcanbook.me/">
                    <Button
                      large
                      className="button-primary"
                      intent={Intent.PRIMARY}
                      text="Book Appointment"
                    />
                  </Link>
                </div>
              </div>

              <div className="right">
                <img className="about-img" src={about_center} />
              </div>
            </div>
          </div>

          {/* BNS Background  */}
          <div className="about-page-background ">
            <div className="about-page-background-text">
              <h1>Background</h1>
            </div>
            <div className="right">
              <img className="about-img" src={about_background} />
            </div>
            <div className="about-page-background-text">
              <p>
                Basic Needs Security refers to the food, housing, and economic
                security of our community. We understand that basic needs have a
                direct impact on the mental-emotional-physical health, wellness,
                academic performance, professional development, and holistic
                success of students.
              </p>
              <p>
                The quality of life of our students has a major impact on their
                sense of belonging, persistence, graduation, and overall
                experience. Therefore, we refuse to accept hunger,
                malnourishment, and homelessness as part of our university.
              </p>
              <p>
                Basic Needs is committed to accomplishing food, housing and
                economic justice on the UC Berkeley campus through a robust
                model of prevention, intervention and emergency relief efforts.
                Our goal is to ensure that UC Berkeley is a Basic Needs Secure
                campus. Our prevention efforts thus far have included
                pre-college education, first year student outreach and messaging
                around Basic Needs, as well as Basic Needs skill development
                such as NST 20 lecture, and nutrition and cooking demonstration.
                Emergency interventions include the UC Berkeley Food Pantry
                which provides emergency food relief. Crisis interventions
                include the Food Assistance Program which provides eligible
                students with financial support for food, as well as the
                Emergency Housing Support program.
              </p>

              <p>
                {" "}
                <b>UC System Basic Needs Model</b>{" "}
              </p>
              <img className="ucb-wide" src={ucb_wide} alt="Img" />
            </div>
          </div>
          {/* Our Team  */}
          <div className="about-page-team ">
            <h1>Our Basic Needs Village</h1>
            <div className="about-page-team-container">
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={kiyoko}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3> Kiyoko Thomas</h3>
                      <p className="about-page-team-description">
                        Basic Needs Manager (Case Management &amp; Operations)
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={ruben}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3>Ruben Canedo</h3>
                      <p className="about-page-team-description">
                        Basic Needs Committee Chair{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src={meg} alt="Img" />
                    <div className="about-page-team-text-container">
                      <h3>Meg Prier</h3>
                      <p className="about-page-team-description">
                        Basic Needs Manager (Food)
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={karina}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3> Karina Candela</h3>
                      <p className="about-page-team-description">
                        Photography &amp; Videography Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={sally}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3>Sally Liang</h3>
                      <p className="about-page-team-description">
                        Finance Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={vikrem}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3>Vikrem Padda</h3>
                      <p className="about-page-team-description">
                        {" "}
                        CalFresh Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={stella}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3>Stella Zhu</h3>
                      <p className="about-page-team-description">
                        Food Pantry Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={ibrahim}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3>Ibrahim Ramoul</h3>
                      <p className="about-page-team-description">
                        Basic Needs Farms and Gardens Coordinator{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img
                      className="about-page-team-img"
                      src={maria}
                      alt="Img"
                    />
                    <div className="about-page-team-text-container">
                      <h3>Maria Balcazar Tellez</h3>
                      <p className="about-page-team-description">
                        Graduate Student Researcher
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src={sara} alt="Img" />
                    <div className="about-page-team-text-container">
                      <h3>Sara Tsai</h3>
                      <p className="about-page-team-description">
                        Basic Needs Farms and Gardens Coordinator{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* End of Team Container */}
            </div>
          </div>
          {/* Areas of Focus */}
          <div className="about-page-focus ">
            <div className="about-page-focus-text">
              <h1>Areas of Focus</h1>
            </div>
            <div className="about-page-focus-text">
              <p>
                UC Berkeley's Basic Needs Security Committee is made up of
                undergraduate, graduate student, professional staff, faculty,
                administrators, and community experts.{" "}
              </p>
              <p>Our areas of focus are:</p>
            </div>
            {/* Container for Focus */}
            <div className="about-page-focus-container">
              {/* row */}
              <div className="about-page-focus-row">
                {/* column */}

                <div className="about-page-focus-card">
                  <div className="left-img">
                    <img className="about-focus-img" src={about_food_supp} />
                  </div>
                  <div className="about-page-focus-text-container">
                    <h3>Food Support</h3>
                    <br />
                    <p className="about-page-focus-description">
                      Food support refers to the provision of food or financial
                      support to purchase food in emergency situations or to
                      provide longer-term solutions in areas where food
                      resources are limited. A goal of food support is to create
                      food security – a situation in which people need not be
                      vulnerable to hunger and starvation.
                      <br />
                      <br />
                      Food insecurity refers to the limited or uncertain
                      availability of safe and nutritionally adequate foods; or
                      limited or uncertain ability to obtain such food in a
                      socially acceptable manner. In its most extreme form,
                      known as hunger, individuals can experience physiological
                      conditions such as uneasiness and pain.
                    </p>
                  </div>
                </div>

                <div className="about-page-focus-card">
                  <img className="about-focus-img" src={about_housing} />
                  <div className="about-page-focus-text-container">
                    <h3>Housing Support</h3>
                    <br />
                    <p className="about-page-focus-description">
                      Housing support refers to assistance to enable individuals
                      secure and maintain suitable housing or shelter.
                      <br />
                      <br />
                      Homelessness means that a student does not have a stable,
                      reliable, or permanent place to live, often residing in a
                      shelter, automobile, motel, a public facility, or an
                      abandoned building or outside. Housing insecurity refers
                      to a broader set of challenges that could include the
                      inability to pay rent or utilities, need to move
                      frequently, or residing in a place where personal safety
                      or health is compromised.
                    </p>
                  </div>
                </div>

                {/* row */}

                <div className="about-page-focus-card">
                  <img className="about-focus-img" src={about_econ} />
                  <div className="about-page-focus-text-container">
                    <h3>Economic Support</h3>
                    <br />
                    <p className="about-page-focus-description">
                      Economic support refers financial security of having
                      stable and predictable income or other resources to
                      support a standard of living now and in the foreseeable
                      future.
                      <br />
                      <br />
                      Financial insecurity refers to the inability for students
                      to access financial resources to be a successful student,
                      or find the resources to gain financial literacy, such as
                      educational materials to understand what resources are
                      available and where to receive additional support.
                    </p>
                  </div>
                </div>
              </div>

              {/* End of Container Div */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
