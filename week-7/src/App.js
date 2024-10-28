import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileInfo from './components/ProfileInfo';
import UserActivity from './components/UserActivity';
import AccountSettings from './components/AccountSettings';
import useFetchUserData from './hooks/useFetchUserData';

const App = () => {
  const { data, loading } = useFetchUserData('/api/user');
  
  const handleUpdateProfile = (updatedUser) => {
    // Logic to update profile (e.g., API call)
  };

  const handleSaveSettings = (updatedSettings) => {
    // Logic to save settings (e.g., API call)
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <ProfileInfo user={data.user} onUpdate={handleUpdateProfile} />
        </Route>
        <Route path="/activities">
          <UserActivity activities={data.activities} />
        </Route>
        <Route path="/settings">
          <AccountSettings settings={data.settings} onSave={handleSaveSettings} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
