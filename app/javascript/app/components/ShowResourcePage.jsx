import React from "react";
import { Button, H1, Tag, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

import API from "../middleware/api";
import { checkUserIsAdmin } from "../utils/session";

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

  renderResourceCategories() {
    if (!!this.state.resource.resource_categories) {
      return this.state.resource.resource_categories.map(category => {
        return (
          <Tag
            key={`category-${category.id}`}
            large
            className="resource-show-page-tag"
            intent={Intent.PRIMARY}
          >
            {category.name}
          </Tag>
        );
      });
    }
  }

  renderResourceTags() {
    if (!!this.state.resource.resource_tags) {
      return this.state.resource.resource_tags.map(tag => {
        return (
          <Tag key={`tag-${tag.id}`} className="resource-show-page-tag">
            {tag.name}
          </Tag>
        );
      });
    }
  }

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="resource-show-page-title-container">
          <H1>{this.state.resource.title}</H1>
          {checkUserIsAdmin() && (
            <Link to={`/resources/${this.state.resource.id}/edit`}>
              <Button
                large
                className="button-primary"
                intent={Intent.PRIMARY}
                rightIcon="edit"
                text="Edit resource"
              />
            </Link>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.state.resource.body }} />
        {this.renderResourceCategories()}
        {this.renderResourceTags()}
      </div>
    );
  }
}

export default ShowResourcePage;
