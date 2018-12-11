import React from "react";
import ResourceList from "./ResourceList";
import { Button, H1, Tag } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import API from "../middleware/api";

class ShowResourcePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resource: {},
    };
  }

  async componentDidMount() {
    let { json, headers } = await API.ShowResource(this.props.match.params.id);
    const resource = json;
    this.setState({ resource: resource });
  }

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <H1>{this.state.resource.title}</H1>
        <Link to={`/resources/${this.state.resource.id}/edit`}>
          <Button large rightIcon="edit" text="Edit resource" />
        </Link>
        <div dangerouslySetInnerHTML={{ __html: this.state.resource.body }} />
        {!!this.state.resource.resource_tags &&
          this.state.resource.resource_tags.map(tag => {
            return (
              <Tag
                key={`tag-${tag.id}`}
                large
                className="resource-show-page-tag"
              >
                {tag.name}
              </Tag>
            );
          })}
      </div>
    );
  }
}

export default ShowResourcePage;
