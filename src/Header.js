import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
