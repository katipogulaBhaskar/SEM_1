// Modify App.js to include the Header and Footer components:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile'; // If using Profile component
import UserCard from './UserCard'; // If using UserCard component

function App() {
  return (
    <div>
      <Header />
      <h1 style={{ color: 'blue' }}>Hello, World!</h1>
      <h1>Welcome to React!</h1>
      <p>React is a JavaScript library for building UIs.</p>
      <Profile name="Alice" age={30} />
      <UserCard name="Bob" location="New York" />
      <Footer />
    </div>
  );
}

export default App;
