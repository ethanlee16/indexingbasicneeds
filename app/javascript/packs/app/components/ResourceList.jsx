import React from "react";
import {
  Card,
  Classes,
  Elevation,
  Icon,
  Intent,
  NonIdealState,
  Tag,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Placeholder from "images/placeholder-square.jpg";

class ResourceList extends React.Component {
  renderResources() {
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

    return this.props.resources.map(resource => {
      let likeIntent = resource.liked_by_user ? Intent.PRIMARY : Intent.NONE;
      return (
        <Link to={`/resources/${resource.id}`} key={`resource-${resource.id}`}>
          <Card
            interactive={true}
            elevation={Elevation.ZERO}
            className="resource-list-card"
          >
            {/* TODO (Ken): REMOVE WHEN AWS CONNECTOR IS IN */}
            <img src={Placeholder} className="resource-list-card-image" />
            <div className="resource-list-card-text">
              <div className="resource-list-card-title">{resource.title}</div>
              <p>{resource.description}</p>
            </div>
            <div className="resource-list-card-control">
              <Tag
                large
                minimal={!resource.liked_by_user}
                icon={<Icon icon="symbol-triangle-up" intent={likeIntent} />}
                intent={likeIntent}
                className="resource-list-card-tag"
              >
                {resource.num_likes}
              </Tag>
            </div>
          </Card>
        </Link>
      );
    });
  }

  render() {
    return <div className="resource-list">{this.renderResources()}</div>;
  }
}

export default ResourceList;
