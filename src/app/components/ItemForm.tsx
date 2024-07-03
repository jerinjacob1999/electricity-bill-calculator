// components/ItemForm.tsx
import React, { useState } from 'react';
export interface Item {
  name: string;
  watt: number;
  hours: number;
  quantity: number;
}

interface ItemFormProps {
  onAddItem: (item: Item) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [watt, setWatt] = useState('');
  const [hours, setHours] = useState('');
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem({ name, watt: parseFloat(watt), hours: parseFloat(hours), quantity });
    setName('');
    setWatt('');
    setHours('');
    setQuantity(1)
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Watt"
        value={watt}
        onChange={(e) => setWatt(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Hours Used"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
