import classNames from "classnames";
import update from "immutability-helper";
import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Dialog,
  Intent,
  Menu,
  MenuDivider,
  MenuItem,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position,
  FormGroup,
  InputGroup,
  Toaster,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import API from "../../middleware/api";
import { cacheUserSession, removeUserSession } from "../../utils/session";

import Logo from "images/bns-logo.svg";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      modalOpen: "",
      loginFormFields: {
        email: "",
        password: "",
      },
      signupFormFields: {
        email: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  }

  componentDidMount() {
    this.hydrateUser();
  }

  hydrateUser() {
    if (localStorage.hasOwnProperty("user")) {
      try {
        let user = JSON.parse(localStorage.getItem("user"));
        this.setState({ user: user });
      } catch (error) {
        return;
      }
    }
  }

  updateLoginFieldCallback(fieldName) {
    return event => {
      const newState = update(this.state, {
        loginFormFields: { [fieldName]: { $set: event.target.value } },
      });
      this.setState(newState);
    };
  }

  updateSignupFieldCallback(fieldName) {
    return event => {
      const newState = update(this.state, {
        signupFormFields: { [fieldName]: { $set: event.target.value } },
      });
      this.setState(newState);
    };
  }

  login = async () => {
    let toaster = Toaster.create();
    try {
      let { json, headers } = await API.Login(
        this.state.loginFormFields.email,
        this.state.loginFormFields.password
      );
      let user = json.data;
      cacheUserSession(user, headers);
      this.setState({ user: user });
      toaster.show({
        message: "Successfully logged in",
        intent: Intent.SUCCESS,
      });
    } catch (error) {
      console.error(error);
      toaster.show({ message: "Error when logging in", intent: Intent.DANGER });
    }
  };

  logout = async () => {
    let toaster = Toaster.create();
    try {
      await API.Logout();
      removeUserSession();
      this.setState({ user: null });
      toaster.show({
        message: "Successfully logged out",
        intent: Intent.SUCCESS,
      });
    } catch (error) {
      console.error(error);
      toaster.show({
        message: "Error when logging out",
        intent: Intent.DANGER,
      });
    }
  };

  handleOpenModal = (type = "login") => {
    return () => {
      this.setState({ modalOpen: type });
    };
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: "" });
  };

  renderLoginModal() {
    return (
      <Dialog
        onClose={this.handleCloseModal}
        isOpen={this.state.modalOpen === "login"}
        title="Log In"
      >
        <form>
          <div className={Classes.DIALOG_BODY}>
            <FormGroup label="Email" label-for="login-email">
              <InputGroup
                large
                autoFocus
                id="login-email"
                leftIcon="user"
                placeholder="youremail@gmail.com"
                onChange={this.updateLoginFieldCallback("email")}
              />
            </FormGroup>
            <FormGroup label="Password" label-for="login-password">
              <InputGroup
                large
                id="login-password"
                leftIcon="lock"
                type="password"
                onChange={this.updateLoginFieldCallback("password")}
              />
            </FormGroup>
          </div>

          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button
                large
                intent="primary"
                type="button"
                text="Submit"
                onClick={this.login}
              />
            </div>
          </div>
        </form>
      </Dialog>
    );
  }

  renderSignupModal() {
    return (
      <Dialog
        onClose={this.handleCloseModal}
        isOpen={this.state.modalOpen === "signup"}
        title="Sign Up"
      >
        <div className={Classes.DIALOG_BODY}>
          <FormGroup label="Email" label-for="signup-email">
            <InputGroup
              large
              autoFocus
              id="signup-email"
              leftIcon="user"
              placeholder="youremail@gmail.com"
            />
          </FormGroup>
          <FormGroup label="Password" label-for="signup-password">
            <InputGroup
              large
              id="signup-password"
              leftIcon="lock"
              type="password"
            />
          </FormGroup>
          <FormGroup label="Password" label-for="signup-password-confirmation">
            <InputGroup
              large
              id="signup-password-confirmation"
              leftIcon="lock"
              type="password"
            />
          </FormGroup>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button large intent="primary" text="Submit" />
          </div>
        </div>
      </Dialog>
    );
  }

  renderLoginMenu() {
    if (this.state.user) {
      return (
        <Menu>
          <MenuItem icon="log-out" text="Log Out" onClick={this.logout} />
        </Menu>
      );
    }

    // TODO (Ken): Temporarily blocked sign up for now. Re-enable when sign up is connected.
    return (
      <Menu>
        <MenuItem
          icon="log-in"
          text="Log In"
          onClick={this.handleOpenModal("login")}
        />
        {/* <MenuItem
          icon="new-person"
          text="Sign Up"
          onClick={this.handleOpenModal("signup")}
        /> */}
      </Menu>
    );
  }

  render() {
    return (
      <Navbar fixedToTop>
        {this.renderLoginModal()}
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <Link to="/">
              <img src={Logo} className="navbar-image" />
            </Link>
          </NavbarHeading>
          <NavbarDivider />
          <Link to="/">
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
          </Link>
          <Link to="/resources">
            <Button
              className={Classes.MINIMAL}
              icon="projects"
              text="Resources"
            />
          </Link>
          <Link to="/guides">
            <Button
              className={Classes.MINIMAL}
              icon="book"
              text="Student Guides"
            />
          </Link>
          <Link to="/about">
            <Button className={Classes.MINIMAL} icon="people" text="About" />
          </Link>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarDivider />
          <Popover content={this.renderLoginMenu()} position={Position.BOTTOM}>
            <Button
              className={Classes.MINIMAL}
              icon="user"
              text={!!this.state.user ? this.state.user.email : null}
            />
          </Popover>
        </NavbarGroup>
      </Navbar>
    );
  }
}
