import React from "react";
import API from "../middleware/api";

class ResourceList extends React.Component {
  renderResources() {
    if (!this.props.resources) {
      return null;
    }

    return this.props.resources.map(resource => (
      <div key={`resource-${resource.id}`}>{resource.title}</div>
    ));
  }

  render() {
    return <div>{this.renderResources()}</div>;
  }
}

export default ResourceList;
