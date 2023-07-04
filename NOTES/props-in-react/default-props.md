Certainly! Here are the relevant code snippets to illustrate the concepts mentioned in the video:

1. Using default props in a functional component:
```jsx
import React from 'react';

const RandomNumRange = ({ min = 1, max = 10 }) => {
  const rand = Math.floor(Math.random() * (max - min) + min);
  return <h1>Rand Is {rand}</h1>;
};

export default RandomNumRange;
```
In this example, the `RandomNumRange` component accepts `min` and `max` as props. The destructuring syntax `{ min = 1, max = 10 }` is used to provide default values for the props if they are not passed. The default values are set to 1 and 10, respectively. Inside the component, the random number calculation is performed based on the provided or default values.

2. Usage of the `RandomNumRange` component:
```jsx
import React from 'react';
import RandomNumRange from './RandomNumRange';

const App = () => {
  return (
    <div>
      <RandomNumRange min={20} max={30} />
      <RandomNumRange />
    </div>
  );
};

export default App;
```
In this example, the `RandomNumRange` component is used in the `App` component. In the first usage, the `min` and `max` props are explicitly provided as 20 and 30. In the second usage, the `min` and `max` props are not passed, so the default values of 1 and 10 are used.

These code snippets demonstrate how to set default values for props in a functional component using destructuring. It allows the component to work even if certain props are not provided, ensuring that calculations or other operations relying on those props do not throw errors.