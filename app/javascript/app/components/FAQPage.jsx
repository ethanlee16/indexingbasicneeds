import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Navbar from "./common/Navbar";

class FAQPage extends React.Component {
  render() {
    return (
      <div className="faq-page container">
        {/* Landing Block */}
        <Navbar />
        <div className="faq-landing">
          <h1>Frequently Asked Questions</h1>
          <p>
            The Basic Needs Center is committed to actively working and engaging
            with the campus community. Please feel free to submit questions
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd6hMxM_S2NvaxKjqNMZClc-UybEzqGV6nZT-iqob9i8iibXg/viewform?vc=0&c=0&w=1"
              target="_blank"
            >
              {" "}
              here
            </a>
            .
          </p>
        </div>
        <div className="faq-questions-container">
          <div className="faq-card">
            <div className="faq-question">
              <h3>
                I’m interested in applying for CalFresh but don’t know where to
                begin.
              </h3>
            </div>
            <div className="faq-answer">
              <p>
                We have CalFresh Ambassadors who have application assistance
                hours every week
              </p>
            </div>
          </div>

          <div className="faq-card">
            <div className="faq-question">
              <h3>Who do I contact if I’m interested in the following:</h3>
            </div>
            <div className="faq-answer">
              <ul>
                <li>Basic Needs presentation/guest lecture</li>
                <li>Media inquiry/interview</li>
                <li>Food Pantry tour</li>
                <li>Basic Needs resources</li>
                <li>Panelist participation</li>
                <li>Basic Needs data</li>
              </ul>

              <p>
                Complete this Basic Needs Inquiry{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd6hMxM_S2NvaxKjqNMZClc-UybEzqGV6nZT-iqob9i8iibXg/viewform?vc=0&c=0&w=1"
                  target="_blank"
                >
                  form
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQPage;
