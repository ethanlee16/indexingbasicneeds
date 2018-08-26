import React from 'react';

class ResourceList extends React.Component {
  renderResources() {
    return this.props.resources.map(resource => (
      <div className="Resources-Page">
        <div className="Tabs"></div>
        <div className="Search">
          <div className="TextField"></div>
          <div className="SearchBtn"></div>
        </div>

        <div className="Resources">
          <div className="Resource">
            <div className="img"> </div>
            <div className="title">
              {resource.title}
            </div>
            <div className="description">
              {resource.title}
            </div>
            <div className="links">
              <div className="link">
                {resource.link}
              </div>
              <div className="upvotes">
                {resource.votes}
              </div>
            </div>
          
          </div>
        </div>
        
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
