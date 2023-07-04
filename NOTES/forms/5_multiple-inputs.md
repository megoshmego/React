Certainly! Here's the code snippet that demonstrates the usage of a generic `handleChange` function for handling multiple inputs:

```javascript
const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((data) => ({
    ...data,
    [name]: value
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Created user with username ${formData.username}, email ${formData.email}, and password ${formData.password}`);
  setFormData({
    username: "",
    email: "",
    password: ""
  });
};

return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      value={formData.username}
      onChange={handleChange}
    />

    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />

    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />

    <button type="submit">Add me to the list</button>
  </form>
);
```

In the code above, we use the `formData` object as a single state variable to store the values of multiple inputs (username, email, password). The `handleChange` function is a generic event handler that handles changes for all inputs. It uses the `name` attribute of the input element to determine which property of `formData` to update. The `handleSubmit` function handles the form submission, displaying an alert with the form data, and then resetting the form inputs by setting `formData` back to an empty state object.

By using a single `handleChange` function and leveraging the `name` attribute on each input, we can handle updates for multiple inputs without the need to define separate handlers for each input. This approach is more efficient and scalable, especially when dealing with forms containing many input fields.