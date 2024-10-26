// Create a new file ComplexComponent.js in the src folder:

import React from 'react';

function ComplexComponent() {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <section>
        <p>This is a section of content.</p>
      </section>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default ComplexComponent;

// Use the ComplexComponent in App.js:

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';
import Greeting from './Greeting';
import Counter from './Counter';
import ComplexComponent from './ComplexComponent';

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Content />
      <FavoriteFoods />
      <Counter />
      <ComplexComponent />
      <Footer />
    </div>
  );
}

// export default App;
