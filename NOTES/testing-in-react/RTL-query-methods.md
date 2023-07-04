Certainly! Here are code snippets that illustrate some of the concepts mentioned in the video:

1. Using `getByText` and `queryByText` methods to find elements based on text content:
```javascript
import { render } from '@testing-library/react';
import Counter from './Counter';

test('Finding elements by text', () => {
  const { getByText, queryByText } = render(<Counter />);
  
  // getByText will throw an error if no matching element is found
  const h1Element = getByText("Let's Count!");
  console.log(h1Element);

  // queryByText won't throw an error if no matching element is found
  const nonExistentElement = queryByText('cake');
  console.log(nonExistentElement);
});
```

2. Using `getAllByText` and `queryAllByText` methods to find multiple elements based on text content:
```javascript
import { render } from '@testing-library/react';
import Counter from './Counter';

test('Finding multiple elements by text', () => {
  const { getAllByText, queryAllByText } = render(<Counter />);

  // getAllByText will throw an error if no matching element is found
  const elements = getAllByText('count');
  console.log(elements);

  // queryAllByText won't throw an error if no matching element is found
  const nonExistentElements = queryAllByText('cake');
  console.log(nonExistentElements);
});
```

3. Using `getByPlaceholderText` and `getByLabelText` methods to find input elements:
```javascript
import { render } from '@testing-library/react';
import Counter from './Counter';

test('Finding input elements', () => {
  const { getByPlaceholderText, getByLabelText } = render(<Counter />);
  
  // getByPlaceholderText selects an input based on its placeholder text
  const inputByPlaceholder = getByPlaceholderText('username');
  console.log(inputByPlaceholder);
  
  // getByLabelText selects an input based on its associated label text
  const inputByLabel = getByLabelText('Username');
  console.log(inputByLabel);
});
```

Please note that these code snippets assume the existence of the `Counter` component and the relevant imports. You may need to adjust the code to match your specific setup.