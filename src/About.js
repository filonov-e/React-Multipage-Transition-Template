import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="About">
        <header>
          <h1>About</h1>
        </header>
        <div className="About-content">
          <h3>Purpose</h3>
          <p>This is a multipage web application template.</p>

          <h3>Author</h3>
          <p>Egor Filonov</p>

          <h3>Date of creation</h3>
          <p>30.12.2018</p>
        </div>
      </div>
    );
  }
}

export default About;
