Certainly! Here are the code snippets illustrating the concepts discussed in the video:

1. Basic Usage of `useEffect`:
```jsx
import React, { useEffect, useState } from 'react';

function Counter() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `Hi${'!'.repeat(num)}`;
  });

  const increment = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, the `useEffect` hook is used without a second argument. The callback function passed to `useEffect` runs after every render of the component. Inside the callback, the `document.title` is updated based on the value of `num`. The `num` state is incremented when the button is clicked, triggering a re-render and updating the document title.

2. Adding a Dependency to `useEffect`:
```jsx
import React, { useEffect, useState } from 'react';

function Counter() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `Hi${'!'.repeat(num)}`;
  }, [num]);

  const increment = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, a dependency array is added as the second argument to `useEffect`. By passing `[num]` as the dependency, the effect will only run if the value of `num` changes. This optimization prevents the effect from running on every render if the dependency value remains the same. Now, the document title will only be updated when `num` changes.

These code snippets demonstrate the usage of `useEffect` and how it can be used to perform side effects after renders, both with and without dependencies.