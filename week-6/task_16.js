// Create a new file Button.js in the src folder:

import React from 'react';

function Button({ label }) {
  return <button>{label}</button>;
}

export default Button;


// Use the Button component multiple times in App.js:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';
import Greeting from './Greeting';
import Button from './Button';

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Content />
      <FavoriteFoods />
      <Button label="Click Me!" />
      <Button label="Submit" />
      <Footer />
    </div>
  );
}

// export default App;
