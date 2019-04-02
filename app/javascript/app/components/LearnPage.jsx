import React from "react";
import ActiveStorageProvider, {
  DirectUploadProvider,
} from "react-activestorage-provider";
import {
  Button,
  H1,
  Intent,
  Dialog,
  Classes,
  H4,
  HTMLTable,
  FormGroup,
  Icon,
  InputGroup,
  Toaster,
  FileInput,
  Card,
  ProgressBar,
  RadioGroup,
  Radio,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import update from "immutability-helper";

import Navbar from "./common/Navbar";
import LearnPageTable from "./LearnPageTable";

import {
  checkUserIsAdmin,
  getAuthRequestHeaders,
  getCSRFHeaders,
} from "../utils/session";
import API from "../middleware/api";

class LearnPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      formFields: this.getInitialFormFields(),
      isModalOpen: false,
    };
  }

  componentWillMount() {
    this.refreshResearchFiles();
  }

  getInitialFormFields() {
    return {
      name: "",
      file: null,
      category: 0,
    };
  }

  getSelectedFileName() {
    const files = this.state.formFields.file;
    if (!files || files.length === 0) {
      return "No file selected";
    }
    return files[0].name;
  }

  getFilesByCategory(category) {
    return this.state.files.filter(file => file.category === category);
  }

  refreshResearchFiles = async () => {
    try {
      let { json } = await API.GetResearchFiles();
      this.setState({ files: json });
    } catch (error) {
      console.error(error);
    }
  };

  updateFormFieldCallback(fieldName) {
    return event => {
      const newState = update(this.state, {
        formFields: { [fieldName]: { $set: event.target.value } },
      });
      this.setState(newState);
    };
  }

  updateRadioFieldCallback = fieldName => event => {
    const newState = update(this.state, {
      formFields: {
        [fieldName]: { $set: parseInt(event.currentTarget.value) },
      },
    });
    this.setState(newState);
  };

  updateFilesChangedCallback = event => {
    const newState = update(this.state, {
      formFields: { file: { $set: event.currentTarget.files } },
    });
    this.setState(newState);
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleSuccessfulUpload = async signedIds => {
    const toaster = Toaster.create();
    if (!signedIds || signedIds.length === 0) {
      toaster.show({
        message: "Error occurred during file upload",
        intent: Intent.DANGER,
      });
      return;
    }

    const researchFile = update(this.state.formFields, {
      file: { $set: signedIds[0] },
    });

    try {
      await API.CreateResearchFile(researchFile);
    } catch (error) {
      toaster.show({
        message: "Error occurred during file creation",
        intent: Intent.DANGER,
      });
      return;
    }
    toaster.show({
      message: "File successfully uploaded!",
      intent: Intent.SUCCESS,
    });

    this.setState({ formFields: this.getInitialFormFields() });
    this.closeModal();
    this.refreshResearchFiles();
  };

  renderFileUploadModal() {
    return (
      <Dialog onClose={this.closeModal} isOpen={this.state.isModalOpen}>
        <div className={Classes.DIALOG_HEADER}>
          <H4>Upload File</H4>
        </div>
        <DirectUploadProvider
          endpoint={{
            path: "/api/research_files",
            model: "Research_File",
            attribute: "file",
            method: "POST",
          }}
          headers={{
            ...getAuthRequestHeaders(),
            ...getCSRFHeaders(),
          }}
          onSuccess={this.handleSuccessfulUpload}
          render={({ handleUpload, uploads, ready }) => (
            <React.Fragment>
              <div className={Classes.DIALOG_BODY}>
                <FormGroup
                  label="Display Name"
                  labelFor="name-input"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="name-input"
                    placeholder="Enter name here..."
                    onChange={this.updateFormFieldCallback("name")}
                    value={this.state.formFields.name}
                    large
                  />
                </FormGroup>

                <RadioGroup
                  label="Research File Category"
                  onChange={this.updateRadioFieldCallback("category")}
                  selectedValue={this.state.formFields.category}
                >
                  <Radio label="Campus" value={0} />
                  <Radio label="Statewide" value={1} />
                  <Radio label="National" value={2} />
                </RadioGroup>

                <FormGroup
                  label="File"
                  labelFor="file-input"
                  labelInfo="(required)"
                >
                  <FileInput
                    id="file-input"
                    disabled={!ready}
                    text={this.getSelectedFileName()}
                    onInputChange={this.updateFilesChangedCallback}
                  />
                </FormGroup>

                {uploads.map(upload => {
                  switch (upload.state) {
                    case "waiting":
                      return (
                        <p key={upload.id}>
                          Waiting to upload {upload.file.name}
                        </p>
                      );
                    case "uploading":
                      return (
                        <ProgressBar
                          key={upload.id}
                          intent={Intent.PRIMARY}
                          value={upload.progress / 100.0}
                        />
                      );
                    case "finished":
                      return (
                        <ProgressBar
                          key={upload.id}
                          intent={Intent.SUCCESS}
                          value={1}
                        />
                      );
                  }
                })}
              </div>

              <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                  <Button large text="Cancel" onClick={this.closeModal} />
                  <Button
                    large
                    className="button-primary"
                    intent={Intent.PRIMARY}
                    text="Submit"
                    onClick={() => {
                      handleUpload(this.state.formFields.file);
                    }}
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        />
      </Dialog>
    );
  }

  render() {
    const latest_file_url =
      this.state.files.length > 0 ? this.state.files[0].download_link : "/";

    return (
      <div className="learn-page-container">
        <Navbar
          onLogin={this.refreshResearchFiles}
          onLogout={this.refreshResearchFiles}
        />
        {this.renderFileUploadModal()}

        <div className="learn-page-banner-overlay">
          <div className="learn-page-banner">
            <div className="learn-page-banner-text">
              {" "}
              <h2 className="learn-page-white-text">
                Basic Needs Security — <br />
                Learning Materials
              </h2>
              <p className="learn-page-white-text">
                UC Berkeley Basic Needs efforts have been featured in the three
                largest studies in the country on college student basic needs.
                Additionally, UC Berkeley was selected by the Federal Government
                Accountability Office to be included in their first national
                study on college student food insecurity. Each year, UC Berkeley
                Basic Needs publishes a report on the current status of food,
                housing, and economic efforts in order to continue to learn
                collectively as a campus community.
              </p>
              <br />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdn4AVI-u6Os6h5iUn0jseB6KyuLOf5omxkciIsIsxMSPe60Q/viewform?vc=0&c=0&w=1"
                target="_blank"
              >
                <Button
                  large
                  className="button-primary"
                  intent={Intent.PRIMARY}
                  text="View 2017-2018 Annual Report"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-container">
          <div className="learn-page-title-container">
            {/* <h1>Research</h1> */}
            {checkUserIsAdmin() && (
              <Button
                large
                className="button-primary"
                intent={Intent.PRIMARY}
                rightIcon="add"
                text="Upload new file"
                onClick={this.openModal}
              />
            )}
          </div>

          <p className="learn-page-research-description" />

          <h3 className="learn-page-research-category" id="campus">
            Campus Research
          </h3>
          <LearnPageTable files={this.getFilesByCategory("campus")} />
          <h3 className="learn-page-research-category" id="state">
            Statewide Research
          </h3>
          <LearnPageTable files={this.getFilesByCategory("statewide")} />
          <h3 className="learn-page-research-category" id="national">
            National Research
          </h3>
          <LearnPageTable files={this.getFilesByCategory("national")} />
        </div>
      </div>
    );
  }
}

export default LearnPage;
