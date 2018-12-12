import React from "react";
import ResourceList from "./ResourceList";
import {
  Button,
  Classes,
  Dialog,
  HTMLSelect,
  InputGroup,
  Intent,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import update from "immutability-helper";

import FilterSidebar from "./common/FilterSidebar";
import ResourceIndexFilterSidebar from "./ResourceIndexFilterSidebar";
import Navbar from "./common/Navbar";

import API from "../middleware/api";

import Placeholder from "images/placeholder-square.jpg";

class ResourceIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      loaded: false,
      isModalOpen: false,
      openResourceIndex: null,
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
        resources: {
          [index]: {
            liked_by_user: { $set: true },
            num_likes: likes => likes + 1,
          },
        },
      });
      this.setState(newState);
      return API.UpvoteResource(id);
    };
  };

  unupvoteResource = (id, index) => {
    return () => {
      let newState = update(this.state, {
        resources: {
          [index]: {
            liked_by_user: { $set: false },
            num_likes: likes => likes - 1,
          },
        },
      });
      this.setState(newState);
      return API.UnupvoteResource(id);
    };
  };

  openResourceModal = index => {
    return () => {
      this.setState({ isModalOpen: true, openResourceIndex: index });
    };
  };

  closeResourceModal = () => {
    this.setState({ isModalOpen: false });
  };

  renderResourceModal() {
    if (!this.state.isModalOpen) return;
    let index = this.state.openResourceIndex;
    let resource = this.state.resources[index];
    return (
      <Dialog
        onClose={this.closeResourceModal}
        isOpen={this.state.isModalOpen}
        className="resource-modal-dialog"
      >
        <div className={`${Classes.DIALOG_BODY} resource-modal-body`}>
          <div className="resource-modal-details">
            <img
              src={Placeholder}
              alt="placeholder"
              className="resource-modal-image"
            />
            <div className="resource-modal-text">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <p>{resource.eligibility}</p>
              <p>{resource.notes}</p>
            </div>
          </div>
          <div className="resource-modal-control">
            <Button
              large
              fill
              icon="symbol-triangle-up"
              intent={Intent.PRIMARY}
              text={`${resource.liked_by_user ? "Unupvote" : "Upvote"} ${
                resource.num_likes
              }`}
              onClick={
                resource.liked_by_user
                  ? this.unupvoteResource(resource.id, index)
                  : this.upvoteResource(resource.id, index)
              }
            />
          </div>
        </div>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar
          onLogin={this.refreshResources}
          onLogout={this.refreshResources}
        />
        {this.renderResourceModal()}
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
            onClickResource={this.openResourceModal}
          />
        </div>
      </div>
    );
  }
}

export default ResourceIndexPage;
