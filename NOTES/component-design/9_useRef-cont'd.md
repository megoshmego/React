Certainly! Here are the code snippets illustrating the concepts discussed in the video:

1. Using `useRef` to Store Interval ID:
```jsx
import React, { useEffect, useState, useRef } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
```

In this example, the `timerId` variable is declared using `useRef`. It initializes with an initial value of `undefined`.

Inside the effect, `timerId.current` is assigned the value returned by `setInterval`, which represents the interval ID. This ID is stored in the `timerId` variable for future reference.

When the component is unmounted, the cleanup function returned by the effect is triggered. It calls `clearInterval` using `timerId.current` to stop the timer.

The `stopTimer` function is triggered when the "Stop" button is clicked, clearing the interval by calling `clearInterval(timerId.current)`.

2. Avoiding DOM Manipulation with `useRef`:
```jsx
import React, { useRef } from 'react';

function ExampleComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value = 'New value';
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Change Value</button>
    </div>
  );
}

export default ExampleComponent;
```

In this example, `useRef` is used to create the `inputRef` variable, which is assigned to the `ref` attribute of the input element.

The `handleClick` function is triggered when the "Change Value" button is clicked. It accesses the `value` property of the input element using `inputRef.current` and modifies it directly.

It's important to note that directly manipulating the DOM like this breaks away from the React way of managing state and can lead to potential issues. It's generally recommended to avoid such DOM manipulations and instead work with React's state and props to update the UI.

These code snippets demonstrate how to use `useRef` to store a value that persists between renders, such as the interval ID in the timer example. They also highlight the importance of avoiding unnecessary DOM manipulations with `useRef` and leveraging React's state and props to manage the UI.