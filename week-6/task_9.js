// Create a new file Profile.js in the src folder:

import React from 'react';

function Profile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default Profile;
