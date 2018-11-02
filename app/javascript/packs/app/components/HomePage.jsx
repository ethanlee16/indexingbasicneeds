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
  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="home-page-welcome">
          <div className="home-page-text">
            <h1>From the Basic Needs Center – Welcome!</h1>
            <p>
              The Basic Needs Center supports the food, housing, and economic justice of those in our campus community. Founded in Spring 2019, we are here as a resource and haven for all.
            </p>
            <div className="home-page-buttons">
              <button className="home-page-button-1"> Come Visit!</button>
              <button className="home-page-button-2"> Book Appointment</button>
            </div>

          </div>
          <img src={WhoWeAre} />
        </div>

        <div className="home-page-resource">
          <h1>Our Resouce Index</h1>
          <p>
            We know that navigating the Berkeley community can be overwhelming. That’s why we’ve consolidated all resources into a single place, so you can focus on your wellbeing first. Here are some of the areas of focus:
          </p>

          <div className="home-page-resource-row">
            <div className="home-page-resource-item">
              <img className="home-page-icon-fin" src={Financial} />
              <div className="home-page-icon-text-fin">Financial Security</div>
            </div>
            <div className="home-page-resource-item">
              <img className="home-page-icon" src={Food} />
              <div className="home-page-icon-text">Food Security</div>
            </div>
            <div className="home-page-resource-item">
              <img className="home-page-icon" src={Housing} />
              <div className="home-page-icon-text">Housing Security</div>
            </div>
            <div className="home-page-resource-item"
            ><img className="home-page-icon" src={Crisis} />
              <div className="home-page-icon-text">Crisis Resolution</div>
            </div>

          </div>

          <div className="home-page-resource-row">
            <button className="home-page-button-3">See Resources</button>
          </div>





        </div>



        <div className="home-page-spotlight">
          <h1>Spotlight Resources</h1>
          <div className="home-page-spotlight-row">
            {/* <img className="spotlight_img" src={""} />
            <img className="spotlight_img" src={""} />
            <img className="spotlight_img" src={""} /> */}
          </div>
        </div>


      </div>


    );
  }
}

export default HomePage;

