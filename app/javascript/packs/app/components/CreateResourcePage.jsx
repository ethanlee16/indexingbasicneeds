import React from "react";
import ResourceList from "./ResourceList";
import {
  Button,
  FormGroup,
  H1,
  InputGroup,
  Intent,
  Toaster,
} from "@blueprintjs/core";
import { withRouter } from "react-router";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import update from "immutability-helper";

import Navbar from "./common/Navbar";

import API from "../middleware/api";

class CreateResourcePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        title: "",
        body: "",
      },
      formErrors: {
        title: [],
        body: [],
      },
    };
  }

  getIntent(fieldName) {
    const errors = this.state.formErrors[fieldName];
    return !!errors && errors.length > 0 ? Intent.DANGER : Intent.NONE;
  }

  updateFormFieldCallback(fieldName) {
    return event => {
      const newState = update(this.state, {
        formFields: { [fieldName]: { $set: event.target.value } },
      });
      this.setState(newState);
    };
  }

  submit = async () => {
    let response = await API.CreateNewResource(this.state.formFields);
    // TODO (Ken): Add error checking
    this.props.history.push("/");
    let toaster = Toaster.create();
    toaster.show({ message: "Success!", intent: Intent.SUCCESS });
  };

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <H1>Create New Resource</H1>
        <FormGroup
          label="Title"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("title")}
        >
          <InputGroup
            id="text-input"
            placeholder="Placeholder text"
            intent={this.getIntent("title")}
            onChange={this.updateFormFieldCallback("title")}
            large
          />
        </FormGroup>

        <FormGroup
          helperText={"What is your post about?"}
          label="Body"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("body")}
        >
          <CKEditor
            editor={ClassicEditor}
            data={this.state.formFields.body}
            onInit={editor => {
              // You can store the "editor" and use when it's needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              const newState = update(this.state, {
                formFields: { body: { $set: data } },
              });
              this.setState(newState);
              //   this.resourceBody = data;
            }}
          />
        </FormGroup>

        <Button large rightIcon="tick" text="Submit" onClick={this.submit} />
      </div>
    );
  }
}

export default CreateResourcePage;
