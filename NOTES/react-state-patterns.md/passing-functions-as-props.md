Certainly! Here are the code snippets corresponding to the concepts discussed in the video:

1. Creating a separate component and passing data as props:

```jsx
import React from 'react';

const NumberItem = ({ number }) => {
  return (
    <li>
      <button>{number}</button>
    </li>
  );
};

export default NumberItem;
```

In this code, a new component called `NumberItem` is created. It receives the `number` prop and renders a list item (`<li>`) containing a button displaying the `number` value.

2. Passing a function as a prop to child component:

```jsx
import React from 'react';
import NumberItem from './NumberItem';

const NumberList = ({ numbers, remove }) => {
  return (
    <ul>
      {numbers.map((number) => (
        <NumberItem key={number} number={number} remove={remove} />
      ))}
    </ul>
  );
};

export default NumberList;
```

In this code, the `NumberList` component receives the `remove` function as a prop. It then maps over the `numbers` array and renders a `NumberItem` component for each number. The `remove` function is passed down as a prop to each `NumberItem` component.

3. Handling the removal of a number in the parent component:

```jsx
import React, { useState } from 'react';
import NumberList from './NumberList';

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const removeNumber = (number) => {
    setNumbers(numbers.filter((n) => n !== number));
  };

  return <NumberList numbers={numbers} remove={removeNumber} />;
};

export default App;
```

In this code, the parent component `App` defines the `removeNumber` function, which is responsible for removing a number from the `numbers` state array. This function is passed down to the `NumberList` component as the `remove` prop.

4. Handling the removal of a number in the child component:

```jsx
import React from 'react';

const NumberItem = ({ number, remove }) => {
  const handleRemove = () => {
    remove(number);
  };

  return (
    <li>
      <button onClick={handleRemove}>{number}</button>
    </li>
  );
};

export default NumberItem;
```

In this code, the `NumberItem` component receives the `remove` function as a prop. It defines a `handleRemove` function that invokes `remove` with the `number` prop. This function is called when the button is clicked, triggering the removal of the corresponding number.

I hope this helps! Let me know if you have any further questions.