import React from "react";
import { Button, Card, Classes, Elevation } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Placeholder from "images/placeholder-square.jpg";

class ResourceList extends React.Component {
  renderResources() {
    if (!this.props.resources) {
      return [0, 1, 2].map(index => (
        <Card
          interactive={false}
          elevation={Elevation.ZERO}
          key={`resource-${index}`}
          className={`resource-list-card`}
        >
          <h3 className={`${Classes.SKELETON}`}>{resource.title}</h3>
        </Card>
      ));
    }

    return this.props.resources.map(resource => (
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
        </Card>
      </Link>
    ));
  }

  render() {
    return <div className="resource-list">{this.renderResources()}</div>;
  }
}

export default ResourceList;
