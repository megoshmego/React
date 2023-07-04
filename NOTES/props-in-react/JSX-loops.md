Certainly! Here are some code snippets to illustrate the concepts discussed in the video:

1. Rendering an array directly in JSX:
```jsx
// Example: Rendering an array directly in JSX
function MyComponent() {
  const choices = ['red', 'yellow', 'green'];
  return (
    <div>
      {choices}
    </div>
  );
}
```

2. Using `map()` to render an array of JSX elements:
```jsx
// Example: Using map() to render an array of JSX elements
function TodoList(props) {
  return (
    <div>
      <h4>TodoList</h4>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
```

3. Using explicit return and multiple lines in `map()` callback:
```jsx
// Example: Using explicit return and multiple lines in map() callback
function TodoList(props) {
  return (
    <div>
      <h4>TodoList</h4>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo}>
              <b>{todo}</b>
              <input type="checkbox" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

4. Jokes loop component using `map()`:
```jsx
// Example: Jokes loop component using map()
function JokesLoop() {
  const jokes = [
    'How do you comfort a JavaScript bug? You console/console it.',
    'Why did the developer quit? Because he didn\'t get a raise.',
  ];
  
  return (
    <div>
      <h2>Jokes</h2>
      {jokes.map((joke, index) => (
        <p key={index}>{joke}</p>
      ))}
    </div>
  );
}
```

These code snippets demonstrate the usage of arrays, `map()`, and JSX to render dynamic content and lists in React components.