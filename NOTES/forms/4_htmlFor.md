Certainly! Here's the code snippet that demonstrates the usage of labels in React:

```javascript
return (
  <form>
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      placeholder="Enter username"
      value={username}
      onChange={handleInputChange}
    />
    <button type="submit">Add me to the list</button>
  </form>
);
```

In the code above, we add a `<label>` element before the `<input>` element. To associate the label with the input, we use the `htmlFor` attribute on the `<label>` element, specifying the ID of the corresponding input element. In this case, the ID is set to `"username"`.

The usage of `htmlFor` instead of `for` is specific to React. Since `for` is a reserved word in JavaScript, React uses `htmlFor` to avoid any conflicts. By using the correct attribute name, we ensure that React understands the association between the label and the input.

Adding labels to our form inputs improves accessibility by allowing screen readers to identify the relationship between the label and the input. It also enhances the user experience by providing visual information and allowing users to click on the label to focus on the input.