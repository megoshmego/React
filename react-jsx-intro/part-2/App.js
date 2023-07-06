import React from 'react';
import Tweet from './Tweet'; // import the Tweet component

function App() {
  return (
    <div>
      <Tweet 
        name="John Doe" 
        username="johndoe" 
        date="2023-07-04" 
        message="This is my first tweet!" 
      />
      <Tweet 
        name="Jane Doe" 
        username="janedoe" 
        date="2023-07-04" 
        message="Hello, Twitter!" 
      />
      <Tweet 
        name="Alice Smith" 
        username="alicesmith" 
        date="2023-07-04" 
        message="Just setting up my Twitter." 
      />
    </div>
  );
}

export default App;
