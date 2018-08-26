import React from "react";
import ResourceList from "./ResourceList";
import { Button, H1 } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import API from "../middleware/api";

class ShowResourcePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resource: {},
    };
  }

  async componentDidMount() {
    const resource = await API.ShowResource(this.props.match.params.id);
    this.setState({ resource: resource });
  }

  render() {
    return (
      <div className="container is-widescreen landing-page">
        <Navbar />
        <H1>{this.state.resource.title}</H1>
        <div dangerouslySetInnerHTML={{ __html: this.state.resource.body }} />
      </div>
    );
  }
}

export default ShowResourcePage;
