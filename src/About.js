import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="About container-fluid">
        <div className="row header">
          <div className="col-md h1 text-center">About</div>
        </div>
        <div className="About-content container">
          <div className="row">
            <div className="col-md p-3">
              <div className="row">
                <div className="col-md h3">Purpose</div>
              </div>
              <div className="row">
                <div className="col-md">This is a multipage web application template.</div>
              </div>
            </div>
            <div className="col-md p-3">
              <div className="row">
                <div className="col-md h3">Author</div>
              </div>
              <div className="row">
                <div className="col-md">Egor Filonov</div>
              </div>
            </div>
            <div className="col-md p-3">
              <div className="row">
                <div className="col-md h3">Date of creation</div>
              </div>
              <div className="row">
                <div className="col-md">30.12.2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
