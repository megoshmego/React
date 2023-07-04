Certainly! Here are some code snippets to illustrate the concepts discussed in the video:

1. Adding keys to a list of JSX elements:
```jsx
// Example: Adding keys to a list of JSX elements
function TodoList(props) {
  return (
    <div>
      <h4>TodoList</h4>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
```

2. Using array index as a key (not recommended):
```jsx
// Example: Using array index as a key (not recommended)
function TodoList(props) {
  return (
    <div>
      <h4>TodoList</h4>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
```

In the second example, using the array index as the key is demonstrated, but it is not recommended as it can cause issues when the array changes, such as elements being added, removed, or reordered. It's important to use stable and unique identifiers as keys when possible, such as unique IDs associated with the data.