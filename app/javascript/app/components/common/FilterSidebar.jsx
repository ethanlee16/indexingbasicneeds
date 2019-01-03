import React from "react";
import { FormGroup, Checkbox } from "@blueprintjs/core";

class FilterSidebar extends React.Component {
  render() {
    return (
      <div className="filter-sidebar">
        {this.props.sections.map((section, i) => {
          return (
            <div key={`section-${i}`}>
              <h3 className="filter-sidebar-header">{section.name}</h3>
              <FormGroup>
                {section.tags.map(tag => {
                  return (
                    <Checkbox
                      label={tag.name}
                      onChange={this.props.checkTagCallback(tag.id)}
                      key={`tag-${tag.id}`}
                    />
                  );
                })}
              </FormGroup>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FilterSidebar;
