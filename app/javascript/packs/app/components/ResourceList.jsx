/**
 * Resource list display.
 *
 * @prop {Array} resources
 * @prop {boolean} loaded
 * @prop {function} upvoteResource: callback to upvote this resource
 * @prop {function} unupvoteResource: callback to unupvote this resource
 * @prop {function} onClickResource: function to open this resource's modal
 */

import React from "react";
import {
  Button,
  Card,
  Classes,
  Elevation,
  Icon,
  Intent,
  NonIdealState,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import { checkUserSignedIn } from "../utils/session";

import Placeholder from "images/placeholder-square.jpg";

class ResourceList extends React.Component {
  renderResources() {
    let userSignedIn = checkUserSignedIn();

    if (!this.props.loaded) {
      return [0, 1, 2, 3, 4, 5, 6, 7].map(index => (
        <Card
          interactive={false}
          elevation={Elevation.ZERO}
          key={`resource-${index}`}
          className={`resource-list-card`}
        >
          <img
            src={Placeholder}
            className={`resource-list-card-image ${Classes.SKELETON}`}
          />
          <div className={`resource-list-card-text`}>
            <div className={`resource-list-card-title ${Classes.SKELETON}`}>
              Title
            </div>
            <p className={Classes.SKELETON}>Description</p>
          </div>
        </Card>
      ));
    } else if (this.props.resources.length === 0) {
      return (
        <div className="resource-list-empty-state-container">
          <NonIdealState
            icon="search"
            title="No search results"
            description="No resources matched the filter you've chosen. Please try again!"
          />
        </div>
      );
    }

    return this.props.resources.map((resource, index) => {
      let likeIntent = resource.liked_by_user ? Intent.PRIMARY : Intent.NONE;
      return (
        <Card
          interactive={false}
          elevation={Elevation.ZERO}
          className="resource-list-card"
          key={`resource-${resource.id}`}
        >
          {/* TODO (Ken): REMOVE WHEN AWS CONNECTOR IS IN */}
          <img src={Placeholder} className="resource-list-card-image" />
          <div className="resource-list-card-text">
            <Link to={`/resources/${resource.id}`}>
              <div className="resource-list-card-title">{resource.title}</div>
            </Link>
            <p>{resource.description}</p>
          </div>
          <div className="resource-list-card-control">
            <Button
              minimal
              icon={<Icon icon="symbol-triangle-up" intent={likeIntent} />}
              intent={likeIntent}
              className={`resource-list-card-tag ${
                resource.liked_by_user ? "liked" : ""
              }`}
              text={resource.num_likes}
              disabled={!userSignedIn}
              onClick={
                resource.liked_by_user
                  ? this.props.unupvoteResource(resource.id, index)
                  : this.props.upvoteResource(resource.id, index)
              }
            />
            <Button
              minimal
              icon="document-open"
              onClick={this.props.onClickResource(index)}
            />
          </div>
        </Card>
      );
    });
  }

  render() {
    return <div className="resource-list">{this.renderResources()}</div>;
  }
}

export default ResourceList;
