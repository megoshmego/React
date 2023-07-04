Certainly! Here are code snippets to illustrate the concepts mentioned in the video:

1. Named exports:
```javascript
// helpers.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// app.js
import { add, multiply } from './helpers';

console.log(add(5, 7)); // Output: 12
console.log(multiply(3, 4)); // Output: 12
```
In this example, the functions `add` and `multiply` are exported from the `helpers.js` file using named exports. They are then imported and used in the `app.js` file.

2. Default exports:
```javascript
// cats.js
const cats = [
  { name: 'Blue', age: 5 },
  { name: 'Rocket', age: 2 },
];

export default cats;

// app.js
import cats from './cats';

console.log(cats); // Output: [{ name: 'Blue', age: 5 }, { name: 'Rocket', age: 2 }]
```
In this example, the `cats` array is exported as the default export from the `cats.js` file. It is then imported and used in the `app.js` file.

3. Combination of default and named exports:
```javascript
// helpers.js
export default function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// app.js
import sum, { multiply } from './helpers';

console.log(sum(5, 7)); // Output: 12
console.log(multiply(3, 4)); // Output: 12
```
In this example, the function `add` is exported as the default export, while the function `multiply` is exported using a named export from the `helpers.js` file. They are then imported and used in the `app.js` file.

Note: The actual functionality and usage of the functions and data in the code snippets may vary based on your specific implementation requirements. These examples are provided to illustrate the concepts of named and default exports in JavaScript and how they can be used in a Create React App project.