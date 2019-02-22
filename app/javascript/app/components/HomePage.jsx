import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";

import Logo from "images/bnc-logo-white.png";
import ValuesImage from "images/home-background.png";
import Ruben from "images/team-ruben.jpg";
import Undergrad from "images/home-undegrad.png";
import Staff from "images/home-staff.png";
import Grad from "images/home-grad.png";
import Center from "images/home-ourcenter-2.png";
import Donate from "images/home-donate.png";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container home-page">
        <Navbar />
        {/* Landing Block */}
        <div className="home-page-banner-overlay">
          <div className="home-page-landing block">
            <h1 className="white-text">Basic Needs Center</h1>
            <div className="home-page-row">
              <div className="home-page-landing-text">
                <p className="white-text">
                  Founded in Spring 2019, the Basic Needs Center serves as a
                  physical resource hub for basic needs resources. The Basic
                  Needs Committee supports the food, housing, and economic
                  justice of those in our campus community.
                </p>
                <br />
                <div className="btn-row">
                  <Link to="/resources">
                    <Button
                      large
                      className="button-primary"
                      intent={Intent.PRIMARY}
                      text="Our Resource Index"
                      style={{ marginRight: "10px" }}
                    />
                  </Link>
                  <Link to="/">
                    <Button
                      large
                      className="button-primary"
                      intent={Intent.PRIMARY}
                      text="Frequently Asked Questions"
                    />
                  </Link>
                </div>
              </div>
              {/* <div className="home-page-left-img">
              <img className="home-page-logo" src={Logo} alt="logo" />
            </div> */}
            </div>
          </div>
        </div>

        {/* Background Block */}
        <div className="home-page-background block">
          <h1>Our Vision, Our Mission, Our Values</h1>
          <div className="home-page-background-text">
            <p>
              Basic Needs Security refers to the food, housing, and wellness
              security of our community. We understand that basic needs have a
              direct impact on the wellness, mental-emotional-physical health,
              academic performance, professional development, and holistic
              success of our students. UC Berkeley's Basic Needs Security
              Committee is fully dedicated to leading the transformation of UC
              Berkeley into a basic needs secure institution of higher
              education.
            </p>
            <br />
            <Link to="/">
              <Button
                large
                className="button-primary"
                intent={Intent.PRIMARY}
                text="Meet the BNS Village"
              />
            </Link>
          </div>
          <img className="home-values" src={ValuesImage} alt="values" />
        </div>

        {/* Resource Index Block */}
        <div className="home-page-resource-index block">
          <div className="home-page-resource-text">
            <h1>Our Resource Index</h1>
            <p>
              UC Berkeley's Basic Needs Security Committee is made up of
              undergraduate, graduate student, professional staff, faculty,
              administrators, and community experts.{" "}
            </p>
            <p>Our areas of focus are:</p>
          </div>

          <div className="home-page-resource-cards">
            <div className="home-page-resource-card">
              <div className="card-img">
                <img
                  className="home-page-student"
                  src={Undergrad}
                  alt="Undergraduate"
                />
              </div>

              <div className="card-container">
                <p className="card-text">Undergraduate Student</p>
              </div>
            </div>

            <div className="home-page-resource-card">
              <div className="card-img">
                <img className="home-page-student" src={Grad} alt="Graduate" />
              </div>
              <div className="card-container">
                <p className="card-text">Graduate / Professional Student</p>
              </div>
            </div>

            <div className="home-page-resource-card">
              <div className="card-img">
                <img className="home-page-student" src={Staff} alt="Staff" />
              </div>
              <div className="card-container">
                <p className="card-text">Service Worker / Staff</p>
              </div>
            </div>
          </div>
          <Link
            to="/resources"
            style={{ margin: "0px auto", marginTop: "32px" }}
          >
            <Button
              large
              className="button-primary"
              intent={Intent.PRIMARY}
              text="Search all resources"
            />
          </Link>
        </div>

        {/* BNS Center Block */}

        <div className="home-page-center block">
          <div className="home-page-center-text">
            <h1 className="white-text">Our Center</h1>
          </div>

          <div className="home-page-center-text">
            <p className="white-text">Location: 12345 MLK Way, Berkeley, CA</p>
            <p className="white-text">
              Open Hours: Monday - Friday, 9 AM - 9 PM
            </p>
            <p className="white-text">
              The Basic Needs Center serves as a physical resource hub for basic
              needs resources. The Basic Needs Committee supports food, housing,
              and economic justice of those in our campus community. Feel free
              to walk in or book an appointment with the Basic Needs Case
              Manager, the Basic Needs Financial Aid Assitance, or with County
              Workers.
            </p>
            <br />
            <Link to="/">
              <Button
                large
                className="button-primary"
                intent={Intent.PRIMARY}
                text="Book Appointment"
              />
            </Link>
          </div>

          <div className="home-page-left-img">
            <img className="home-page-center" src={Center} alt="Center" />
          </div>
        </div>

        {/* Student Testimonies */}

        <div className="home-page-testimonies block">
          <div className="home-page-testimonies-text">
            <h1>Student Testimonies</h1>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dsint occaecat cupidatat
              non proident
            </p> */}
          </div>

          <div className="home-page-testimony-cards">
            <div className="home-page-testimony-card">
              <div className="card-img">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>

              <div className="card-test-container">
                <p className="card-test-text">
                  CalFresh improved the quality of my college life tremendously.
                  Once I received my EBT card, I stopped having to worry about
                  how I’d afford my next meal, and could instead focus on how I
                  would ace my next midterm. No university student should have
                  to prioritize food or shelter above their education, and
                  CalFresh is making this a reality for many students. CalFresh
                  has mitigated my stress tenfold and I am eternally grateful. -
                  Devin, Class of 2018
                </p>
              </div>
            </div>

            <div className="home-page-testimony-card">
              <div className="card-img">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>
              <div className="card-test-container">
                <p className="card-test-text">
                  I was struggling to make ends meet during the last month of
                  spring semester and suffered from food insecurity everyday. I
                  had no idea when my next meal was going to be and I was too
                  afraid to ask for help. After some guidance from my EOP
                  counselor, I was connected to the Financial Aid Scholarships
                  and Food Assistance Program. Within one day of emailing them,
                  I was supplied with additional funds to my student account.
                  Without this program, I would have continued to suffer in
                  silence. This program is crucial to students coming from
                  low-income homes and I'm grateful for the assistance I was
                  provided in my time of need. - Anonymous, Class of 2019
                </p>
              </div>
            </div>

            <div className="home-page-testimony-card">
              <div className="card-img">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>
              <div className="card-test-container">
                <p className="card-test-text">
                  How many times have you heard the phrase, "I can't afford to
                  eat healthily?" In addition to interacting with my peers,
                  crafting scrumptious recipes, and having a good time, I was
                  also able to walk away with a new outlook on cooking and
                  nutrition. I no longer associate nutritionally adequate foods
                  with being expensive, monotonous and inaccessible. This class
                  has taught me how to utilize ingredients more effectively and
                  creatively--often resulting in unique and tasty flavor
                  profiles. - Kevin Soun, Fall 2017
                </p>
              </div>
            </div>
          </div>

          <Link to="/" style={{ margin: "0 auto", marginTop: "50px" }}>
            <Button
              large
              className="button-primary"
              intent={Intent.PRIMARY}
              text="Read our stories"
            />
          </Link>
        </div>

        {/* Donate */}
        <div className="home-page-donate block">
          <h1 style={{ width: "100%" }}>Donate to Basic Needs Security</h1>
          <div className="home-page-right">
            <div
              className="home-page-donate-text"
              style={{
                borderBottom: "1px #C4C4C4 solid",
                marginBottom: "32px",
              }}
            >
              <p>
                Your contribution will go to help transform UC Berkeley into a
                basic needs secure institution.
              </p>

              <Link to="/" style={{ display: "block", marginTop: "24px" }}>
                <Button
                  large
                  className="button-primary"
                  intent={Intent.PRIMARY}
                  text="Donate now"
                />
              </Link>
              <br />
            </div>

            <div className="home-page-donate-label">Donate By Mail</div>

            <div className="home-page-donate-info">
              <div className="row">
                <div className="donate-by-mail left">
                  <div className="info">Check to:</div>
                </div>
                <div className="donate-by-mail right">
                  <div className="info">UC Berkeley Foundation</div>
                </div>
              </div>

              <div className="row">
                <div className="donate-by-mail left">
                  <div className="info">Memo:</div>
                </div>
                <div className="donate-by-mail right">
                  <div className="info">Basic Needs</div>
                </div>
              </div>

              <div className="row">
                <div className="donate-by-mail left">
                  <div className="info">Address:</div>
                </div>
                <div className="donate-by-mail right">
                  <div className="info">
                    University of California, Berkeley, Gift Services 1995
                    University Ave, Ste 40, Berkeley, CA 94704-1070
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img className="home-donate-image" src={Donate} />
        </div>

        {/* End of Container */}
      </div>
    );
  }
}

export default HomePage;
