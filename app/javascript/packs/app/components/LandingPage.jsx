import React from "react";
import ResourceList from "./ResourceList";

import Navbar from "./common/Navbar";

import API from "../middleware/api";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: []
    };
  }

  async componentDidMount() {
    let resources = await API.ResourcesIndex();
    this.setState({ resources: resources });
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <ResourceList resources={this.state.resources} />
        <h1>Hello World</h1>
        <button onClick={this.hello}>Click me</button>
      </div>
    );
  }
}

export default LandingPage;
