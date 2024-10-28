import React, { useState } from 'react';

const ProfileInfo = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...user, name });
  };

  return (
    <div>
      <h2>Profile Info</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfileInfo;
