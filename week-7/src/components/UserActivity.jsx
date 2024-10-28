import React from 'react';

const UserActivity = ({ activities }) => {
  return (
    <div>
      <h2>Recent Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivity;

