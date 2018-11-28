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

import FilterSidebar from "./common/FilterSidebar";
import ResourceIndexFilterSidebar from "./ResourceIndexFilterSidebar";
import Navbar from "./common/Navbar";

import API from "../middleware/api";

class ResourceIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    let resources = await API.ResourcesIndex();
    this.setState({ resources: resources, loaded: true });
  }

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="resource-index-page-sidebar">
          <ResourceIndexFilterSidebar />
        </div>
        <div className="resource-index-page-main-container">
          <h2>BNS Resources</h2>
          <Link to="/resource/new">
            <Button large rightIcon="add" text="Add new resource" />
          </Link>
          <ResourceList
            resources={this.state.resources}
            loaded={this.state.loaded}
          />
        </div>
      </div>
    );
  }
}

export default ResourceIndexPage;
