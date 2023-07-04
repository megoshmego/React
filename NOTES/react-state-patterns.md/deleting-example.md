Certainly! Here are the code snippets corresponding to the concepts discussed in the video:

1. Creating a NumbersList component with an array of numbers:

```jsx
import React, { useState } from 'react';

const NumbersList = () => {
  const [numbers, setNumbers] = useState([2, 5, 7, 11, 12, 18]);

  return (
    <ul>
      {numbers.map((num) => (
        <li key={num}>
          <button onClick={() => console.log('Removing', num)}>
            {num}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NumbersList;
```

2. Rendering the NumbersList component in App.js:

```jsx
import React from 'react';
import NumbersList from './NumbersList';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <NumbersList />
    </div>
  );
};

export default App;
```

In this code, the NumbersList component stores an array of numbers in state and renders a list of buttons based on the numbers. Clicking on a button logs the corresponding number to the console.

Note: The key prop is added to the `<li>` element to provide a unique identifier for each item in the array. This is important for React's reconciliation process when updating or removing elements.