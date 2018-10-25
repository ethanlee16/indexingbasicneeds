import React from "react";
import ResourceList from "./ResourceList";
import {
  Button,
  FormGroup,
  H1,
  H5,
  InputGroup,
  Intent,
  Switch,
} from "@blueprintjs/core";
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
        title: {
          value: "",
          errors: [],
        },
        body: {
          value: "",
          errors: [],
        },
      },
    };
    this.resourceBody = "";
  }

  async componentDidMount() {
    let resources = await API.ResourcesIndex();
    this.setState({ resources: resources });
  }

  getIntent(fieldName) {
    const details = this.state.formFields[fieldName];
    return !!details.errors && details.errors.length > 0
      ? Intent.DANGER
      : Intent.NONE;
  }

  updateFormFieldCallback(fieldName) {
    return event => {
      const newState = update(this.state, {
        formFields: { [fieldName]: { value: { $set: event.target.value } } },
      });
      this.setState(newState);
    };
  }

  submit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container is-widescreen landing-page">
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
            data="<p>Start composing your resource now...</p>"
            onInit={editor => {
              // You can store the "editor" and use when it's needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.resourceBody = data;
              this.updateFormFieldCallback("body");
            }}
          />
        </FormGroup>

        <Button large rightIcon="tick" text="Submit" onClick={this.submit} />
      </div>
    );
  }
}

export default CreateResourcePage;
