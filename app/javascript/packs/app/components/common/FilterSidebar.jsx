import React from "react";
import { FormGroup, Checkbox } from "@blueprintjs/core";

class FilterSidebar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.sections.map((section, i) => {
          return (
            <div key={`section-${i}`}>
              <h3>{section.name}</h3>
              <FormGroup label="Other Filters" labelFor="text-input">
                {section.tags.map(tag => {
                  return (
                    <Checkbox
                      label={tag.name}
                      onChange={this.props.checkTagCallback(tag.id)}
                      key={`resource-tag-${tag.id}`}
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
