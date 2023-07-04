Certainly! Here are code snippets that illustrate the concepts discussed in the video:

1. Testing form submission and checking if the added item appears:

```javascript
import { render, fireEvent } from '@testing-library/react';
import ShoppingList from './ShoppingList';

test('should add new item', () => {
  // Render the component
  const { queryByText, getByLabelText } = render(<ShoppingList />);
  
  // Check if the item is not present initially
  expect(queryByText('Product name: chocolate milk')).not.toBeInTheDocument();

  // Fill out the input field
  const input = getByLabelText('Product');
  fireEvent.change(input, { target: { value: 'chocolate milk' } });

  // Click the button to submit the form
  const button = queryByText('Add item');
  fireEvent.click(button);

  // Check if the added item is present
  expect(queryByText('Product name: chocolate milk')).toBeInTheDocument();
});
```

In this test, the `render` function is used to render the `ShoppingList` component. The `getByLabelText` function is used to select the input field by its associated label text. The `fireEvent.change` function is called to simulate a change event on the input field with the desired value. Then, the `queryByText` function is used to select the button by its text and the `fireEvent.click` function is called to simulate a click event on the button. Finally, the `queryByText` function is used again to check if the added item is present in the rendered component.

2. Note: The `fireEvent.change` function is a shorthand for triggering a change event. Similarly, other events like `fireEvent.click` and `fireEvent.submit` can be used to simulate corresponding events on elements.

These snippets demonstrate how to test form submission and verify the presence of added items using React Testing Library.