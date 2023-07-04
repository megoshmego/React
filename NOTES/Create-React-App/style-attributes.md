Certainly! Here are the code snippets to illustrate the concepts mentioned in the video:

1. Applying dynamic styles using the `style` attribute:
```javascript
<li style={{ color: 'magenta', backgroundColor: 'yellow' }}>Price: $19.99</li>
```
In this example, the `style` attribute is used to apply dynamic styles to the `<li>` element. The styles are defined as an object with key-value pairs, where the keys represent CSS properties and the values represent the corresponding styles.

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
In this example, a dynamic styled component called `Alert` is created. It accepts a `variant` prop to determine the style and `children` to display the content. The `colors` object maps different variants to corresponding colors. The `backgroundColor` style is set based on the `variant` prop.

These code snippets demonstrate how to use the `style` attribute to apply dynamic styles in React. By passing in a JavaScript object with CSS properties and corresponding values, you can achieve dynamic styling based on different conditions or props. It's important to note that while the `style` attribute allows for dynamic styles, it's generally recommended to separate standard styles into CSS classes and use the `style` attribute for specific dynamic styles.