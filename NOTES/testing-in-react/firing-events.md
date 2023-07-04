Certainly! Here are code snippets to illustrate the concepts discussed in the video about firing events using `fireEvent` and writing assertions with matchers:

Firing a Click Event:
```jsx
import { render, fireEvent } from '@testing-library/react';
import Toggler from './Toggler';

test('should toggle the text', () => {
  const { getByText, queryByText } = render(<Toggler />);
  
  const toggleButton = getByText('Toggle');
  fireEvent.click(toggleButton);

  expect(queryByText('Hello World')).not.toBeInTheDocument();
});
```

In this example, the `fireEvent.click` method is used to simulate a click event on the toggle button. The `getByText` function is used to select the button element with the text "Toggle". After firing the click event, the test checks if the text "Hello World" is no longer present in the document using the `queryByText` function with the `not.toBeInTheDocument()` matcher.

Firing a Click Event and Checking Text Content:
```jsx
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('should update the counter text on click', () => {
  const { getByText } = render(<Counter />);
  
  const counterText = getByText(/Current count: \d+/);
  const addButton = getByText('Add');

  fireEvent.click(addButton);

  expect(counterText).toHaveTextContent('Current count: 1');
  expect(counterText).not.toHaveTextContent('Current count: 0');
});
```

In this example, the `fireEvent.click` method is used to simulate a click event on the add button. The `getByText` function is used to select the counter text element that matches the regular expression `/Current count: \d+/`. After firing the click event, the test uses the `toHaveTextContent` matcher to assert that the counter text contains the expected updated value of "Current count: 1". Additionally, it asserts that the text content does not contain the previous value of "Current count: 0" using the `not.toHaveTextContent` matcher.

These examples demonstrate how to fire different types of events using `fireEvent` and perform assertions on the resulting changes in the component's behavior or DOM content.