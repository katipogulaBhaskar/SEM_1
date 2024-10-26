// Create a new file Content.js in the src folder:

import React from 'react';

function Content() {
  return (
    <p>This is some content about the application.</p>
  );
}

export default Content;


// Use the Content component in App.js:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// export default App;
