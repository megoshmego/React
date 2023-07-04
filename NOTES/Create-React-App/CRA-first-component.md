Certainly! Here are some relevant code snippets to illustrate the concepts mentioned in the video:

1. Importing and using ES6 modules:
```javascript
import items from './Items'; // Importing the 'items' array from the 'Items' module
```

2. Creating a component:
```javascript
const ShoppingCart = (props) => {
  return (
    <div>
      {/* JSX code for rendering the component */}
    </div>
  );
};
export default ShoppingCart; // Exporting the component as the default export
```

3. Importing and using a component:
```javascript
import React from 'react'; // Importing the React library
import ShoppingCart from './ShoppingCart'; // Importing the 'ShoppingCart' component

const App = () => {
  return (
    <div>
      {/* JSX code for rendering other components */}
      <ShoppingCart items={items} /> {/* Using the 'ShoppingCart' component and passing 'items' as a prop */}
    </div>
  );
};
```

4. Destructuring props:
```javascript
const ShoppingCart = ({ items }) => {
  // Code that uses the 'items' prop directly
};
```

5. Using map to loop over an array and render elements:
```javascript
const ShoppingCart = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {/* JSX code to render each item */}
        </div>
      ))}
    </div>
  );
};
```

6. Styling components (not covered in the provided script):
Styling components in React can be done using CSS modules, styled-components, inline styles, or CSS frameworks like Bootstrap. The specific styling approach used in the video is not mentioned, but you can explore these different styling options to apply styles to React components.

Note: The code snippets provided are based on the context provided in the video script, but please keep in mind that the full codebase and file structure may vary depending on the specific project setup.