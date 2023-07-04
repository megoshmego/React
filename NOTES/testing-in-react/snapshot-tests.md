Sure! Here are some code snippets to illustrate the concepts discussed in the video:

1. Snapshot Test:
```javascript
import { render } from '@testing-library/react';
import FixedComponent from './FixedComponent';

it('matches snapshot', () => {
  const { asFragment } = render(<FixedComponent />);
  expect(asFragment()).toMatchSnapshot();
});
```

In this example, a snapshot test is written for the `FixedComponent`. The `render` function is used to render the component, and `asFragment()` is called to get the underlying DOM structure. The `toMatchSnapshot()` function is then used to compare the DOM structure with the existing snapshot.

2. Updating Snapshots:
When a snapshot test fails and you want to update the snapshot, you can run the test with the `--updateSnapshot` flag or interactively update snapshots using the `U` command.

For example:
```
npm test --updateSnapshot
```
or
```
npm test -u
```

These commands update the failing snapshots with the current test output.

3. Snapshot Test with Props:
```javascript
import { render } from '@testing-library/react';
import Dog from './Dog';

it('matches snapshot when isAdopted is true', () => {
  const { asFragment } = render(<Dog name="Rusty" isAdopted={true} />);
  expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when isAdopted is false', () => {
  const { asFragment } = render(<Dog name="Rusty" isAdopted={false} />);
  expect(asFragment()).toMatchSnapshot();
});
```

In this example, two snapshot tests are written for the `Dog` component. Each test renders the component with different props, and the snapshots are compared to ensure the component renders consistently.

These code snippets demonstrate how to write snapshot tests, update snapshots, and test components with different props using the `toMatchSnapshot()` function and the `asFragment()` method provided by the testing library.