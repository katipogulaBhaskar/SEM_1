// Modify Profile.js:

import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default Profile;
