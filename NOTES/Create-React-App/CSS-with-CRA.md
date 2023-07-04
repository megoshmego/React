Certainly! Here are code snippets to illustrate the concepts mentioned in the video:

1. Importing and using CSS styles in Create React App:
```javascript
import React from 'react';
import './app.css';

const App = () => {
  return (
    <div>
      <h1>Heading 1</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  );
};

export default App;
```
In this example, the CSS file `app.css` is imported and applied to the JSX elements in the `App` component.

2. Organizing CSS styles in separate component-specific files:
```javascript
import React from 'react';
import './alert.css';

const Alert = ({ variant = 'success', children }) => {
  return <div className={`alert alert-${variant}`}>{children}</div>;
};

const App = () => {
  return (
    <div>
      <Alert variant="success">Success Alert</Alert>
      <Alert variant="danger">Danger Alert</Alert>
    </div>
  );
};

export default App;
```
In this example, the component-specific CSS file `alert.css` is imported and applied to the `Alert` component, which is used within the `App` component.

Please note that the actual CSS styles and class names used in the examples are not included here, as they are specific to the implementation and can vary based on your desired styling requirements.