import React from "react";
import { HashLink } from "react-router-hash-link";
import * as contentful from "contentful";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Navbar from "./common/Navbar";

import GetInvolvedImg from "images/Get_Involved_1_Intro.jpg";
import StudentCoImg from "images/Get_Involved_2_Student_Coalition.jpg";
import FoodPantryImg from "images/Get_Involved_3_Food_Pantry.jpg";
import kebabCase from "../utils/kebabCase";

const client = contentful.createClient({
  space: "2ftjcpa1p8eb",
  accessToken:
    "9ece7e92db953755efad9de096b41355f20271aea6e0b2903d2cc3eb215f1d92",
});

class GetInvolvedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {},
    };
  }

  async componentDidMount() {
    try {
      const entry = await GetInvolvedPage.fetchContentfulPage();
      this.setState({ entry });
    } catch (err) {
      // TODO: Provide user messaging and retry
      console.error(err);
    }
  }

  static async fetchContentfulPage() {
    return await client.getEntry("2m7m6YEdaGC9H9jrAQVTtT");
  }

  static getHeadings(contentfulEntry) {
    if (!contentfulEntry.fields || !contentfulEntry.fields.content) return [];
    return contentfulEntry.fields.content.content
      .filter(block => {
        return block.nodeType === BLOCKS.HEADING_2;
      })
      .map(block => block.content[0].value);
  }

  render() {
    return (
      <div className="container home-page">
        <Navbar />
        <div className="get-involved-container">
          <div className="get-involved-left-container">
            <div className="get-involved-menu">
              {this.state.entry.fields &&
                GetInvolvedPage.getHeadings(this.state.entry).map(heading => (
                  <HashLink
                    className="get-involved-item"
                    to={`/get_involved#${kebabCase(heading)}`}
                    key={kebabCase(heading)}
                  >
                    {heading}
                  </HashLink>
                ))}
            </div>
          </div>
          <div className="get-involved-right-container">
            <img
              className="get-involved-banner-img"
              src={GetInvolvedImg}
              alt="Center"
            />
            <div className="get-involved-text">
              {this.state.entry.fields &&
                documentToReactComponents(this.state.entry.fields.content, {
                  renderNode: {
                    [BLOCKS.HEADING_2]: ({ content }) => (
                      <h2 id={kebabCase(content[0].value)}>
                        {content[0].value}
                      </h2>
                    ),
                    [BLOCKS.EMBEDDED_ASSET]: ({
                      data: {
                        target: {
                          fields: { file },
                        },
                      },
                    }) => <img src={file.url} style={{ maxWidth: "50%" }} />,
                  },
                })}
            </div>
          </div>
        </div>

        {/* End of Container */}
      </div>
    );
  }
}

export default GetInvolvedPage;

const fetchContentfulPage = GetInvolvedPage.fetchContentfulPage;
const getHeadings = GetInvolvedPage.getHeadings;
export { fetchContentfulPage, getHeadings };
