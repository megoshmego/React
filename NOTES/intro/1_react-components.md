
In React, components are the building blocks of any React application. They are reusable pieces of code that return a React element to be rendered to the page.

Let's take an example of a simple component to illustrate the concept:

```javascript
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default MyComponent;
```

In this case, `MyComponent` is a React component that outputs a heading saying "Hello World!". This component can be reused throughout your application whenever you want to display this greeting.

React also has the concept of "props" which are short for properties. They are used to pass data from parent to child components, as well as to pass event handlers or other functions:

```javascript
import React from 'react';

class ChildComponent extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

class ParentComponent extends React.Component {
  render() {
    return <ChildComponent name="World" />;
  }
}

export default ParentComponent;
```

In the example above, `ParentComponent` is passing a prop `name` to `ChildComponent`. `ChildComponent` uses this prop to display "Hello World!". 

Finally, there's also the concept of state in React. Unlike props, a component's state is not passed in from the outside but is managed within the component itself. You can update a component's state, and React will automatically re-render the component:

```javascript
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
```

In the Counter example above, the component has a `state` object with a `count` property, initialized to 0. When you click the button, the `handleClick` function is called, which updates the `state.count` value by 1. After each update, React re-renders the component, displaying the new count value on the page. 

These are some of the most fundamental concepts in React. Other concepts include lifecycle methods, hooks, context API, and so on, which are outside the scope of the provided transcript but are integral to developing complex applications with React.