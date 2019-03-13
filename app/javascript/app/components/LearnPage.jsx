import React from "react";
import { Button, H1 } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

class LearnPage extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Navbar />
        <H1>Learn</H1>
        <br />
      </div>
    );
  }
}

export default LearnPage;
