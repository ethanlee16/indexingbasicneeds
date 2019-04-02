import React from "react";
import { HashLink } from "react-router-hash-link";
import API from "../middleware/api";
import { fetchContentfulPage, getHeadings } from "./GetInvolvedPage";
import kebabCase from "../utils/kebabCase";
import "../assets/stylesheets/footer.scss";

const FooterLink = ({ to, text, external }) => (
  <p className="footer-link">
    {!external ? (
      <HashLink to={to}>{text}</HashLink>
    ) : (
      <a href={to} target="_blank">
        {text}
      </a>
    )}
  </p>
);

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentResourceTags: [],
      getInvolvedHeadings: [],
    };
  }

  async componentDidMount() {
    try {
      const { json } = await API.GetResourceTags();
      const getInvolvedPage = await fetchContentfulPage();
      this.setState({
        studentResourceTags: json.filter(tag => tag.category === "student"),
        getInvolvedHeadings: getHeadings(getInvolvedPage),
      });
    } catch (err) {
      // TODO: There should be some fallback behavior defined here
      console.error(err);
    }
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-section">
            <p className="footer-header">About</p>
            <FooterLink to="/about" text="Our Center" />
            <FooterLink to="/about#services" text="Our Services" />
            <FooterLink to="/about#background" text="Background" />
            <FooterLink to="/about#village" text="Our Village" />
            <FooterLink to="/about#focus" text="Areas of Focus" />
          </div>
          <div className="footer-section">
            <p className="footer-header">Resources</p>
            {this.state.studentResourceTags.map(tag => (
              <FooterLink
                key={tag.id}
                to={`/resources?by_tags[]=${tag.id}`}
                text={tag.name}
              />
            ))}
          </div>
          <div className="footer-section">
            <p className="footer-header">Learn</p>
            <FooterLink
              to="https://docs.google.com/forms/d/e/1FAIpQLSdn4AVI-u6Os6h5iUn0jseB6KyuLOf5omxkciIsIsxMSPe60Q/viewform?vc=0&c=0&w=1"
              text="Annual Report"
              external
            />
            <FooterLink to="/learn#campus" text="Campus" />
            <FooterLink to="/learn#state" text="State-Wide" />
            <FooterLink to="/learn#national" text="National" />
          </div>
          <div className="footer-section">
            <p className="footer-header">Get Involved</p>
            {this.state.getInvolvedHeadings.map(heading => (
              <FooterLink
                key={kebabCase(heading)}
                to={`/get_involved#${kebabCase(heading)}`}
                text={heading}
              />
            ))}
          </div>
        </div>
        <div className="footer-sm-row">
          <p>Follow us on our social media</p>
        </div>
      </div>
    );
  }
}

export default Footer;
