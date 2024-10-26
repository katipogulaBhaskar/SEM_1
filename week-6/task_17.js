// Create a new file Counter.js in the src folder:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

// Use the Counter component in App.js:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';
import Greeting from './Greeting';
import Button from './Button';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Content />
      <FavoriteFoods />
      <Counter />
      <Footer />
    </div>
  );
}

// export default App;

