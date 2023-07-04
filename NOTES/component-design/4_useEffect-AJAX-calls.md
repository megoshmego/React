Certainly! Here are the code snippets illustrating the concepts discussed in the video:

1. Fetching Data with `useEffect`:
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileViewer({ name }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.github.com/users/${name}`);
      const { data: { name } } = response;
      setData(name);
    }

    fetchData();
  }, [name]);

  return (
    <div>
      <h3>{data ? data : 'Loading'}</h3>
    </div>
  );
}

export default ProfileViewer;
```

In this example, the `ProfileViewer` component fetches data from the GitHub API based on the provided `name` prop. The component uses the `useEffect` hook with a dependency array `[name]` to run the effect whenever the `name` prop changes.

The effect is defined as an `async` function `fetchData` that makes an asynchronous Axios request. After receiving the response, it extracts the name from the data and updates the `data` state using `setData(name)`.

The rendered output displays the fetched data if available or shows "Loading" until the API call completes.

2. Using an Async Function Inside `useEffect`:
```jsx
useEffect(() => {
  async function loadProfile() {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    const { data: { name } } = response;
    setData(name);
  }

  loadProfile();
}, [name]);
```

In this snippet, an `async` function `loadProfile` is defined inside the `useEffect` callback. The function makes an asynchronous Axios request, extracts the name from the response data, and updates the state using `setData(name)`. The `loadProfile` function is then invoked within the effect.

These code snippets demonstrate how to fetch data in React using `useEffect` and handle asynchronous operations. The effect runs either on the initial render or when the specified dependencies (e.g., `name`) change, ensuring that the API call is made at the appropriate times and updates the component's state accordingly.