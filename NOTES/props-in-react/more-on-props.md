Certainly! Here are some code snippets to illustrate the concepts discussed in the video:

1. Passing and accessing props:
```jsx
// Example: Passing and accessing props
function Animal(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Species: {props.species}</p>
      <p>Emoji: {props.emoji}</p>
      <p>Color: {props.color}</p>
    </div>
  );
}

// Usage:
<Animal name="Marsha" species="Cat" emoji="🐱" color="brown" />
```

2. Immutable props and updating them (not allowed):
```jsx
// Example: Immutable props and updating them (not allowed)
function Animal(props) {
  // Trying to update props will result in an error
  // props.name = "Bojack"; // This is not allowed

  return (
    <div>
      <h4>{props.name}</h4>
      <p>Species: {props.species}</p>
      <p>Emoji: {props.emoji}</p>
      <p>Color: {props.color}</p>
    </div>
  );
}
```

3. Passing non-string values using curly braces:
```jsx
// Example: Passing non-string values using curly braces
function Animal(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Species: {props.species}</p>
      <p>Emoji: {props.emoji}</p>
      <p>Age: {props.age}</p>
      <p>Is Friendly: {props.isFriendly.toString()}</p>
      <p>Object: {JSON.stringify(props.obj)}</p>
    </div>
  );
}

// Usage:
<Animal
  name="Stevie Chicks"
  species="Silkie Chicken"
  emoji="🐔"
  age={4}
  isFriendly={true}
  obj={{ key: "value" }}
/>
```

4. Creating a component that accepts an array prop:
```jsx
// Example: Creating a component that accepts an array prop
function RandomChoice(props) {
  const idx = Math.floor(Math.random() * props.choices.length);
  const choice = props.choices[idx];

  return (
    <div>
      <h4>Random Choice is: {choice}</h4>
    </div>
  );
}

// Usage:
<RandomChoice choices={["red", "green", "blue"]} />
```

In these examples, the usage of props, passing various data types (strings, numbers, Booleans, objects, arrays), and the immutability of props within a component are demonstrated.