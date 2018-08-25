import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

// TODO (Ken): Bulk import Bootstrap, use individual modules later
import "bootstrap";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Routes />, document.getElementById("app"));
});
