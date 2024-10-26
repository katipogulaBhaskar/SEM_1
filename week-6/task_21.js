// Create a new file DateTime.js in the src folder:

import React from 'react';

function DateTime() {
  const now = new Date().toLocaleString();

  return (
    <div>
      <h2>Current Date and Time: {now}</h2>
    </div>
  );
}

export default DateTime;


// Use the DateTime component in App.js:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';
import Greeting from './Greeting';
import Counter from './Counter';
import ComplexComponent from './ComplexComponent';
import DateTime from './DateTime';

function App() {
  const name = "Your Name"; // Replace with your actual name
  return (
    <div>
      <Header />
      <Greeting />
      <Content />
      <FavoriteFoods />
      <Counter />
      <ComplexComponent />
      <h2>Hello, {name}!</h2>
      <DateTime />
      <Footer />
    </div>
  );
}

// export default App;
