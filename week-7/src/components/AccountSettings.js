import React, { useState } from 'react';

const AccountSettings = ({ settings, onSave }) => {
  const [email, setEmail] = useState(settings.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ email });
  };

  return (
    <div>
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AccountSettings;
