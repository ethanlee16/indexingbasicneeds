import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

class ResourceList extends React.Component {
  renderResources() {
    if (!this.props.resources) {
      return null;
    }

    return this.props.resources.map(resource => (
      <Card
        interactive={true}
        elevation={Elevation.TWO}
        key={`resource-${resource.id}`}
        className="resource-list-card"
      >
        <h3>{resource.title}</h3>
      </Card>
    ));
  }

  render() {
    return <div className="resource-list">{this.renderResources()}</div>;
  }
}

export default ResourceList;
