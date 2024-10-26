//  Modify App.js to include a personalized message:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';
import Greeting from './Greeting';
import Counter from './Counter';
import ComplexComponent from './ComplexComponent';

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
      <Footer />
    </div>
  );
}

export default App;
