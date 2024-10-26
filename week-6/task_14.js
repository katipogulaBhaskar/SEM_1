// Create a functional component FavoriteFoods.js in the src folder:

import React from 'react';

function FavoriteFoods() {
  const foods = ['Pizza', 'Sushi', 'Ice Cream'];
  return (
    <ul>
      {foods.map((food, index) => (
        <li key={index}>{food}</li>
      ))}
    </ul>
  );
}

export default FavoriteFoods;


// Use FavoriteFoods in App.js:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <FavoriteFoods />
      <Footer />
    </div>
  );
}
// export default App;   this line also prsent in the code, in the single having both codes that why i am getting an error for that purpose i commented the line.

