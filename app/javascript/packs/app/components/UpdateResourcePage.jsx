import React from "react";
import {
  Button,
  FormGroup,
  H1,
  InputGroup,
  Intent,
  Toaster,
} from "@blueprintjs/core";
import update from "immutability-helper";

import CreateResourcePage from "./CreateResourcePage";

import API from "../middleware/api";

class UpdateResourcePage extends CreateResourcePage {
  async componentDidMount() {
    await this.getResourceTags();

    let id = this.props.match.params.id;
    let resource = await API.ShowResource(id);

    // Prepopulate selected resoruce tags
    let selectedResourceTags = {};
    resource.resource_tags.forEach(tag => {
      selectedResourceTags[tag.id] = tag.name;
    });

    // Update current formFields with the values previously stored in DB
    this.setState({
      formFields: {
        title: resource.title,
        description: resource.description,
        body: resource.body,
      },
      selectedResourceTags: selectedResourceTags,
    });
    console.log(this.state);
  }

  getPageTitle() {
    return "Update Resource";
  }

  submit = async () => {
    let id = this.props.match.params.id;
    let response = await API.UpdateResource(id, this.state.formFields);
    console.log(response);
    // TODO (Ken): Add error checking
    this.props.history.push("/");
    let toaster = Toaster.create();
    toaster.show({ message: "Success!", intent: Intent.SUCCESS });
  };
}

export default UpdateResourcePage;
