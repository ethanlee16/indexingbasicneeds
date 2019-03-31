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
            with the campus community. The Frequently Asked Questions page will
            continue to improve as we collectively earn better knowledge as a
            community.
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
                hours every week. You can visit the CalFresh{" "}
                <a href="http://calfresh.berkeley.edu/" target="_blank">
                  website
                </a>{" "}
                to find out about about CalFresh eligibility and visit our{" "}
                <Link to="/calendar">calendar</Link> to attend an application
                session. CalFresh Student Ambassadors and Alameda County
                Community Food Bank staff can support you through the process.
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
                  form.
                </a>
              </p>
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-question">
              <h3>
                I don't qualify for CalFresh - what other programs am I
                potentially eligible for?
              </h3>
            </div>
            <div className="faq-answer">
              <p>
                The{" "}
                <a
                  href="https://financialaid.berkeley.edu/food-assistance-program"
                  target="_blank"
                >
                  Food Assistance Program
                </a>{" "}
                is available to non-CalFresh eligible students with financial
                need and CalFresh eligible students in extreme need (who have
                yet to receive their CalFresh debit card) who have exhausted
                other funding options, including student loans (if applicable).
                Eligible students need to be in the process of applying for{" "}
                <a
                  href="https://students.getcalfresh.org/?source=ucb"
                  target="_blank"
                >
                  CalFresh
                </a>
                , or be ineligible for Cal Fresh benefits in order to be
                considered for the Food Assistance Program.
              </p>
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-question">
              <h3>
                I'm looking for off-campus housing for the first time - where do
                I start?
              </h3>
            </div>
            <div className="faq-answer">
              <p>
                <a href="https://och.berkeley.edu/" target="_blank">
                  Cal Rentals
                </a>{" "}
                is a helpful on and off-campus housing portal for UC Berkeley
                students. The{" "}
                <a href="https://www.cityofberkeley.info/rent/" target="_blank">
                  Berkeley Rent Stabilization Board
                </a>{" "}
                is a great resource for first-time renters.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQPage;
