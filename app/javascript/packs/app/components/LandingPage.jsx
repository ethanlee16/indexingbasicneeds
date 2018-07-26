import React from 'react';

class LandingPage extends React.Component {

  hello = () => {
    alert("hi tonya")
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <button onClick={this.hello}>
          Click me
        </button>
      </div>
    )
  }
}

export default LandingPage
