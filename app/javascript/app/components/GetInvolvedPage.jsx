import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import GetInvolvedImg from "images/Get_Involved_1_Intro.jpg";
import StudentCoImg from "images/Get_Involved_2_Student_Coalition.jpg";
import FoodPantryImg from "images/Get_Involved_3_Food_Pantry.jpg";

class GetInvolvedPage extends React.Component {
  render() {
    return (
      <div className="container home-page">
        <Navbar />
        <div className="get-involved-container">
          <div className="get-involved-left-container">
            <div className="get-involved-menu">
              <a
                className="get-involved-item"
                href="#get-involved-get-involved"
              >
                {" "}
                Get Involved
              </a>
              <a className="get-involved-item" href="#get-involved-field-study">
                {" "}
                Field Study Units
              </a>
              <a className="get-involved-item" href="#get-involved-coalition">
                {" "}
                BNS Coalition
              </a>
              <a className="get-involved-item" href="#get-involved-volunteer">
                {" "}
                Volunteer
              </a>
            </div>
          </div>
          <div className="get-involved-right-container">
            <img
              className="get-involved-banner-img"
              src={GetInvolvedImg}
              alt="Center"
            />

            <div className="get-involved-text">
              <div id="get-involved-get-involved">
                <h1>Get Involved</h1>
                <p>
                  Our Basic Needs community is made up of students, interns,
                  volunteers, staff, and administrators who contribute to our
                  efforts
                </p>
              </div>
              <div id="get-involved-field-study">
                <h2>Field Study Units</h2>
                <p>
                  The Basic Needs community has exciting projects every year
                  that require passionate and committed interns and volunteers
                  to maximize their success. For those interested in the
                  unit-earning internship, the unit count determines time
                  requirement:
                </p>
                <p />
                <div className="get-involved-centered">
                  1 unit = 45 hours <br />2 units = 90 hours
                </div>
                <p />
                <p>
                  If you are interested, please review our application specifics
                  &amp; coordinator descriptions to inform your team selection!
                  All interns will also volunteer at the UCB Food Pantry in
                  addition to their allocated responsibilities.
                </p>
                <p className="get-involved-testimony">
                  “Working with the food pantry has been an insightful
                  experience because it not only allowed me to build connections
                  on campus but with the community as well. As a funds and
                  resources intern, I learned a lot of skills including but not
                  limited to: grant writing, public speaking, marketing,
                  networking, and skills that I’ll be able to use even beyond my
                  time with the Food Pantry.”
                </p>
              </div>

              <div id="get-involved-coalition">
                <h2>Student Coalition</h2>
                <div className="get-involved-coalition-flex">
                  <p>
                    The Student Coalition is a space for student leaders working
                    towards basic needs security to come together and
                    coordinator, collaborate, support, and strategize with one
                    another. The Coalition unifies the student voice
                    (undergraduate and graduate) in basic needs security
                    dialogues and initiatives, representing over 15 independent
                    organizations and offices.
                  </p>
                  <img
                    className="student-co-img"
                    src={StudentCoImg}
                    alt="Student Coalition"
                  />
                </div>
              </div>
              <h2>Food Pantry</h2>
              <div className="get-involved-food-pantry">
                <p>
                  The UC Berkeley Food Pantry is a direct response to the need
                  among the student population for more resources to fight food
                  insecurity––the lack of nutritious food.
                </p>
                <img
                  className="food-pantry-img"
                  src={FoodPantryImg}
                  alt="Center"
                />
              </div>

              <div id="get-involved-volunteer">
                <h2>Volunteer</h2>
                <p>
                  Thank you for your interest in volunteering with the UC
                  Berkeley Food Pantry! We are now recruiting volunteers for the
                  summer!
                  <br />
                  <br />
                  Please complete this form If you are interested in joining our
                  incredible volunteer team! If you would like to drop in and
                  volunteer, we’d love extra help restocking on Tuesdays &amp;
                  Fridays 9:30am-11am! <br />
                  <br />
                  Please reach out to us at foodpantry@berkeley.edu if you have
                  any additional questions.
                </p>
                <p>
                  We will do our best to post additional special volunteer
                  opportunities as they come up through the semester. This may
                  include helping out with restocking, food distribution, mobile
                  pop-up pantries, and gardening!
                </p>
                <p className="get-involved-testimony">
                  “Volunteering at the Food Pantry has empowered me to help make
                  a change in the Berkeley community. Being a first generation,
                  low-income student, I constantly face economic challenges and
                  the Food Pantry is a great resource that helps alleviate
                  student food need. Food insecurity is a serious issue and it
                  is critical for our students to have nutritious foods so that
                  they can concentrate on their academics.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* End of Container */}
      </div>
    );
  }
}

export default GetInvolvedPage;
