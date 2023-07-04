Certainly! Here are code snippets that illustrate the concepts discussed in the video:

1. Embedding expressions directly inside JSX using curly braces:
```jsx
// Example: Embedding a prop value in JSX
return <div>{Props.emoji}</div>;
```

2. Using a Ternary operator for conditional rendering:
```jsx
// Example: Using a Ternary operator for conditional rendering
return (
  <div>
    {Props.Winner ? <p>You Win</p> : <p>You Lose</p>}
  </div>
);
```

3. Storing a conditional JSX expression in a variable:
```jsx
// Example: Storing a conditional JSX expression in a variable
const reply =
  Props.age < 18
    ? <p>Sorry Kid, You Can't Come In</p>
    : Props.age < 21
      ? <p>You Can Come In But No Drinking</p>
      : (
        <div>
          <p>Come In, You Can Drink</p>
          <img src={gifUrl} alt="GIF" />
        </div>
      );

return (
  <div>
    <p>Bouncer:</p>
    <p>You are {Props.age} years old.</p>
    {reply}
  </div>
);
```

These code snippets demonstrate how to embed expressions, use a Ternary operator for conditional rendering, and store conditional JSX expressions in variables.