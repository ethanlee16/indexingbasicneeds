import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import Donate from "images/home-donate.png";

class DonatePage extends React.Component {
  render() {
    return (
      <div className="container donate-page">
        <Navbar />
        {/* Donate */}
        <div className="donate-page-donate block">
          <div className="donate-page-left">
            <h1 style={{ width: "100%" }}>Donate to Basic Needs Security</h1>
            <div
              className="donate-page-donate-text"
              style={{
                borderBottom: "1px #C4C4C4 solid",
                marginBottom: "32px",
              }}
            >
              <p>
                Your contribution will go to help transform UC Berkeley into a
                basic needs secure institution.
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
                  text="Donate now"
                />
              </a>
              <br />
            </div>

            <div className="donate-page-donate-label">Donate By Mail</div>

            <div className="donate-page-donate-info">
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
          <img className="donate-image" src={Donate} />
        </div>

        {/* End of Container */}
      </div>
    );
  }
}

export default DonatePage;
