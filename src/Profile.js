import React, { Component } from 'react';
import { AUTH_TOKEN } from './constants'

class Profile extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return(
      <div className="Profile container-fluid">
        <div className="row header">
          <div className="col-md h1">Welcome, {authToken}</div>
        </div>
        <div className="Profile-content container col-md-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio totam consequuntur, asperiores, dolor voluptatum nulla culpa alias fugiat nesciunt, facilis, amet! Ducimus officiis vitae, aliquid omnis, saepe repudiandae consectetur iure!
        </div>
      </div>
    );
  }
}

export default Profile;
