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
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        title: "",
        description: "",
        body: "",
      },
      formErrors: {
        title: [],
        description: [],
        body: [],
      },
    };
  }

  async componentDidMount() {
    let id = this.props.match.params.id;
    let resource = await API.ShowResource(id);

    // Update current formFields with the values previously stored in DB
    this.setState({
      formFields: {
        title: resource.title,
        description: resource.description,
        body: resource.body,
      },
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
