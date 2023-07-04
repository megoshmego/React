Certainly! Here are the code snippets corresponding to the concepts discussed in the video:

1. Updating state based on the current state:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const handleClickByTwo = () => {
    setNum((prevNum) => prevNum + 2);
  };

  return (
    <div>
      <p>Number: {num}</p>
      <button onClick={handleClick}>Increment by 1</button>
      <button onClick={handleClickByTwo}>Increment by 2</button>
    </div>
  );
};

export default Counter;
```

In this code, the `handleClick` function updates the `num` state by incrementing it by 1 using the callback approach `(prevNum) => prevNum + 1`. Similarly, the `handleClickByTwo` function updates the `num` state by incrementing it by 2 using the callback approach `(prevNum) => prevNum + 2`.

Note: The use of the callback approach ensures that the state update is based on the current state value, preventing potential issues with asynchronous state updates.

I hope this helps! Let me know if you have any further questions.