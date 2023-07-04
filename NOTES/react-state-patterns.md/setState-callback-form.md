Certainly! Here are the code snippets corresponding to the concepts discussed in the video:

1. Using `useState` to initialize and update state:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>Counter: {num}</p>
      <button onClick={handleClick}>Increment by 1</button>
    </div>
  );
};

export default Counter;
```

In this code, the `useState` hook is used to initialize a piece of state called `num` with an initial value of `0`. The `setNum` function is used to update the `num` state by incrementing it by 1.

2. Updating state based on the current value:

```jsx
const handleIncrementByTwo = () => {
  setNum((n) => n + 2);
};
```

This code shows how to update the `num` state by incrementing it by 2. The `setNum` function is called with a callback function that receives the current state value as an argument (`n`) and returns the new state value (`n + 2`).

3. Using callback in state updates:

```jsx
const handleIncrementByTwo = () => {
  setNum((n) => n + 1);
  setNum((n) => n + 1);
};
```

In this code, the `setNum` function is called twice with a callback function, effectively updating the `num` state by incrementing it by 1 two times. However, due to the asynchronous nature of state updates, the second `setNum` call may not have the updated value from the first call.

4. Using callback to ensure sequential updates:

```jsx
const handleIncrementByTwo = () => {
  setNum((n) => n + 1);
  setNum((n) => n + 1);
};
```

In this updated code, a callback is used in the first `setNum` call, which ensures that the second `setNum` call only occurs after the first state update is completed. This guarantees the desired behavior of incrementing the `num` state by 2.

I hope this helps! Let me know if you have any further questions.