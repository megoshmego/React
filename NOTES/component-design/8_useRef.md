Certainly! Here are the code snippets illustrating the concepts discussed in the video:

1. Using `useEffect` with a Dependency:
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileViewerWithSearch() {
  const [term, setTerm] = useState('');
  const [URL, setURL] = useState('/Elie');
  const [profile, setProfile] = useState(null);

  const search = () => {
    setURL(`/users/${term}`);
  };

  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(URL);
      setProfile(res.data.name);
    }

    loadProfile();
  }, [URL]);

  return (
    <div>
      <h3>{profile ? profile : 'Loading'}</h3>
      <form onSubmit={search}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default ProfileViewerWithSearch;
```

In this example, the `ProfileViewerWithSearch` component integrates the search functionality. The state variable `term` holds the value of the input field, and the state variable `URL` stores the URL to make the API call.

The `search` function is called when the form is submitted, updating the `URL` state based on the search term entered.

The effect is triggered whenever the `URL` dependency changes. Inside the effect, the `loadProfile` function makes an API call using the updated URL and updates the `profile` state with the fetched data.

The rendered output displays the profile name if available or shows "Loading" until the API call completes.

2. Separating Logic into a Custom Hook:
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useProfileLoader(url) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(url);
      setProfile(res.data.name);
    }

    loadProfile();
  }, [url]);

  return profile;
}

function ProfileViewerWithSearch() {
  const [term, setTerm] = useState('');
  const [URL, setURL] = useState('/Elie');

  const profile = useProfileLoader(URL);

  const search = () => {
    setURL(`/users/${term}`);
  };

  return (
    <div>
      <h3>{profile ? profile : 'Loading'}</h3>
      <form onSubmit={search}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default ProfileViewerWithSearch;
```

In this updated example, the logic for loading the profile data is extracted into a custom hook called `useProfileLoader`. It takes the `url` as a parameter and returns the `profile` state.

The `ProfileViewerWithSearch` component now uses the `useProfileLoader` hook, passing the `URL` state as an argument. This allows the component to separate concerns and reuse the profile loading logic in multiple components if needed.

The rendered output and the search functionality remain the same.

These code snippets demonstrate how to use `useEffect` with a dependency to trigger an effect based on changes in state or props. Additionally, the custom hook showcases how to separate and reuse logic using hooks.