Certainly! Here are the code snippets to illustrate the concepts mentioned in the video:

1. Adding `alt` attribute to image tags:
```javascript
// In the cart item component
<img src={item.image} alt="" />

// In the app component
<img src={logo} alt="logo" />
```
By adding the `alt` attribute to the image tags, the warning related to missing `alt` props is resolved. In the first example, an empty string is used as the `alt` value since it is a decorative image. In the second example, the `alt` value is set as "logo".

2. Adding `key` prop when mapping over items:
```javascript
// In the shopping cart component
{items.map((item) => (
  <CartItem key={item.id} item={item} />
))}
```
To address the "key prop warning," a unique `key` prop is added to each rendered `CartItem` component. In this example, the `id` property of each `item` is used as the `key` value.

These code snippets demonstrate the implementation of the suggested changes to fix the warnings mentioned in the video.