import React from "react";
import { Route } from "react-router-dom";

// TODO: Place NavBar here as well
import Footer from "./Footer";

const PageLayout = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={matchProps => (
      <div>
        <Component {...matchProps} />
        <Footer />
      </div>
    )}
  />
);

export default PageLayout;
