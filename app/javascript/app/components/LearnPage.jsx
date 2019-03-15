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

  renderTableHeaders() {
    return (
      <thead>
        <tr>
          <th colSpan={2}>
            <h4 className="learn-page-research-table-header">Name</h4>
          </th>
          <th>
            <h4 className="learn-page-research-table-header">Date</h4>
          </th>
          <th>
            <h4 className="learn-page-research-table-header">Action</h4>
          </th>
        </tr>
      </thead>
    );
  }

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
    return (
      <div>
        <Navbar
          onLogin={this.refreshResearchFiles}
          onLogout={this.refreshResearchFiles}
        />
        {this.renderFileUploadModal()}

        <div className="learn-page-banner-container">
          <div className="learn-page-banner">
            <H1>Basic Needs Security — Learning Materials</H1>
          </div>
        </div>

        <div className="page-container">
          <div className="learn-page-title-container">
            <h1>Research</h1>
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

          <p className="learn-page-research-description">
            UC Berkeley Basic Needs efforts have been featured in the three
            largest studies in the country on college student basic needs.
            Additionally, UC Berkeley was selected by the Federal Government
            Accountability Office to be included in their first national study
            on college student food insecurity.
          </p>

          <h3 className="learn-page-research-category">Campus Research</h3>
          <HTMLTable className="learn-page-table">
            {this.renderTableHeaders()}
            <tbody>
              {this.getFilesByCategory("campus").map((file, i) => (
                <tr key={`campus-file-${i}`}>
                  <td>
                    <Icon icon="document" iconSize={18} />
                  </td>
                  <td>{file.name}</td>
                  <td>{file.updated_at}</td>
                  <td>
                    <a href={file.download_link} target="_blank">
                      <Button
                        large
                        minimal
                        intent={Intent.PRIMARY}
                        text="Download"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </HTMLTable>
          <h3 className="learn-page-research-category">Statewide Research</h3>
          <HTMLTable className="learn-page-table">
            {this.renderTableHeaders()}
            <tbody>
              {this.getFilesByCategory("statewide").map((file, i) => (
                <tr key={`statewide-file-${i}`}>
                  <td>
                    <Icon icon="document" iconSize={18} />
                  </td>
                  <td>{file.name}</td>
                  <td>{file.updated_at}</td>
                  <td>
                    <a href={file.download_link} target="_blank">
                      <Button
                        large
                        minimal
                        intent={Intent.PRIMARY}
                        text="Download"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </HTMLTable>

          <h3 className="learn-page-research-category">National Research</h3>
          <HTMLTable className="learn-page-table">
            {this.renderTableHeaders()}
            <tbody>
              {this.getFilesByCategory("national").map((file, i) => (
                <tr key={`national-file-${i}`}>
                  <td>
                    <Icon icon="document" iconSize={18} />
                  </td>
                  <td>{file.name}</td>
                  <td>{file.updated_at}</td>
                  <td>
                    <a href={file.download_link} target="_blank">
                      <Button
                        large
                        minimal
                        intent={Intent.PRIMARY}
                        text="Download"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </HTMLTable>
        </div>
      </div>
    );
  }
}

export default LearnPage;
