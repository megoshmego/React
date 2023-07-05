import React from 'react';
import FirstComponent from './FirstComponent'; // import the FirstComponent
import NamedComponent from './NamedComponent'; // import the NamedComponent

function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Alice" />
    </div>
  );
}

export default App;
