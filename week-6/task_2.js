// src/App.js

import React from 'react';

function App() {
  return <h1>Welcome to React!</h1>;
}

export default App;

// Update index.js to render <App /> instead of Hello, World!

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

