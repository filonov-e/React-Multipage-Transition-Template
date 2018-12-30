import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return(
      <div className="Contacts">
        <header>
          <h1>Contacts</h1>
        </header>
        <div className="Contacts-content">
          <h3>E-mail:</h3>
          <p>some@email.fi</p>

          <h3>Telephone:</h3>
          <p>+358123456789</p>

          <h3>Address:</h3>
          <p>Somestreet 12 A 3</p>
        </div>
      </div>
    );
  }
}

export default Contacts;
