import React, { Component } from 'react';

import { AUTH_TOKEN } from './constants'

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

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
          {authToken && (
            <li>
              <div>
                <Link to="/profile">
                  Profile
                </Link>
              </div>
            </li>
          )}
              {authToken ? (
                <li>
                    <div
                    onClick={() => {
                      localStorage.removeItem(AUTH_TOKEN)
                      window.location.href = "/";
                    }}
                  >
                    <a href="/">Logout</a>
                  </div>
                </li>
              ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
              )}
        </ul>
      </div>
    );
  }
}

export default Header;
