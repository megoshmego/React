Certainly! Here are the code snippets to illustrate the concepts mentioned in the video:

1. Adding styles using the `style` attribute:
```javascript
<li style={{ color: 'magenta', backgroundColor: 'yellow' }}>Price: $19.99</li>
```
In this example, the `style` attribute is used to apply styles to the `<li>` element. The styles are defined as an object with key-value pairs. The keys represent CSS properties (camelCased) and the values represent the corresponding styles.

2. Creating a dynamic styled component:
```javascript
const Alert = ({ variant = 'success', children }) => {
  const colors = {
    success: 'green',
    danger: 'red',
    warning: 'yellow',
  };

  return (
    <div style={{ backgroundColor: colors[variant] }}>
      {children}
    </div>
  );
};
```
In this example, a dynamic styled component called `Alert` is created. It accepts a `variant` prop to determine the style, and `children` to display the content. The `colors` object maps different variants to corresponding colors. The `backgroundColor` style is set based on the `variant` prop.

These code snippets demonstrate how to apply dynamic styles in React using the `style` attribute. By using JavaScript objects and mapping prop values to specific styles, you can create components with dynamic styles based on different inputs or props. It's important to note that while dynamic styles can be set using the `style` attribute, it's recommended to keep the dynamic styles minimal and use separate CSS files for standard styles by adding a class name to the component.