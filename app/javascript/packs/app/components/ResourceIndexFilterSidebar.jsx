import React from "react";
import { Classes, Icon, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";
import update from "immutability-helper";

import FilterSidebar from "./common/FilterSidebar";

import API from "../middleware/api";

class ResourceIndexFilterSidebar extends FilterSidebar {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      checkedResourceTagIds: new Set(),
    };
  }

  async componentDidMount() {
    await this.getResourceTags();
  }

  async getResourceTags() {
    let sectionsState = [
      {
        name: "student",
        tags: [],
      },
      {
        name: "campus",
        tags: [],
      },
      {
        name: "community",
        tags: [],
      },
      {
        name: "other",
        tags: [],
      },
    ];

    let resourceTags = await API.GetResourceTags();
    resourceTags.forEach(tag => {
      switch (tag.category) {
        case "student":
          sectionsState[0].tags.push(tag);
          break;
        case "campus":
          sectionsState[1].tags.push(tag);
          break;
        case "community":
          sectionsState[2].tags.push(tag);
          break;
        default:
          sectionsState[3].tags.push(tag);
          break;
      }
    });
    this.setState({ sections: sectionsState });
  }

  checkResourceTagCallback = resourceTagId => {
    return event => {
      let newCheckedResourceTagIds;
      if (this.state.checkedResourceTagIds.has(resourceTagId)) {
        newCheckedResourceTagIds = update(this.state.checkedResourceTagIds, {
          $remove: [resourceTagId],
        });
      } else {
        newCheckedResourceTagIds = update(this.state.checkedResourceTagIds, {
          $add: [resourceTagId],
        });
      }
      this.setState({ checkedResourceTagIds: newCheckedResourceTagIds });
      this.props.filterResourcesCallback(newCheckedResourceTagIds);
    };
  };

  render() {
    return (
      <FilterSidebar
        sections={this.state.sections}
        checkTagCallback={this.checkResourceTagCallback}
      />
    );
  }
}

export default ResourceIndexFilterSidebar;
