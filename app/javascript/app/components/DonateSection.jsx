import React from "react";
import { Button, Intent } from "@blueprintjs/core";

import "../assets/stylesheets/donate_section.scss";
import Donate from "images/Home_13_Donate_1.jpg";

const DonateSection = () => (
  <div className="home-page-donate block">
    <h1 style={{ width: "100%" }}>Donate</h1>
    <div className="home-page-right">
      <div
        className="home-page-donate-text"
        style={{
          borderBottom: "1px #C4C4C4 solid",
          marginBottom: "32px",
        }}
      >
        <p>
          Support UC Berkeley students thrive by contributing to their holistic
          success, ensuring that their food and housing needs are met.
        </p>
        <p>
          Your contribution will go to help transform UC Berkeley into a basic
          needs secure institution.
        </p>

        <a
          href="https://give.berkeley.edu/browse/?u=408"
          target="_blank"
          style={{ display: "block", marginTop: "24px" }}
        >
          <Button
            large
            className="button-primary"
            intent={Intent.PRIMARY}
            text="Donate Online"
          />
        </a>
        <br />
      </div>

      <h3 className="home-page-donate-label">Donate By Mail</h3>

      <div className="home-page-donate-info">
        <div className="row">
          <div className="donate-by-mail left">
            <p>Check to:</p>
          </div>
          <div className="donate-by-mail right">
            <p>UC Berkeley Foundation</p>
          </div>
        </div>

        <div className="row">
          <div className="donate-by-mail left">
            <p>Memo:</p>
          </div>
          <div className="donate-by-mail right">
            <p>Basic Needs</p>
          </div>
        </div>

        <div className="row">
          <div className="donate-by-mail left">
            <p>Address:</p>
          </div>
          <div className="donate-by-mail right address">
            <p>University of California, Berkeley, Gift Services</p>
            <p>1995 University Ave, Ste 400</p>
            <p>Berkeley, CA 94704-1070</p>
          </div>
        </div>
      </div>
    </div>
    <div className="home-donate-image">
      <img src={Donate} />
    </div>
  </div>
);

export default DonateSection;
