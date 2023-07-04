Certainly! Here are the code snippets corresponding to the concepts discussed in the video:

1. Adding a unique key prop to list items:

```jsx
import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
```

In this code, the `map` function is used to render a list of numbers as list items (`<li>`). The `key={number}` prop ensures that each list item has a unique identifier based on the `number` value.

2. Handling duplicate keys and using unique identifiers:

```jsx
import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
```

In this code, the `map` function is used to render a list of todos as list items. Each todo item has a unique identifier (`id`) obtained from the data, ensuring that each list item has a unique key prop.

3. Using index as a last resort for the key prop:

```jsx
import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
```

In this code, the `map` function is used to render a list of numbers as list items. The `key={index}` prop uses the index of each item in the array as the key value. However, using the index as a key prop should be avoided whenever possible due to potential performance issues and unexpected behavior when the list is re-ordered or modified.

I hope this helps! Let me know if you have any further questions.