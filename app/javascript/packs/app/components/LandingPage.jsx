import React from "react";
import ResourceList from "./ResourceList";
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import API from "../middleware/api";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: []
    };
  }

  async componentDidMount() {
    let resources = await API.ResourcesIndex();
    this.setState({ resources: resources });
  }

  render() {
    return (
      <div className="container is-widescreen landing-page">
        <Navbar />
        <Link to="/resources/create">
          <Button large rightIcon="add" text="Add new resource" />
        </Link>
        <ResourceList resources={this.state.resources} />
      </div>
    );
  }
}

export default LandingPage;
