import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Logo from "images/bns-logo.svg";

export default class extends React.Component {
  render() {
    return (
      <Navbar fixedToTop>
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
        </NavbarGroup>
      </Navbar>
    );
  }
}
