React components can be defined as either function components or class components. As of the introduction of React Hooks in React 16.8, function components are more commonly used because they can do everything that class components can do and more. 

Here is an example of a basic function component:

```jsx
import React from 'react'; // First, import the React library

// Define a function component
// This is a JavaScript function that returns some JSX
function MyComponent() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

// Make the component available for import by other modules
export default MyComponent;
```

You can use this component in another component like this:

```jsx
import React from 'react';
import MyComponent from './MyComponent'; // import your custom component

function App() {
  return (
    <div>
      <MyComponent />  {/* Use your custom component */}
    </div>
  );
}

export default App;
```

In the example above, `MyComponent` is a React function component that returns a `div` with a `h1` inside of it. The contents of the `return` statement is JSX. The `App` component then uses `MyComponent` as if it was a regular HTML tag.

Components can have properties (props) and state. Props are parameters passed from a parent component, and state is data managed within the component. 

Here's an example of a component with props:

```jsx
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default Greeting;
```

And you could use it like this:

```jsx
<Greeting name="Alice" />
```

This would display "Hello, Alice!" on the screen.

I hope this helps you to get started with making components in React! If you have any other questions, feel free to ask.

