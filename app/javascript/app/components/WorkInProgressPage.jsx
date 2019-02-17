import React from "react";
import { Button, NonIdealState } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

class WorkInProgressPage extends React.Component {
  render() {
    const action = (
      <Link to={`/`}>
        <Button large text="Go back home" icon="home" />
      </Link>
    );
    return (
      <div className="page-container" style={{ marginTop: "100px" }}>
        <Navbar />
        <NonIdealState
          icon="build"
          title="In Construction!"
          description="This page is currently under construction and will be ready for you soon. Thank you for your patience!"
          action={action}
        />
      </div>
    );
  }
}

export default WorkInProgressPage;
