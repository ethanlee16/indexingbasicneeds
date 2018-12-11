import React from "react";
import ResourceList from "./ResourceList";
import { Button, HTMLSelect, InputGroup, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import update from "immutability-helper";

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
    this.searchQuery = "";
  }

  async componentDidMount() {
    let { json, headers } = await API.ResourcesIndex();
    let resources = json;
    this.setState({ resources: resources, loaded: true });
  }

  filterResources = async resourceTagIds => {
    this.filterTagIds = [...resourceTagIds];
    this.refreshResources();
  };

  orderResources = async event => {
    this.orderMethod = event.currentTarget.value;
    this.refreshResources();
  };

  queryResources = async event => {
    this.searchQuery = event.currentTarget.value;
    this.refreshResources();
  };

  refreshResources = async () => {
    this.setState({ loaded: false });
    let { json, headers } = await API.ResourcesIndex(
      this.filterTagIds,
      this.orderMethod,
      this.searchQuery
    );
    let resources = json;
    this.setState({ resources: resources, loaded: true });
  };

  upvoteResource = (id, index) => {
    return () => {
      let newState = update(this.state, {
        resources: { [index]: { liked_by_user: { $set: true } } },
      });
      this.setState(newState);
      return API.UpvoteResource(id);
    };
  };

  unupvoteResource = (id, index) => {
    return () => {
      let newState = update(this.state, {
        resources: { [index]: { liked_by_user: { $set: false } } },
      });
      this.setState(newState);
      return API.UnupvoteResource(id);
    };
  };

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar onLogin={this.refreshResources} />
        <div className="resource-index-page-sidebar">
          <ResourceIndexFilterSidebar
            filterResourcesCallback={this.filterResources}
          />
        </div>
        <div className="resource-index-page-main-container">
          <div className="resource-index-page-title-container">
            <h2>BNS Resources</h2>
            <Link to="/resource/new">
              <Button
                large
                intent={Intent.PRIMARY}
                rightIcon="add"
                text="Add new resource"
              />
            </Link>
          </div>
          <div className="resource-index-page-sort-query-container">
            <InputGroup
              className="resource-index-page-searchbar"
              large
              round
              leftIcon="search"
              onChange={this.queryResources}
              placeholder="Search resources"
            />
            <HTMLSelect
              large
              options={[
                { label: "Last Updated", value: "updated_desc" },
                { label: "First Updated", value: "updated_asc" },
                { label: "Last Created", value: "created_desc" },
                { label: "First Created", value: "created_asc" },
              ]}
              onChange={this.orderResources}
            />
          </div>
          <ResourceList
            resources={this.state.resources}
            loaded={this.state.loaded}
            upvoteResource={this.upvoteResource}
            unupvoteResource={this.unupvoteResource}
          />
        </div>
      </div>
    );
  }
}

export default ResourceIndexPage;
