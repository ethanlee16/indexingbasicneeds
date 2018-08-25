import React from "react";
import API from "../middleware/api";

class ResourceList extends React.Component {
  renderResources() {
    if (!this.props.resourecs) return null;
    return this.props.resources.map(resource => <div>resource.title</div>);
  }

  render() {
    return <div>{this.renderResources()}</div>;
  }
}

export default ResourceList;
