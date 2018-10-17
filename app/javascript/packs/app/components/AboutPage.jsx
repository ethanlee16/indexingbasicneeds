import React from "react";
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <h1>BNS</h1>
      </div>
    );
  }
}

export default AboutPage;
