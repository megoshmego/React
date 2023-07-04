Certainly! Here are the code snippets illustrating the concepts discussed in the video:

1. Fetching Data with `useEffect`:
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileViewer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/Elie')
      .then((response) => {
        setData(response.data.name);
      });
  }, []);

  return (
    <div>
      <h3>{data ? data : 'Loading'}</h3>
    </div>
  );
}

export default ProfileViewer;
```

In this example, the `ProfileViewer` component fetches GitHub profile data using Axios within the `useEffect` hook. The initial state of the `data` variable is `null`, and a loading message is displayed until the API call completes.

The effect runs only once after the initial render because the dependency array `[]` is empty. Inside the effect, Axios makes the API call and sets the `data` state using `setData(response.data.name)`.

The rendered output displays the fetched data if available or shows "Loading" until the API call finishes.

2. Fetching Data with an Async Function:
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileViewer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const response = await axios.get('https://api.github.com/users/Elie');
      setData(response.data.name);
    }

    loadProfile();
  }, []);

  return (
    <div>
      <h3>{data ? data : 'Loading'}</h3>
    </div>
  );
}

export default ProfileViewer;
```

In this modified example, the Axios call is performed inside an async function `loadProfile()` within the `useEffect` callback. The `loadProfile()` function is marked as `async`, and the API call is made using `await axios.get()`.

The effect executes the `loadProfile()` function after the initial render due to the empty dependency array `[]`.

The rendered output remains the same, displaying the fetched data or "Loading" until the API call completes.

3. Adding a Prop as a Dependency:
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileViewer({ name }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${name}`)
      .then((response) => {
        setData(response.data.name);
      });
  }, [name]);

  return (
    <div>
      <h3>{data ? data : 'Loading'}</h3>
    </div>
  );
}

export default ProfileViewer;
```

In this example, the `ProfileViewer` component accepts a `name` prop, which determines the GitHub username to fetch data for. The `name` prop is added to the dependency array of `useEffect` to trigger the effect whenever the prop changes.

Now, the API call is made based on the dynamic `name` prop, allowing the component to fetch and display the corresponding GitHub profile data.

These code snippets demonstrate how to use `useEffect` to fetch data for a component, handle async operations, and include dependencies to control when the effect runs based on changes in state or props.