import React from "react";

import Navbar from "./common/Navbar";
import DonateSection from "./DonateSection";

class DonatePage extends React.Component {
  render() {
    return (
      <div className="container donate-page">
        <Navbar />
        {/* Donate */}
        <DonateSection />
        {/* End of Container */}
      </div>
    );
  }
}

export default DonatePage;
