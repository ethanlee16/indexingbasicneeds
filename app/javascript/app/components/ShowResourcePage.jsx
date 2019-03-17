import React from "react";
import {
  Button,
  Callout,
  H1,
  Tag,
  Icon,
  Intent,
  HTMLTable,
} from "@blueprintjs/core";
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
    const resource = this.state.resource;
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <div className="resource-show-page-title-container">
          <H1>{resource.title}</H1>
          {checkUserIsAdmin() && (
            <Link to={`/resources/${resource.id}/edit`}>
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

        {this.renderResourceCategories()}
        {this.renderResourceTags()}

        <h4>Description</h4>
        <p>{resource.description}</p>

        {resource.deadlines && (
          <Callout title="Deadlines Notice" intent={Intent.WARNING}>
            {resource.deadlines}
          </Callout>
        )}

        <HTMLTable small interactive className="resource-modal-table">
          <thead>
            <tr>
              <th colSpan={2}>
                <h4>Quick Facts</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Icon icon="map-marker" iconSize={16} />
              </td>
              <td>
                <p>{resource.address}</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon icon="phone" iconSize={16} />
              </td>
              <td>
                <p>{resource.contact_info}</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon icon="time" iconSize={16} />
              </td>
              <td>
                <p>{resource.hours_of_operation}</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon icon="dollar" iconSize={16} />
              </td>
              <td>
                <p>{resource.cost}</p>
              </td>
            </tr>
          </tbody>
        </HTMLTable>

        {resource.eligibility && (
          <Callout title="Eligibility" intent={Intent.PRIMARY}>
            {resource.eligibility}
          </Callout>
        )}

        <h4>Website</h4>
        {resource.link && (
          <a
            href={resource.link}
            className="resource-modal-link"
            target="_blank"
          >
            <Button
              large
              minimal
              fill
              icon="link"
              intent={Intent.PRIMARY}
              text={resource.link}
            />
          </a>
        )}

        <h4>Admin Note (only viewable to you)</h4>
        {resource.admin_note && <p>{resource.admin_note}</p>}

        {resource.body && (
          <React.Fragment>
            <h4>Additional Notes</h4>
            <div dangerouslySetInnerHTML={{ __html: resource.body }} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ShowResourcePage;
