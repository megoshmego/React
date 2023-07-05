
1. **React and Components**: React is a JavaScript library for building user interfaces, particularly single-page applications. You construct the UI using components, which are JavaScript functions or classes that optionally accept inputs, known as "props", and return a React element that describes how a part of the UI should appear.

```javascript
// An example of a simple React component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
In this example, `Welcome` is a React component that takes in a `props` object and returns a React element (a simple greeting message).

2. **JSX**: JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code, making it easier to create and work with component structures. When used in combination with Babel, JSX code is transpiled to standard JavaScript.

```jsx
// JSX syntax
const element = <h1>Hello, world!</h1>;
```
In this code, `element` is a JSX element that resembles an HTML `h1` tag.

3. **ReactDOM.render()**: This method is used in React to render a React element into a root DOM node.

```jsx
// Rendering a component using ReactDOM.render
ReactDOM.render(
  <Welcome name="User" />,
  document.getElementById('root')
);
```
In this example, the `Welcome` component is being rendered into the DOM element with the id `root`.

4. **Props**: These are inputs to a React component. They are passed to components via attributes in the same way that attributes are passed to HTML elements.

```jsx
// Using props in a component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using the component with props
<Welcome name="User" />
```
In this code, `name` is a prop being passed to the `Welcome` component.

5. **Random number generation and dynamic components**: The instructor explains how to make a component dynamic by introducing variables within JSX syntax using curly braces `{}`.

```jsx
// A dynamic component that displays a random number
function RandomNum() {
  const rand = Math.floor(Math.random() * 10) + 1;
  return <h3>{rand}</h3>;
}
```
Here, the `RandomNum` component generates a random number and includes it within a `h3` JSX element.

Remember that components, JSX, and props are key to understanding and working with React, making them essential subjects for study.