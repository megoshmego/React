Certainly! Here's a code snippet that illustrates the concept of uncontrolled components in React:

```jsx
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    // Do something with the value...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, the input element is an uncontrolled component because React is not managing its value or handling changes. Instead, we use a `ref` to access the input element directly. When the form is submitted, the `handleSubmit` function is called, and we can extract the input value using `inputRef.current.value`.

Note that uncontrolled components are not commonly used in React, and controlled components are the recommended approach in most cases. Uncontrolled components are typically used when integrating with existing non-React code or working with specific inputs like file inputs, where programmatically setting their values is not possible due to security reasons.

In the case of file inputs, where you need to allow users to select files for uploading, using a controlled component is not feasible. The file input should be uncontrolled because you cannot programmatically set the value of a file input due to browser security restrictions.

It's important to understand the concept of uncontrolled components, but controlled components are the preferred approach in React.