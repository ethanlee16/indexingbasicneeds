import React from "react";
import API from "../middleware/api";

class ResourceList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: {}
    };
  }

  componentDidMount() {
    Requester.get();
  }

  renderResources() {
    return this.props.resources.map(resource => <div>resource.title</div>);
  }

  render() {
    return <div>{this.renderResources()}</div>;
  }
}

export default ResourceList;
