// In App.js, add an array of names and render them as a list:

import React from 'react';
import Footer from './Footer';

function App() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <div>
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
