import React from 'react';

class ResourceList extends React.Component {
  renderResources() {
    return this.props.resources.map(resource => (
      <div>
        resource.title
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderResources()}
      </div>
    )
  }
}

export default ResourceList
