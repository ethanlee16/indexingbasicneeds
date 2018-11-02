import React from "react";
import { Button, Card, Classes, Elevation } from "@blueprintjs/core";
import { Link } from "react-router-dom";

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
          elevation={Elevation.TWO}
          className="resource-list-card"
        >
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
        </Card>
      </Link>
    ));
  }

  render() {
    return <div className="resource-list">{this.renderResources()}</div>;
  }
}

export default ResourceList;
