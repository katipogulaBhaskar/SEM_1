// Create a new file UserCard.js in the src folder:

import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default UserCard;
