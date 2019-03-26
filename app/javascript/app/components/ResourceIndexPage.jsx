import React from "react";
import ResourceList from "./ResourceList";
import {
  Button,
  Classes,
  Dialog,
  HTMLSelect,
  InputGroup,
  Intent,
  Position,
  Tabs,
  Tab,
  Tooltip,
  Callout,
  HTMLTable,
  Icon,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import update from "immutability-helper";
import { debounce } from "debounce";

import ResourceIndexFilterSidebar from "./ResourceIndexFilterSidebar";
import Navbar from "./common/Navbar";

import API from "../middleware/api";
import { checkUserSignedIn, checkUserIsAdmin } from "../utils/session";

import Placeholder from "images/bear.png";
import { intentClass } from "@blueprintjs/core/lib/esm/common/classes";

class ResourceIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      loaded: false,
      isModalOpen: false,
      openResourceIndex: null,
      selectedTabId: 0,
      animateTabs: false, // Need this because of BPJS bug
      resourceCategories: [],
    };

    this.filterTagIds = [];
    this.orderMethod = "";
    this.searchQuery = "";
  }

  async componentDidMount() {
    await this.getResourceCategories();
    this.setState({ animateTabs: true });
    let { json, headers } = await API.ResourcesIndex();
    let resources = json;
    this.setState({
      resources: resources,
      loaded: true,
    });
  }

  async getResourceCategories() {
    let { json, headers } = await API.GetResourceCategories();
    this.setState({ resourceCategories: json });
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

  handleTabChange = (newId, oldId, event) => {
    this.setState({ selectedTabId: newId });
    this.refreshResources();
  };

  refreshResources = debounce(async () => {
    this.setState({ loaded: false });
    let { json, headers } = await API.ResourcesIndex(
      this.state.selectedTabId,
      this.filterTagIds,
      this.orderMethod,
      this.searchQuery
    );
    let resources = json;
    this.setState({ resources: resources, loaded: true });
  }, 300);

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
    let userSignedIn = checkUserSignedIn();

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
              <h3 style={{ marginTop: "0px" }}>{resource.title}</h3>
              <p>{resource.description}</p>

              {resource.deadlines && (
                <Callout title="Deadlines Notice" intent={Intent.WARNING}>
                  {resource.deadlines}
                </Callout>
              )}

              <HTMLTable small interactive className="resource-modal-table">
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <h4>Quick Facts</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Icon icon="map-marker" iconSize={16} />
                    </td>
                    <td>
                      <p>{resource.address}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Icon icon="phone" iconSize={16} />
                    </td>
                    <td>
                      <p>{resource.contact_info}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Icon icon="time" iconSize={16} />
                    </td>
                    <td>
                      <p>{resource.hours_of_operation}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Icon icon="dollar" iconSize={16} />
                    </td>
                    <td>
                      <p>{resource.cost}</p>
                    </td>
                  </tr>
                </tbody>
              </HTMLTable>

              {resource.eligibility && (
                <Callout title="Eligibility" intent={Intent.PRIMARY}>
                  {resource.eligibility}
                </Callout>
              )}

              <h4>Additional Notes</h4>
              <div
                dangerouslySetInnerHTML={{ __html: resource.body }}
                className="resource-modal-text-body"
              />
              <Link to={`/resources/${resource.id}`} target="_blank">
                <Button
                  large
                  fill
                  minimal
                  intent={Intent.PRIMARY}
                  text="Read more"
                  className="resource-modal-read-more"
                />
              </Link>
              <p>{`Last updated: ${resource.updated_at}`}</p>
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
              disabled={!userSignedIn}
              onClick={
                resource.liked_by_user
                  ? this.unupvoteResource(resource.id, index)
                  : this.upvoteResource(resource.id, index)
              }
            />
            {resource.link && (
              <a
                href={resource.link}
                className="resource-modal-link"
                target="_blank"
              >
                <Button
                  large
                  minimal
                  fill
                  icon="link"
                  intent={Intent.PRIMARY}
                  text={resource.link}
                />
              </a>
            )}
          </div>
        </div>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="container is-widescreen">
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
            <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
              BNS Resources
            </h2>
            {checkUserIsAdmin() && (
              <Link to="/resource/new">
                <Button
                  large
                  className="button-primary"
                  intent={Intent.PRIMARY}
                  rightIcon="add"
                  text="Add new resource"
                />
              </Link>
            )}
          </div>

          <div className="resource-index-page-tabs-container">
            <Tabs
              id="resource-category-tab"
              large
              animate={this.state.animateTabs}
              onChange={this.handleTabChange}
              selectedTabId={this.state.selectedTabId}
            >
              <Tab id={0} title="All Resources" />
              {this.state.resourceCategories.map((category, i) => {
                return (
                  <Tab id={category.id} key={`category-tab-${category.id}`}>
                    <Tooltip>{category.name}</Tooltip>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
          <div className="resource-index-page-description">
            {this.state.selectedTabId !== 0
              ? this.state.resourceCategories
                  .filter(c => c.id === this.state.selectedTabId)
                  .pop()
                  .description.split("\n")
                  .map((line, i) => (
                    <p key={`resource-desc-${this.state.selectedTabId}-${i}`}>
                      {line}
                    </p>
                  ))
              : ""}
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
