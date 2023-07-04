Certainly! Here's an example code snippet to illustrate the concepts discussed in the video regarding event objects and event pooling in React:

```jsx
function handleMouseOver(event) {
  // Accessing properties of the event object
  console.log('Mouse over event:', event);
  console.log('Current target:', event.currentTarget);
}

function handleScroll(event) {
  // Accessing properties of the event object
  console.log('Scroll event:', event);
  console.log('Native event:', event.nativeEvent);
}

function ExampleComponent() {
  return (
    <div>
      <button onMouseOver={handleMouseOver}>Hover me</button>
      <textarea onScroll={handleScroll} />
    </div>
  );
}
```

In this example, there are two event handlers: `handleMouseOver` and `handleScroll`. The `handleMouseOver` function is triggered when the mouse hovers over the button, while the `handleScroll` function is triggered when the user scrolls within the textarea.

These event handlers take an `event` object as a parameter, which is automatically passed by React to the callback function. The event object contains information about the event, such as the type of event, target element, and other relevant properties.

Within the event handlers, the code logs the event object and specific properties like `currentTarget` and `nativeEvent` to the console for demonstration purposes. The `currentTarget` property refers to the element on which the event handler is attached, while the `nativeEvent` property provides access to the native browser event object.

The video also mentions event pooling in React, which is an optimization technique where React reuses the SyntheticEvent objects whenever possible. This allows for more efficient event handling. However, as a side effect, the properties of the SyntheticEvent object may be nullified after the event handler has executed. This behavior can sometimes be confusing when logging the event object to the console.

By understanding the concept of event objects and event pooling, you can access and utilize the properties of the event to gather information about the event and perform necessary actions based on that information.