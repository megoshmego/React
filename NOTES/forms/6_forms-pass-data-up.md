Certainly! Here are the relevant code snippets from the provided script:

1. Creating the shopping list component:
```javascript
import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'peanut butter', quantity: 2 },
    { id: 2, name: 'whole milk', quantity: 1 }
  ]);

  return (
    <div>
      <h3>Shopping List</h3>
      {items.map((item) => (
        <div key={item.id}>
          <ul>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;
```

2. Creating the item component:
```javascript
import React from 'react';

const Item = ({ name, quantity }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{quantity}</li>
      </ul>
    </div>
  );
};

export default Item;
```

3. Creating the new item form component:
```javascript
import React, { useState } from 'react';

const NewItemForm = ({ addItem }) => {
  const initialState = { name: '', quantity: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formData.name, formData.quantity);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        name="name"
        placeholder="Item name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItemForm;
```

Note: The above code snippets are extracted and modified based on the script provided. Some minor modifications may be necessary depending on the specific implementation context.