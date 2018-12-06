import React from "react";
import ResourceList from "./ResourceList";
import { Button, HTMLSelect } from "@blueprintjs/core";
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
      orderMethod: "",
      loaded: false,
    };
  }

  async componentDidMount() {
    let resources = await API.ResourcesIndex();
    this.setState({ resources: resources, loaded: true });
  }

  filterResources = async resourceTagIds => {
    this.setState({ loaded: false });
    let resources = await API.ResourcesIndex(
      [...resourceTagIds],
      this.state.orderMethod
    );
    this.setState({ resources: resources, loaded: true });
  };

  setOrderMethod = async event => {
    let orderMethod = event.currentTarget.value;
    this.setState({ loaded: false });
    this.setState({ orderMethod: orderMethod, loaded: true });
  };

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="resource-index-page-sidebar">
          <ResourceIndexFilterSidebar
            filterResourcesCallback={this.filterResources}
          />
        </div>
        <div className="resource-index-page-main-container">
          <h2>BNS Resources</h2>
          <Link to="/resource/new">
            <Button large rightIcon="add" text="Add new resource" />
          </Link>
          <HTMLSelect
            options={["created_asc", "created_desc"]}
            onChange={this.setOrderMethod}
          />
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
