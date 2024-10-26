// In App.js, add inline styling to change the color:

import React from 'react';
import Footer from './Footer';

function App() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <div>
      <h1 style={{ color: 'blue' }}>Hello, World!</h1>
      <h1>Welcome to React!</h1>
      <p>React is a JavaScript library for building UIs.</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
