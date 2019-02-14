import React from "react";
import {
  Button,
  Checkbox,
  Classes,
  FormGroup,
  H1,
  InputGroup,
  Intent,
  Toaster,
  TextArea,
  NumericInput,
} from "@blueprintjs/core";
import CKEditor from "@ckeditor/ckeditor5-react";
import update from "immutability-helper";

import Navbar from "./common/Navbar";

import API from "../middleware/api";

class CreateResourcePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: this.getInitialFormFields(),
      formErrors: this.getInitialFormErrors(),
      resourceCategories: [],
      selectedResourceCategories: {}, // id : category_name just for ease of use over Set
      resourceTags: {
        student: [],
        campus: [],
        community: [],
        other: [],
      },
      selectedResourceTags: {}, // id : category_name just for ease of use over Set
    };
  }

  async componentDidMount() {
    this.getResourceCategories();
    this.getResourceTags();
  }

  async getResourceCategories() {
    let { json, headers } = await API.GetResourceCategories();
    this.setState({ resourceCategories: json });
  }

  async getResourceTags() {
    let resourceTagsState = {
      student: [],
      campus: [],
      community: [],
      other: [],
    };

    let { json, headers } = await API.GetResourceTags();
    let resourceTags = json;
    resourceTags.forEach(tag => {
      switch (tag.category) {
        case "student":
          resourceTagsState.student.push(tag);
          break;
        case "campus":
          resourceTagsState.campus.push(tag);
          break;
        case "community":
          resourceTagsState.community.push(tag);
          break;
        default:
          resourceTagsState.other.push(tag);
          break;
      }
    });
    this.setState({ resourceTags: resourceTagsState });
  }

  getInitialFormFields() {
    return {
      title: "",
      description: "",
      address: {
        street_address: "",
        city: "",
        state: "",
        zip: "",
      },
      contact_info: "",
      hours_of_operation: "",
      eligibility: "",
      cost: 0,
      cost_description: "",
      deadlines: "",
      website_url: "",
      body: "",
      admin_note: "",
    };
  }

  getInitialFormErrors() {
    const pairs = Object.keys(this.getInitialFormFields()).map(key => {
      return [key, []];
    });
    const formErrors = Object.assign(
      ...pairs.map(pair => ({ [pair[0]]: pair[1] }))
    );
    console.log(formErrors);
    return formErrors;
  }

  getPageTitle() {
    return "Create New Resource";
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

  updateNumericFormFieldCallback(fieldName) {
    return value => {
      const newState = update(this.state, {
        formFields: { [fieldName]: { $set: value } },
      });
      this.setState(newState);
    };
  }

  updateAddressFormFieldCallback(fieldName) {
    return event => {
      const newState = update(this.state, {
        formFields: {
          address: { [fieldName]: { $set: event.target.value } },
        },
      });
      this.setState(newState);
    };
  }

  /**
   * Checks the resource category if unchecked and vice versa by setting the selectedResourceTags state.
   */
  checkResourceCategoryCallback(id, categoryName) {
    return event => {
      let newSelectedResourceCategories;
      if (this.state.selectedResourceCategories.hasOwnProperty(id)) {
        newSelectedResourceCategories = update(
          this.state.selectedResourceCategories,
          { $unset: [id] }
        );
      } else {
        newSelectedResourceCategories = update(
          this.state.selectedResourceCategories,
          { [id]: { $set: categoryName } }
        );
      }
      this.setState({
        selectedResourceCategories: newSelectedResourceCategories,
      });
    };
  }

  /**
   * Checks the resource tag if unchecked and vice versa by setting the selectedResourceTags state.
   */
  checkResourceTagCallback(id, categoryName) {
    return event => {
      let newSelectedResourceTags;
      if (this.state.selectedResourceTags.hasOwnProperty(id)) {
        newSelectedResourceTags = update(this.state.selectedResourceTags, {
          $unset: [id],
        });
      } else {
        newSelectedResourceTags = update(this.state.selectedResourceTags, {
          [id]: { $set: categoryName },
        });
      }
      this.setState({ selectedResourceTags: newSelectedResourceTags });
    };
  }

  buildResourceForSubmit() {
    let resourceCategoriesResourcesAttributes = Object.keys(
      this.state.selectedResourceCategories
    ).map(resourceCategoryId => {
      return { resource_category_id: resourceCategoryId };
    });

    let resourceTagInstancesAttributes = Object.keys(
      this.state.selectedResourceTags
    ).map(resourceTagId => {
      return {
        resource_tag_id: resourceTagId,
      };
    });

    let resource = {
      ...this.state.formFields,
      resource_tag_instances_attributes: resourceTagInstancesAttributes,
      resource_categories_resources_attributes: resourceCategoriesResourcesAttributes,
    };

    return resource;
  }

  submit = async () => {
    let resource = this.buildResourceForSubmit();
    let toaster = Toaster.create();
    try {
      await API.CreateNewResource(resource);
      toaster.show({ message: "Success!", intent: Intent.SUCCESS });
      this.props.history.push("/");
    } catch (error) {
      toaster.show({ message: `Error: ${error}`, intent: Intent.DANGER });
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        <H1>{this.getPageTitle()}</H1>
        <FormGroup
          label="Title"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("title")}
        >
          <InputGroup
            id="text-input"
            placeholder="Enter your title here..."
            intent={this.getIntent("title")}
            onChange={this.updateFormFieldCallback("title")}
            value={this.state.formFields.title}
            large
          />
        </FormGroup>

        <FormGroup
          label="Description"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("description")}
        >
          <InputGroup
            id="text-input"
            placeholder="Enter your resource description here..."
            intent={this.getIntent("description")}
            onChange={this.updateFormFieldCallback("description")}
            value={this.state.formFields.description}
            large
          />
        </FormGroup>

        <FormGroup
          label="Address"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("address")} // FIXME
        >
          <InputGroup
            id="text-input"
            placeholder="Street Address"
            intent={this.getIntent("street_address")}
            onChange={this.updateAddressFormFieldCallback("street_address")}
            value={this.state.formFields.address.street_address}
            large
          />
          <InputGroup
            id="text-input"
            placeholder="City"
            intent={this.getIntent("city")}
            onChange={this.updateAddressFormFieldCallback("city")}
            value={this.state.formFields.address.city}
            large
          />
          <InputGroup
            id="text-input"
            placeholder="State"
            intent={this.getIntent("state")}
            onChange={this.updateAddressFormFieldCallback("state")}
            value={this.state.formFields.address.state}
            large
          />
          <InputGroup
            id="text-input"
            placeholder="Zip"
            intent={this.getIntent("zip")}
            onChange={this.updateAddressFormFieldCallback("zip")}
            value={this.state.formFields.address.zip}
            large
          />
        </FormGroup>

        <FormGroup
          label="Contact Info"
          labelFor="text-input"
          intent={this.getIntent("contact_info")}
        >
          <TextArea
            id="text-input"
            intent={this.getIntent("contact_info")}
            onChange={this.updateFormFieldCallback("contact_info")}
            value={this.state.formFields.contact_info}
            large
          />
        </FormGroup>

        <FormGroup
          label="Hours of Operation"
          labelFor="text-input"
          intent={this.getIntent("hours_of_operation")}
        >
          <TextArea
            id="text-input"
            intent={this.getIntent("hours_of_operation")}
            onChange={this.updateFormFieldCallback("hours_of_operation")}
            value={this.state.formFields.hours_of_operation}
            large
          />
        </FormGroup>

        <FormGroup
          label="Eligibility Information"
          labelFor="text-input"
          intent={this.getIntent("eligibility")}
        >
          <TextArea
            id="text-input"
            intent={this.getIntent("eligibility")}
            onChange={this.updateFormFieldCallback("eligibility")}
            value={this.state.formFields.eligibility}
            large
          />
        </FormGroup>

        <FormGroup
          label="Cost"
          labelFor="numeric-input"
          intent={this.getIntent("cost")}
        >
          <NumericInput
            id="numeric-input"
            intent={this.getIntent("cost")}
            onValueChange={this.updateNumericFormFieldCallback("cost")}
            value={this.state.formFields.cost}
            leftIcon="dollar"
            large
          />
        </FormGroup>

        <FormGroup
          helperText="Add any additional details about the cost here."
          label="Cost Description"
          labelFor="text-input"
          intent={this.getIntent("cost_description")}
        >
          <TextArea
            id="text-input"
            intent={this.getIntent("cost_description")}
            onChange={this.updateFormFieldCallback("cost_description")}
            value={this.state.formFields.cost_description}
            large
          />
        </FormGroup>

        <FormGroup
          label="Website Link"
          labelFor="text-input"
          intent={this.getIntent("website_url")}
        >
          <InputGroup
            id="text-input"
            intent={this.getIntent("website_url")}
            onChange={this.updateFormFieldCallback("website_url")}
            value={this.state.formFields.website_url}
            leftIcon="link"
            large
          />
        </FormGroup>

        <FormGroup
          helperText="Add any information about deadlines here."
          label="Deadlines"
          labelFor="text-input"
          intent={this.getIntent("deadlines")}
        >
          <TextArea
            id="text-input"
            intent={this.getIntent("deadlines")}
            onChange={this.updateFormFieldCallback("deadlines")}
            value={this.state.formFields.deadlines}
            large
          />
        </FormGroup>

        <FormGroup
          helperText="THE CONTENT HERE WILL ONLY BE VIEWABLE TO ADMINISTRATORS."
          label="Admin Note"
          labelFor="text-input"
          intent={this.getIntent("admin_note")}
        >
          <TextArea
            id="text-input"
            intent={this.getIntent("admin_note")}
            onChange={this.updateFormFieldCallback("admin_note")}
            value={this.state.formFields.admin_note}
            large
          />
        </FormGroup>

        <FormGroup
          helperText={"What is your post about?"}
          label="Additional Notes"
          labelFor="text-input"
          intent={this.getIntent("body")}
        >
          <CKEditor
            editor={window.ClassicEditor}
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
            }}
          />
        </FormGroup>

        <FormGroup
          helperText={
            "What category does your post belong to? If none are selected, then your post will only show up under 'All Categories'."
          }
          label="Category"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("description")}
        >
          {this.state.resourceCategories.map(category => {
            return (
              <Checkbox
                label={category.name}
                checked={this.state.selectedResourceCategories.hasOwnProperty(
                  category.id
                )}
                onChange={this.checkResourceCategoryCallback(
                  category.id,
                  category.name
                )}
                key={`resource-category-${category.id}`}
              />
            );
          })}
        </FormGroup>

        <FormGroup
          label="Student Filters"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("description")}
        >
          {this.state.resourceTags.student.map(tag => {
            return (
              <Checkbox
                label={tag.name}
                checked={this.state.selectedResourceTags.hasOwnProperty(tag.id)}
                onChange={this.checkResourceTagCallback(tag.id, tag.category)}
                key={`resource-tag-${tag.id}`}
              />
            );
          })}
        </FormGroup>

        <FormGroup
          label="Campus Filters"
          labelFor="text-input"
          labelInfo={"(required)"}
          intent={this.getIntent("description")}
        >
          {this.state.resourceTags.campus.map(tag => {
            return (
              <Checkbox
                label={tag.name}
                checked={this.state.selectedResourceTags.hasOwnProperty(tag.id)}
                onChange={this.checkResourceTagCallback(tag.id, tag.category)}
                key={`resource-tag-${tag.id}`}
              />
            );
          })}
        </FormGroup>

        <FormGroup
          label="Community Filters"
          labelFor="text-input"
          intent={this.getIntent("description")}
        >
          {this.state.resourceTags.community.map(tag => {
            return (
              <Checkbox
                label={tag.name}
                checked={this.state.selectedResourceTags.hasOwnProperty(tag.id)}
                onChange={this.checkResourceTagCallback(tag.id, tag.category)}
                key={`resource-tag-${tag.id}`}
              />
            );
          })}
        </FormGroup>

        <FormGroup
          label="Other Filters"
          labelFor="text-input"
          intent={this.getIntent("description")}
        >
          {this.state.resourceTags.other.map(tag => {
            return (
              <Checkbox
                label={tag.name}
                checked={this.state.selectedResourceTags.hasOwnProperty(tag.id)}
                onChange={this.checkResourceTagCallback(tag.id, tag.category)}
                key={`resource-tag-${tag.id}`}
              />
            );
          })}
        </FormGroup>

        <Button large rightIcon="tick" text="Submit" onClick={this.submit} />
      </div>
    );
  }
}

export default CreateResourcePage;
