import React from 'react';

class ResourceList extends React.Component {
  // class component
  renderResources() {
    return this.props.resources.map(resource => (
//begin tonya
          // this is an element
          <div className="Resource-Info">
            <img className="img"></img>
            <div className="title">
              {resource.title}
            </div>
            <div className="description">
              {resource.description}
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
    ))
//end tonya
  }

  render() {
    // move the body of the function into render,
    // replace props w/ this.props
    return (
      <div>
        {this.renderResources()}
      </div>
    )
  }
}

export default ResourceList
