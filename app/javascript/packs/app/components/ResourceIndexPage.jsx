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
      loaded: false,
    };

    this.filterTagIds = [];
    this.orderMethod = "";
  }

  async componentDidMount() {
    let resources = await API.ResourcesIndex();
    this.setState({ resources: resources, loaded: true });
  }

  filterResources = async resourceTagIds => {
    this.filterTagIds = [...resourceTagIds];
    this.refreshResources();
  };

  setOrderMethod = async event => {
    this.orderMethod = event.currentTarget.value;
    this.refreshResources();
  };

  async refreshResources() {
    this.setState({ loaded: false });
    let resources = await API.ResourcesIndex(
      this.filterTagIds,
      this.orderMethod
    );
    this.setState({ resources: resources, loaded: true });
  }

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
            large
            options={[
              { label: "Last Updated", value: "updated_desc" },
              { label: "First Updated", value: "updated_asc" },
              { label: "Last Created", value: "created_desc" },
              { label: "First Created", value: "created_asc" },
            ]}
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
