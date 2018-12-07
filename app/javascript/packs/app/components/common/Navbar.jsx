import classNames from "classnames";
import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Dialog,
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
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Logo from "images/bns-logo.svg";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: "",
    };
  }

  handleOpenModal = (type = "login") => {
    return () => {
      this.setState({ modalOpen: type });
      console.log(this.state);
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
        <div className={Classes.DIALOG_BODY}>
          <FormGroup label="Email" label-for="login-username">
            <InputGroup
              id="login-username"
              leftIcon="user"
              placeholder="youremail@gmail.com"
            />
          </FormGroup>
          <FormGroup label="Password" label-for="login-password">
            <InputGroup id="login-password" leftIcon="lock" type="password" />
          </FormGroup>
        </div>
      </Dialog>
    );
  }

  renderLoginMenu() {
    return (
      <Menu>
        <MenuItem
          icon="log-in"
          text="Log In"
          onClick={this.handleOpenModal("login")}
        />
        <MenuItem
          icon="new-person"
          text="Sign Up"
          onClick={this.handleOpenModal("signup")}
        />
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
            <Button className={Classes.MINIMAL} icon="user" />
          </Popover>
        </NavbarGroup>
      </Navbar>
    );
  }
}
