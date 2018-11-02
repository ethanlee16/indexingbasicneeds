import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
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
            <Button className={Classes.MINIMAL} icon="none" text="Home" />
          </Link>
          <Link to="/resources">
            <Button
              className={Classes.MINIMAL}
              icon="none"
              text="Resources"
            />
          </Link>
          <Link to="/guides">
            <Button
              className={Classes.MINIMAL}
              icon="none"
              text="Student Guides"
            />
          </Link>
          <Link to="/about">
            <Button className={Classes.MINIMAL} icon="none" text="About" />
          </Link>
          <Link to="/getinvolved">
            <Button className={Classes.MINIMAL} icon="none" text="Get Involved" />
          </Link>
          <Link to="/donate">
            <Button className={Classes.MINIMAL} icon="none" text="Donate" />
          </Link>
        </NavbarGroup>
      </Navbar>
    );
  }
}
