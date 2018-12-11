import React from "react";
import ResourceList from "./ResourceList";
import {
  Button,
  Classes,
  Icon,
  ITreeNode,
  Tooltip,
  Tree,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import API from "../middleware/api";

class HomePage extends React.Component {
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

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="resource-index-page-sidebar">
          <ResourceIndexFilterSidebar />
        </div>
        <div className="resource-index-page-main-container">
          <Link to="/resource/new">
            <Button large rightIcon="add" text="Add new resource" />
          </Link>
          <ResourceList resources={this.state.resources} />
        </div>
      </div>
    );
  }
}

export default HomePage;
