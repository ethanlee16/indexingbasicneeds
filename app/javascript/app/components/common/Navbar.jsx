/**
 * Navbar handling login/logout.
 *
 * @prop {function} onLogin: callback after successful login
 * @prop {function} onLogout: callback after successful logout
 */

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
  Tag,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import API from "../../middleware/api";
import {
  cacheUserSession,
  removeUserSession,
  checkUserIsAdmin,
} from "../../utils/session";

import Logo from "images/bnc-logo-white.png";

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

  login = async e => {
    e.preventDefault();
    let toaster = Toaster.create();
    let user;
    try {
      user = await API.Login(
        this.state.loginFormFields.email,
        this.state.loginFormFields.password
      );
    } catch (error) {
      console.error(error);
      toaster.show({ message: "Error when logging in", intent: Intent.DANGER });
      throw error;
    }

    this.setState({ user: user });
    toaster.show({
      message: "Successfully logged in",
      intent: Intent.SUCCESS,
    });
    this.handleCloseModal();

    this.props.onLogin && this.props.onLogin();
  };

  logout = async () => {
    let toaster = Toaster.create();
    try {
      await API.Logout();
    } catch (error) {
      console.error(error);
      toaster.show({
        message: "Error when logging out",
        intent: Intent.DANGER,
      });
      return;
    }

    removeUserSession();
    this.setState({ user: null });
    toaster.show({
      message: "Successfully logged out",
      intent: Intent.SUCCESS,
    });

    this.props.onLogout && this.props.onLogout();
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
                type="submit"
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

  renderUserString() {
    if (!this.state.user) return null;
    return (
      <span>
        {this.state.user.email}
        {this.state.user.is_admin && (
          <Tag round className="navbar-admin-tag">
            ADMIN
          </Tag>
        )}
      </span>
    );
  }

  render() {
    return (
      <Navbar fixedToTop className="bns-navbar bp3-dark">
        {this.renderLoginModal()}
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <Link to="/">
              <img src={Logo} className="navbar-image" />
            </Link>
          </NavbarHeading>
          <NavbarDivider />
          <Link to="/resources" className="bns-navbar-item">
            <Button
              className={Classes.MINIMAL}
              icon="projects"
              text="Resources"
            />
          </Link>
          {/* <Link to="/guides" className="bns-navbar-item">
            <Button
              className={Classes.MINIMAL}
              icon="manual"
              text="Student Guides"
            />
          </Link> */}
          <Link to="/about" className="bns-navbar-item">
            <Button className={Classes.MINIMAL} icon="book" text="About" />
          </Link>
          <Link to="/get_involved" className="bns-navbar-item">
            <Button
              className={Classes.MINIMAL}
              icon="people"
              text="Get Involved"
            />
          </Link>
          <Link to="/calendar" className="bns-navbar-item">
            <Button
              className={Classes.MINIMAL}
              icon="calendar"
              text="Calendar"
            />
          </Link>
          <Link to="/learn" className="bns-navbar-item">
            <Button className={Classes.MINIMAL} icon="chart" text="Learn" />
          </Link>
          {this.state.user && this.state.user.is_admin ? (
            <a href="/admin" className="bns-navbar-item">
              <Button
                className="button-primary"
                intent={Intent.PRIMARY}
                icon="badge"
                text="Manage"
              />
            </a>
          ) : (
            <Link to="/donate" className="bns-navbar-item">
              <Button
                className="button-primary"
                intent={Intent.PRIMARY}
                text="Donate"
              />
            </Link>
          )}
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarDivider />
          <Popover content={this.renderLoginMenu()} position={Position.BOTTOM}>
            <Button
              className={Classes.MINIMAL}
              icon="user"
              text={this.renderUserString()}
            />
          </Popover>
        </NavbarGroup>
      </Navbar>
    );
  }
}
