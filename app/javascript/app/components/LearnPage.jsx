import React from "react";
import ActiveStorageProvider, {
  DirectUploadProvider,
} from "react-activestorage-provider";
import {
  Button,
  H1,
  Intent,
  Dialog,
  H2,
  Classes,
  H4,
  FormGroup,
  InputGroup,
  Toaster,
  FileInput,
  Card,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import update from "immutability-helper";

import Navbar from "./common/Navbar";

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

  async refreshResearchFiles() {
    try {
      let { json, headers } = await API.GetResearchFiles();
      this.setState({ files: json });
    } catch (error) {
      console.error(error);
    }
  }

  updateFormFieldCallback(fieldName) {
    return event => {
      const newState = update(this.state, {
        formFields: { [fieldName]: { $set: event.target.value } },
      });
      this.setState(newState);
    };
  }

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
    this.closeModal();
    this.refreshResearchFiles();
  };

  renderFileUploadModal() {
    return (
      <Dialog onClose={this.closeModal} isOpen={this.state.isModalOpen}>
        <div className={Classes.DIALOG_HEADER}>
          <H4>Upload File</H4>
        </div>
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
              <div>
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

                <Button
                  large
                  className="button-primary"
                  intent={Intent.PRIMARY}
                  text="Submit"
                  onClick={() => {
                    handleUpload(this.state.formFields.file);
                  }}
                />

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
                        <p key={upload.id}>
                          Uploading {upload.file.name}: {upload.progress}%
                        </p>
                      );
                    case "finished":
                      return (
                        <p key={upload.id}>
                          Finished uploading {upload.file.name}
                        </p>
                      );
                  }
                })}
              </div>
            )}
          />
        </div>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="page-container">
        <Navbar />
        {this.renderFileUploadModal()}
        <div className="learn-page-title-container">
          <H1>Learn</H1>
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

        {this.state.files.map(file => (
          <Card>{file.name}</Card>
        ))}
      </div>
    );
  }
}

export default LearnPage;
