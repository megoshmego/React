Certainly! Here are some code snippets that illustrate the concepts discussed in the video:

1. Creating a basic form component:
```javascript
// UserForm.js
import React from "react";

const UserForm = () => {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <button>Add me to the list</button>
    </form>
  );
};

export default UserForm;
```

2. Managing form data using React state (controlled component):
```javascript
import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState(""); // React state to manage username

  const handleInputChange = (event) => {
    setUsername(event.target.value); // Update the username state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted username:", username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleInputChange}
      />
      <button>Add me to the list</button>
    </form>
  );
};

export default UserForm;
```

In the code above, we use the `useState` hook to create a state variable called `username` and a function `setUsername` to update its value. The `value` attribute of the input element is set to `username`, and the `onChange` event handler is set to `handleInputChange`, which updates the state with the current input value as the user types.

By using React's state, the form stays in sync with the value of the `username` state. When the form is submitted, the `handleSubmit` function is called, and we can access the current value of `username` from the state.

These code snippets demonstrate the concept of controlled components in React, where React manages and controls the form's data, ensuring that it stays in sync with the component's state.