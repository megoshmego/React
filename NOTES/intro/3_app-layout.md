

**1. React Component:** In React, a component is a reusable piece of code that controls a part of the UI (User Interface). A component can be as simple as displaying an image or as complex as containing other components.

```jsx
function Shiba() {
  return <img src="shiba.jpg" alt="Shiba Inu" />;
}
```
**2. Dynamic Components:** These are components that change depending on the information passed to them, such as props (short for properties) or data received from API calls.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greeting name="John" />
```
**3. Top Level Component (App):** In React, typically there's a top level component (commonly named App) which contains and renders other components. This is what gets rendered into the root of your application.

```jsx
function App() {
  return (
    <div>
      <Greeting name="John" />
      <Shiba />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
**4. Component Nesting:** Components can contain other components, forming a tree-like structure. This is a key part of React's composability.

```jsx
function App() {
  return (
    <div>
      <Greeting name="John" />
      <Shiba />
      <SharPei />
    </div>
  );
}
```
**5. Importing Components:** For larger projects, you would typically have each component in its own file. You would then import these components where they're needed. Ordering is crucial when using script tags in HTML, but a tool like Create React App or module bundlers like Webpack handle this automatically. 

In `Shiba.js` file:
```jsx
function Shiba() {
  return <img src="shiba.jpg" alt="Shiba Inu" />;
}
export default Shiba;
```

In `App.js` file:
```jsx
import Shiba from './Shiba';

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Shiba />
      <SharPei />
    </div>
  );
}
```
This code is written in ES6 modules syntax that allows for better organization and ease of use in large applications.

**6. Create React App:** A tool maintained by Facebook to quickly bootstrap a React application with a good default configuration, including a solution for script ordering and module bundling.

Remember, while the syntax in these examples is in JSX (JavaScript XML), it gets transpiled to regular JavaScript before being shipped to the browser. JSX makes it easier and more intuitive to work with UIs in JavaScript.