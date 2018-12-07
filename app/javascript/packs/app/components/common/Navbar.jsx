import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Menu,
  MenuDivider,
  MenuItem,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Overlay,
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
      <Overlay
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        onClose={this.handleCloseModal}
        isOpen={this.state.modalOpen === "login"}
      >
        <FormGroup
          helperText="Helper text"
          label="Email"
          label-for="login-username"
        >
          <InputGroup
            id="login-username"
            leftIcon="user"
            placeholder="youremail@gmail.com"
          />
        </FormGroup>
        <FormGroup
          helperText="Helper text"
          label="Password"
          label-for="login-password"
        >
          <InputGroup id="login-password" leftIcon="lock" type="password" />
        </FormGroup>
      </Overlay>
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
