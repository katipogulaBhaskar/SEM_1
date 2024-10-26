// Create a new file Greeting.js in the src folder:

import React from 'react';

function Greeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning!" : "Good evening!";
  return <h2>{greeting}</h2>;
}

export default Greeting;


// Use Greeting in App.js:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Content />
      <FavoriteFoods />
      <Footer />
    </div>
  );
}

// export default App;
