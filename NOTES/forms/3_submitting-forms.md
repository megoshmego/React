Certainly! Here are the code snippets that illustrate the concepts discussed in the video:

1. Adding an event handler to the button:
```javascript
const handleSubmit = () => {
  alert("Created user: " + username);
};

return (
  <form>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={handleInputChange}
    />
    <button onClick={handleSubmit}>Add me to the list</button>
  </form>
);
```

2. Preventing form submission and using `onSubmit` event:
```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  alert("Created user: " + username);
};

return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={handleInputChange}
    />
    <button type="submit">Add me to the list</button>
  </form>
);
```

In the code above, we add an event handler `handleSubmit` to the button and prevent the default form submission behavior using `event.preventDefault()`. This allows us to handle the form submission manually. We can access the value of `username` from the state and perform the desired action, such as showing an alert or making an AJAX request.

Alternatively, we can use the `onSubmit` event on the form itself, which handles both button clicks and form submission via the Enter key. By setting `onSubmit={handleSubmit}` on the form, the `handleSubmit` function will be called when the form is submitted. Again, we prevent the default behavior and perform our desired action.

It's worth noting that in a more complex scenario, the form component may be responsible for managing the state of multiple inputs and passing the form data to a parent component or handling it internally. Additionally, instead of using `alert`, you can perform more meaningful actions, such as making API calls or updating the application's state.