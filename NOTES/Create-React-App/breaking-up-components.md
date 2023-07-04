Certainly! Here are some code snippets that correspond to the concepts mentioned in the video:

1. Importing and using a component:
```jsx
// App.js
import ShoppingCart from './ShoppingCart';

const App = () => {
  return (
    <div>
      <ShoppingCart />
      <ShoppingCart />
    </div>
  );
};
```

2. Passing a prop to a component:
```jsx
// App.js
import ShoppingCart from './ShoppingCart';

const App = () => {
  return (
    <div>
      <ShoppingCart owner="Carly" />
      <ShoppingCart owner="Rusty" />
    </div>
  );
};

// ShoppingCart.js
const ShoppingCart = (props) => {
  return <h1>{props.owner}'s Shopping Cart</h1>;
};
```

3. Breaking up a component into smaller components:
```jsx
// ShoppingCart.js
import CartItem from './CartItem';

const ShoppingCart = () => {
  const items = [
    // item objects
  ];

  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

// CartItem.js
const CartItem = (props) => {
  const { name, image, price, quantity } = props;

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <ul>
        <li>Price: ${price}</li>
        <li>Quantity: {quantity}</li>
        <li>Subtotal: ${price * quantity}</li>
      </ul>
    </div>
  );
};
```

4. Calculating a total using reduce:
```jsx
// ShoppingCart.js
const ShoppingCart = () => {
  const items = [
    // item objects
  ];

  const total = items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div>
      {items.map((item) => (
        // CartItem component
      ))}
      <h3>Cart Total: ${total}</h3>
    </div>
  );
};
```

These examples illustrate the concepts of using components, passing props, breaking up components into smaller ones, and performing calculations using reduce.