import React from "react";
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";

import WhoWeAre from "images/who-we-are.png";
import Crisis from "images/crisis_icon.png";
import Food from "images/food_icon.png";
import Financial from "images/financial_icon.png";
import Housing from "images/house_icon.png";

class HomePage extends React.Component {
<<<<<<< HEAD:app/javascript/packs/app/components/HomePage.jsx
=======
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
    };
  }

  async componentDidMount() {
    let { json, headers } = await API.ResourcesIndex();
    let resources = json;
    this.setState({ resources: resources });
  }

>>>>>>> 335bf513e38e74205fa45b1e78886b83c99c6e71:app/javascript/app/components/HomePage.jsx
  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="home-page-welcome">
          <div className="home-page-text">
            <h1>Basic Needs Center</h1>
            <p>
              Founded in Spring 2019, the Basic Needs Center serves as a physical resource hub for basic needs resources. The Basic Needs Committee supports the food, housing, and economic justice of those in our campus community.
            </p>
            <div className="home-page-buttons">

              <button className="home-page-button-1">Our Resource Index</button>
              <button className="home-page-button-2">Frequently Asked Questions</button>
            </div>

          </div>
          <img src={WhoWeAre} />
        </div>

        <div className="home-page-mission">
          <h1>Our Vision, Our Mission, Our Values</h1>
          <p>
            Basic Needs Security refers to the food, housing, and wellness security of our community. We understand that basic needs have a direct impact on the wellness, mental-emotional-physical health, academic performance, professional development, and holistic success of our students.

            UC Berkeley's Basic Needs Security Committee is fully dedicated to leading the transformation of UC Berkeley into a basic needs secure institution of higher education.
          </p>
          <button className="home-page-button-3">Meet the BNS Village</button>
        </div>

        <div className="home-page-resource">
          <h1>Our Resource Index</h1>
          <p>Find resources, guides, and materials through our Resources index
            to help you better navigate the Berkeley community. </p>


          <button className="home-page-button-4">Search all resources</button>
        </div>

        <div className="home-page-center">
          <h1>Our Center</h1>
          <p>Location: 12345 MLK Way, Berkeley, CA. Open Hours: Monday - Friday, 9 AM - 9 PM </p>
          <p>The Basic Needs Center serves as a physical resource hub for basic needs resources. The Basic Needs Committee supports food, housing, and economic justice of those in our campus community.

          Feel free to walk in or book an appointment with the Basic Needs Case Manager, the Basic Needs Financial Aid Assitance, or with County Workers.
          </p>


          <button className="home-page-button-5">Book Appointment</button>
        </div>



        <div className="home-page-updates">
          <h1>Community Updates</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dsint occaecat cupidatat non proident</p>
          <div className="home-page-media">
            Media here</div>

        </div>

        <div className="home-page-testimonies">
          <h1>Student Testimonies</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dsint occaecat cupidatat non proident</p>
          <div className="home-page-media"></div>

        </div>

        <div className="home-page-donate">

          <p>Your contribution will go to help transform UC Berkeley into a basic needs secure institution.</p>
          <button className="home-page-button-6"> Donate Online</button>

          <div className="home-page-donate-row">
            <div className="donate-left">
              Donate by Mail
          </div>
            <div className="donate-left">
              Check to:
          </div>
            <div className="donate-left">
              Memo:
          </div>
            <div className="donate-left">
              Address
          </div>

            <div className="donate-right">
              UC Berkeley Foundation
          </div>

            <div className="donate-right">
              Basic Needs Security
          </div>

            <div className="donate-right">
              University of California, Berkeley, Gift Services, 1995 University Ave, Ste 400Berkeley, CA 94704-1070
          </div>

          </div>

        </div>




      </div>


    );
  }
}

export default HomePage;

