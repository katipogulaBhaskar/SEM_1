// Modify App.js to include a JSX comment explaining JSX:

import React from 'react';
import Footer from './Footer';

function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      {/* JSX is a syntax extension for JavaScript that allows us to write HTML-like code directly in our JavaScript. */}
      <p>React is a JavaScript library for building UIs.</p>
      <Footer />
    </div>
  );
}

export default App;
